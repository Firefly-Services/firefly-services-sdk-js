/************************************************************************* 
 * ADOBE CONFIDENTIAL 
 * ___________________ 
 * 
 * Copyright 2024 Adobe 
 * All Rights Reserved. 
 * 
 * NOTICE: All information contained herein is, and remains 
 * the property of Adobe and its suppliers, if any. The intellectual 
 * and technical concepts contained herein are proprietary to Adobe 
 * and its suppliers and are protected by all applicable intellectual 
 * property laws, including trade secret and copyright laws. 
 * Dissemination of this information or reproduction of this material 
 * is strictly forbidden unless prior written permission is obtained 
 * from Adobe. 
 
**************************************************************************/

import { ApiError } from "./ApiError";
import { ApiResponse } from "./ApiResponse";
import { Deferred } from "./Deferred";
import { sleep } from "./Utils";

export enum AsyncJobState {
    PENDING = "PENDING",
    IN_PROGRESS = "IN_PROGRESS",
    COMPLETED = "COMPLETED",
    FAILED = "FAILED",
    CANCELLED = "CANCELLED"
}

export type StatusChangeCallback = (state: AsyncJobState) => void;

export abstract class AsyncJobPromise<ResultT> implements PromiseLike<ApiResponse<ResultT>> {
    private _oldState: AsyncJobState = AsyncJobState.PENDING;
    protected _state: AsyncJobState = AsyncJobState.PENDING;
    private _deferred: Deferred<ApiResponse<ResultT>>;
    protected _response?: ApiResponse<ResultT>;
    protected _error?: ApiError | Error | undefined;
    private _stautsChangeHandlers: StatusChangeCallback[] = [];

    constructor() {
        this._deferred = new Deferred<ApiResponse<ResultT>>();
        this._pollJobStatus();
    }

    /**
     * This method should be implemented by the concrete class to check the status of the job.
     */
    protected abstract _fetchJobStatus(): Promise<void>;

    then<TResult1 = ApiResponse<ResultT>, TResult2 = never>(
        onfulfilled?: ((value: ApiResponse<ResultT>) => TResult1 | PromiseLike<TResult1>) | null | undefined,
        /* eslint-disable  @typescript-eslint/no-explicit-any -- To support customised error form extending classes */
        onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null | undefined
    ): PromiseLike<TResult1 | TResult2> {
        return this._deferred.promise.then(onfulfilled, onrejected);
    }

    catch<TResult = never>(
        /* eslint-disable  @typescript-eslint/no-explicit-any -- To support customised error form extending classes */
        onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | null | undefined
    ): Promise<ApiResponse<ResultT> | TResult> {
        return this._deferred.promise.catch(onrejected);
    }

    finally(onfinally?: () => void): Promise<ApiResponse<ResultT>> {
        return this._deferred.promise.finally(onfinally);
    }

    /**
     * @returns The result of the job if the job has completed successfully.
     */
    public getResult(): ApiResponse<ResultT> {
        return this._response!;
    }

    /**
     * @returns The error details if the job has failed.
     */
    public getError(): ApiError | Error | undefined {
        return this._error;
    }

    /**
     * Gets the next time in milliseconds when the job status should be checked again.
     * This method should be implemented by the concrete class to provide an accurate value based on the value provided by the server.
     * @returns The next time in milliseconds when the job status should be checked again. Default value is 2000 milliseconds.
     */
    protected _getNextRetryTimeInMilliSecs() {
        return 2000;
    }

    /**
     * Checks if the job is done.
     * @returns true if the job is done, false otherwise.
     */
    private _isDone() {
        return this._state !== AsyncJobState.PENDING && this._state !== AsyncJobState.IN_PROGRESS;
    }

    /**
     * When the job is done, this method is called to resolve or reject the promise.
     */
    private _fullfillPromise() {
        if (this._state === AsyncJobState.COMPLETED) {
            if (this._response) this._deferred.resolve(this._response);
            return;
        }
        this._deferred.reject(this._error);
    }

    /**
     * Polls the status of the job at regular intervals, till the job is done.
     */
    private async _pollJobStatus() {
        /* eslint-disable no-await-in-loop -- We dont all the item to start immediatly, wait for updated statues before starting*/
        while (!this._isDone()) {
            await sleep(this._getNextRetryTimeInMilliSecs());
            await this._fetchJobStatus();

            this._checkNDispatchStateChange();
        }
        this._fullfillPromise();
    }

    /**
     * Check for status change and Notify listeners
     */
    private _checkNDispatchStateChange() {
        if (this._oldState !== this._state) {
            this._oldState = this._state;
            for (const listener of this._stautsChangeHandlers) {
                listener(this._state);
            }
        }
    }
}
