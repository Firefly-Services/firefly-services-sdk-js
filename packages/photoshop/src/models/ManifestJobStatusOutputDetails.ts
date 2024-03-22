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
import type { LayerDetails } from "./LayerDetails";
import type { ManifestJobDocumentDetails } from "./ManifestJobDocumentDetails";
export type ManifestJobStatusOutputDetails = {
    /**
     * the original input href
     */
    input?: string;
    /**
     * Created timestamp of the job (YYYY-DD-MMThh:mm:ss.mmmmmZ)
     */
    created?: string;
    /**
     * Modified timestamp of the job (YYYY-DD-MMThh:mm:ss.mmmmmZ)
     */
    modified?: string;
    status?: JobStatus;
    document?: ManifestJobDocumentDetails;
    /**
     * a tree of layer objects representing the PSD layer structure extracted from the psd document
     */
    layers?: LayerDetails[];
};
