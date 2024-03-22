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

import type { JobStatus } from "./JobStatus";
import type { Links } from "./Links";
export type JobOutputDetails = {
    /**
     * the original input file path
     */
    input?: string;
    status?: JobStatus;
    _links?: Links;
    /**
     * Description of the exact error that is reported by the requested job. Will appear in the response only if there is an error.
     */
    details?: string;
};
