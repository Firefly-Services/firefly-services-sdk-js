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
import { SenseiJobApiResponse } from "../src/models/SenseiJobApiResponse";
import { JobStatusLinkResponse } from "../src/models/JobStatusLinkResponse";
import { JobStatus } from "../src/models/JobStatus";

type SenseiJobLinkPromise = Promise<ApiResponse<JobStatusLinkResponse>>;
/* eslint-disable  @typescript-eslint/no-explicit-any -- to support any parameters if in future we get another API*/
type SenseiJobStatusFetcher = (...args: any[]) => Promise<ApiResponse<SenseiJobApiResponse>>;

export class SenseiAsyncJobError extends Error {
    constructor(message: string, public readonly details: JobStatusLinkResponse) {
        const errorMsg = `message : ${JSON.stringify(details, null, 2)}`;
        super(errorMsg);
    }
}

/**
 * This is manually created class to handle the async job status for Photohsop Sensei APIs
 */
export class SenseiAsyncJob extends AsyncJobPromise<SenseiJobApiResponse> {
    private _jobId: string | undefined = undefined;

    constructor(
        private _jobLinkPromise: SenseiJobLinkPromise,
        private _statusFetcher: SenseiJobStatusFetcher
    ) {
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
        const status = this._response?.result?.status;
        if (status === JobStatus.PENDING) {
            this._state = AsyncJobState.PENDING;
        } else if (status === JobStatus.RUNNING) {
            this._state = AsyncJobState.IN_PROGRESS;
        } else if (status === JobStatus.FAILED) {
            this._state = AsyncJobState.FAILED;
            this._error = new SenseiAsyncJobError("Job failed", this._response?.result);
        } else if (status === JobStatus.SUCCEEDED) {
            this._state = AsyncJobState.COMPLETED;
        }
    }

    private async ensureJobId(): Promise<boolean> {
        try {
            const { result } = await this._jobLinkPromise;
            const statusUrl = result?._links?.self?.href;
            if (!statusUrl) {
                this._state = AsyncJobState.FAILED;
                this._error = new SenseiAsyncJobError("Job link does not contain status url", result);
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
