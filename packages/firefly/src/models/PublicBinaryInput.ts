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
/**
 *  You can either use a <code>url</code> or an <code>uploadId</code> as the source for the uploaded image.
 */
export type PublicBinaryInput = {
    /**
     * This URL of an uploaded image.
     */
    url?: string;
    /**
     * UUID of the uploaded object
     */
    uploadId?: string;
};
