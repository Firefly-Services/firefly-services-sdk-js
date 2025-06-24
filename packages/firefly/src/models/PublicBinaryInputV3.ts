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
export type PublicBinaryInputV3 = {
    /**
     * The ID of the file in Adobe Creative Cloud. Has to be a Creative Cloud file asset ID.
     */
    creativeCloudFileId?: string;
    /**
     * The internal ID for a storage item that is coming from other outputs.
     */
    uploadId?: string;
    /**
     * The pre-signed URL for the input file.
     */
    url?: string;
};
