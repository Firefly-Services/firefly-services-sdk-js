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
export type InputImage = {
    /**
     * Upload an image you want to fill.
     */
    source: PublicBinaryInput;
    /**
     * Mask image which will be used replace the background of the image.<br><strong>Note:</strong> The minimum accepted size for the larger side of the image is 600 px.
     */
    mask: PublicBinaryInput;
};
