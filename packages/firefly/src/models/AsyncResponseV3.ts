/*************************************************************************
 * ADOBE CONFIDENTIAL
 * ___________________
 *
 * Copyright 2025 Adobe
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
import type { AsyncResult } from "./AsyncResult";
export type AsyncResponseV3 = {
    /**
     * A URL to cancel the job.
     */
    cancelUrl?: /* eslint-disable  @typescript-eslint/no-explicit-any -- Required any*/
    any;
    /**
     * The ID for the asyncronous job.
     */
    jobId: /* eslint-disable  @typescript-eslint/no-explicit-any -- Required any*/
    any;
    /**
     * The progress of the running job. The value is the percentage of the job that has been completed.
     */
    progress?: number;
    /**
     * The result of the completed job.
     */
    result?: AsyncResult;
    /**
     * The status of the job.
     */
    status?: /* eslint-disable  @typescript-eslint/no-explicit-any -- Required any*/
    any;
    /**
     * A URL to show the status of the current job.
     */
    statusUrl?: /* eslint-disable  @typescript-eslint/no-explicit-any -- Required any*/
    any;
};
