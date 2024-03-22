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

import type { ImageFillMask } from "./ImageFillMask";
import type { UploadedResource } from "./UploadedResource";
export type FillImageRequest = {
    /**
     * If provided, the masked area will be rendered with content generated from prompt. If not provided, the masked area will be rendered with content matching the existing style of the source image.
     */
    prompt?: string;
    /**
     * The number of variations to generate. If seeds array is specified, "n" does not have to be specified.
     */
    n?: number;
    /**
     * Array of seed(s) that will provide generation stability across multiple API calls. E.g. You can use the same seed to generate a similar image with different styles. If "n" is specified, the number of elements in the array must be equal to "n".
     */
    seeds?: number[];
    image: UploadedResource;
    mask: ImageFillMask;
};
