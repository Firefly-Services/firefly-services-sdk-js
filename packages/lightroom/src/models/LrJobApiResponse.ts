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
import type { JobOutputDetails } from "./JobOutputDetails";
import type { JobStatusLink } from "./JobStatusLink";
export type LrJobApiResponse = {
    /**
     * the job's id requested (tbd. different case from Sensei?)
     */
    jobId?: string;
    /**
     * Created timestamp of the job (YYYY-DD-MMThh:mm:ss.mmmmmZ) (epoch?)
     */
    created?: string;
    /**
     * Modified timestamp of the job (YYYY-DD-MMThh:mm:ss.mmmmmZ) (epoch?)
     */
    modified?: string;
    /**
     * output parameters for the job
     */
    outputs?: JobOutputDetails[];
    _links?: JobStatusLink;
};
