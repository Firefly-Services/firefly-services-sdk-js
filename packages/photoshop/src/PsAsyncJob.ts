/*************************************************************************
 *
 * ADOBE CONFIDENTIAL
 * ___________________
 *
 *  Copyright 2024 Adobe Inc.
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
import { PsJobApiResponse } from "./models/PsJobApiResponse";
import { JobStatusLinkResponse } from "./models/JobStatusLinkResponse";
import { ManifestJobApiResponse } from "./models/ManifestJobApiResponse";
import { JobOutputStatus } from "./models/JobOutputStatus";

type PsJobLinkPromise = Promise<ApiResponse<JobStatusLinkResponse>>;

/**
 * PsJobResponse can be either a ManifestJobApiResponse or PsJobApiResponse
 */
export type PsJobResponse = ManifestJobApiResponse | PsJobApiResponse;
/* eslint-disable  @typescript-eslint/no-explicit-any -- to support any parameters if in future we get another API*/
type PsJobStatusFetcher = (...args: any[]) => Promise<ApiResponse<PsJobResponse>>;

export class PsAsyncJobError extends Error {
    constructor(message: string, public readonly details: JobStatusLinkResponse) {
        const errorMsg = `message : ${JSON.stringify(details, null, 2)}`;
        super(errorMsg);
    }
}

export class PsAsyncJob extends AsyncJobPromise<PsJobResponse> {
    private _jobId: string | undefined = undefined;

    constructor(private _jobLinkPromise: PsJobLinkPromise, private _statusFetcher: PsJobStatusFetcher) {
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
            uploading: 0,
            failed: 0,
            completed: 0
        };
        for (const output of this._response?.result?.outputs || []) {
            if (output.status === JobOutputStatus.PENDING) {
                outputStatuses.pending += 1;
            } else if (output.status === JobOutputStatus.RUNNING) {
                outputStatuses.running += 1;
            } else if (output.status === JobOutputStatus.FAILED) {
                outputStatuses.failed += 1;
            } else if (output.status === JobOutputStatus.SUCCEEDED) {
                outputStatuses.completed += 1;
            } else if (output.status === JobOutputStatus.UPLOADING) {
                outputStatuses.uploading += 1;
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
            this._error = new PsAsyncJobError("Job failed", this._response?.result);
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
                this._error = new PsAsyncJobError("Job link does not contain status url", result);
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
