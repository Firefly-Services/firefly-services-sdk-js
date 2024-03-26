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

import type { ImageGenerateSize } from "./ImageGenerateSize";
import type { ImageOutput } from "./ImageOutput";
/**
 * text-to-image response
 */
export type GenerateImagesResponse = {
    /**
     * Unique identifier indicating the model and pipeline version with which the images were generated.
     */
    version?: string;
    size?: ImageGenerateSize;
    outputs?: ImageOutput[];
};
