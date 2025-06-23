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
import type { JobError } from "./JobError";
import type { JobStatus } from "./JobStatus";
import type { JobStatusLink } from "./JobStatusLink";
import type { SenseiOutputDetails } from "./SenseiOutputDetails";
export type SenseiJobApiResponse = {
    /**
     * the job's id requested
     */
    jobId?: string;
    /**
     * Created timestamp of the job (YYYY-DD-MMThh:mm:ss.mmmmmZ)
     */
    created?: string;
    /**
     * Modified timestamp of the job (YYYY-DD-MMThh:mm:ss.mmmmmZ)
     */
    modified?: string;
    status?: JobStatus;
    output?: SenseiOutputDetails;
    errors?: JobError;
    _links?: JobStatusLink;
};
