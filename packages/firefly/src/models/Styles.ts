/*************************************************************************
 * ADOBE CONFIDENTIAL
 * ___________________
 *
 * Copyright 2024 Adobe Inc.
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

import type { UploadedResource } from "./UploadedResource";
/**
 * Additional styles and reference image to be applied when generating variations.
 */
export type Styles = {
    /**
     * List of style presets (See "Image Model Styles" under "Getting Started" guides) that are applied to generated content
     */
    presets?: string[];
    /**
     * Firefly will detect the style in the image and apply the same style in the generated image
     */
    referenceImage?: UploadedResource;
    /**
     * Sets the intensity at which to apply the styles
     */
    strength?: number;
};
