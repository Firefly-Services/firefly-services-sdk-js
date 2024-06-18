/*************************************************************************
 *
 * ADOBE CONFIDENTIAL
 * ___________________
 *
 *  Copyright 2024 Adobe
 *  All Rights Reserved.
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

export class Deferred<T> {
    private _promise: Promise<T> | undefined;
    private _resolvePromise!: (value: T) => void;
    private _rejectPromise!: (error: unknown) => void;
    private _isFulfilled = false;
    private _isRejected = false;

    constructor() {
        this._isFulfilled = false;
        this._isRejected = false;

        this._promise = new Promise((resolve, reject) => {
            this._resolvePromise = (value) => {
                this._isFulfilled = true;
                this._isRejected = false;
                resolve(value);
            };

            this._rejectPromise = (reason) => {
                this._isRejected = true;
                this._isFulfilled = false;
                reject(reason);
            };
        });
    }

    /**
     * Returns the associated promise.
     */
    get promise(): Promise<T> {
        return this._promise!;
    }

    /**
     * Indicates if the associated promise has been either rejected or fulfilled
     */
    get isSettled(): boolean {
        return this._isFulfilled || this._isRejected;
    }

    /**
     * Indicates if the associated promise has been fulfilled.
     */
    get isFulfilled(): boolean {
        return this._isFulfilled;
    }

    /**
     * Indicates if the associate promise has been rejected.
     */
    get isRejected(): boolean {
        return this._isRejected;
    }

    /**
     * Fulfills the associated promise with the specified value.
     *
     * @param value - used to execute the resolve method of the associated promise with the value specified.
     */
    resolve(value: T): void {
        this._resolvePromise(value);
    }

    /**
     * Rejects the associated promise with the given error.
     *
     * @param reason - reason for the rejection
     */
    reject(reason: unknown): void {
        this._rejectPromise(reason);
    }
}
