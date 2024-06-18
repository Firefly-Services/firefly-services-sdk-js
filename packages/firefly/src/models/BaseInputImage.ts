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
import type { PublicBinaryInput } from "./PublicBinaryInput";
/**
 * Source image which will be used to generate similar images
 */
export type BaseInputImage = {
    /**
     * Source of the reference image used to generate similar images. You can either use a <code>url</code> or an <code>uploadId</code> as the source for the uploaded image.
     * <strong>Note</strong>: Only allow listed domains are allowed to be accepted as input URL in the request. The allow-listed domains are as follows:
     * <ul><li><code>amazonaws.com</code></li><li><code>windows.net</code></li><li><code>dropboxusercontent.com</code></li></ul>
     */
    source: PublicBinaryInput;
};
