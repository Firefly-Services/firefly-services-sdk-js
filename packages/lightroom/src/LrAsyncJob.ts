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

import { ApiResponse } from "@adobe/firefly-services-sdk-core";
import { AsyncJobState, AsyncJobPromise } from "@adobe/firefly-services-sdk-core/internal";
import { LrJobApiResponse } from "./models/LrJobApiResponse";
import { JobStatus } from "./models/JobStatus";
import { JobStatusLinkResponse } from "./models/JobStatusLinkResponse";

type LrJobLinkPromise = Promise<ApiResponse<JobStatusLinkResponse>>;
/* eslint-disable  @typescript-eslint/no-explicit-any -- to support any parameters if in future we get another API*/
type LrJobStatusFetcher = (...args: any[]) => Promise<ApiResponse<LrJobApiResponse>>;

export class LrAsyncJobError extends Error {
    constructor(message: string, public readonly details: JobStatusLinkResponse) {
        const errorMsg = `message : ${JSON.stringify(details, null, 2)}`;
        super(errorMsg);
    }
}

export class LrAsyncJob extends AsyncJobPromise<LrJobApiResponse> {
    private _jobId: string | undefined = undefined;

    constructor(private _jobLinkPromise: LrJobLinkPromise, private _statusFetcher: LrJobStatusFetcher) {
        super();
    }

    protected async _fetchJobStatus(): Promise<void> {
        if (!this._jobId) {
            const valid = await this.ensureJobId();
            if (!valid) {
                return;
            }
        }
        this._response = await this._statusFetcher(this._jobId);
        this._updateStatus();
    }

    protected _getNextRetryTimeInMilliSecs(): number {
        // Retry every 2 seconds, default valuse set in aio-lib-photoshop
        return 2000;
    }

    /**
     * Check the status returned by the server and update the state of the job.
     * initial state is PENDING
     * if atleast one output is RUNNING, state is IN_PROGRESS
     * when all jobs are finished and if any output is FAILED, state is FAILED and error is set
     * if all outputs are COMPLETED, state is COMPLETED
     */
    private _updateStatus() {
        const outputStatuses = {
            pending: 0,
            running: 0,
            failed: 0,
            completed: 0
        };
        for (const output of this._response?.result?.outputs || []) {
            if (output.status === JobStatus.PENDING) {
                outputStatuses.pending += 1;
            } else if (output.status === JobStatus.RUNNING) {
                outputStatuses.running += 1;
            } else if (output.status === JobStatus.FAILED) {
                outputStatuses.failed += 1;
            } else if (output.status === JobStatus.SUCCEEDED) {
                outputStatuses.completed += 1;
            }
        }

        // If any output is running, the job is in progress
        if (outputStatuses.running > 0) {
            this._state = AsyncJobState.IN_PROGRESS;
            return;
        }

        // When all jobs are finished and If any output is failed, the job has failed
        if (outputStatuses.failed > 0 && outputStatuses.pending === 0) {
            this._state = AsyncJobState.FAILED;
            this._error = new LrAsyncJobError("Job failed", this._response?.result);
            return;
        }

        // If all outputs are completed, the job has completed
        if (outputStatuses.completed === this._response?.result?.outputs.length) {
            this._state = AsyncJobState.COMPLETED;
            return;
        }
    }

    private async ensureJobId(): Promise<boolean> {
        try {
            const { result } = await this._jobLinkPromise;
            const statusUrl = result?._links?.self?.href;
            if (!statusUrl) {
                this._state = AsyncJobState.FAILED;
                this._error = new LrAsyncJobError("Job link does not contain status url", result);
                return false;
            }
            this._jobId = statusUrl.split("/").pop();
        } catch (error) {
            this._state = AsyncJobState.FAILED;
            this._error = error;
            return false;
        }
        return true;
    }
}
