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
import type { JobOutputDetails } from "./JobOutputDetails";
import type { JobStatusLink } from "./JobStatusLink";
export type PsJobApiResponse = {
    /**
     * the job's id requested
     */
    jobId?: string;
    /**
     * Api output details
     */
    outputs?: JobOutputDetails[];
    _links?: JobStatusLink;
};
