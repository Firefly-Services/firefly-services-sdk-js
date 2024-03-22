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

import type { ImageOutput } from "./ImageOutput";
import type { ImageSize } from "./ImageSize";
/**
 * Expand Image response
 */
export type ExpandImageResponse = {
    /**
     * Unique identifier indicating the model and pipeline version with which the images were generated.
     */
    pipelineVersion?: string;
    /**
     * Specify a prompt for generating content in the masked area. If not provided, the existing style of the source image will be used.
     */
    prompt?: string;
    /**
     * Flag to indicate if denied words were detected in the prompt.
     */
    promptHasDeniedWords?: boolean;
    /**
     * Flag to indicate if artist names were detected in the prompt.
     */
    promptHasBlockedArtist?: boolean;
    size?: ImageSize;
    images?: ImageOutput[];
};
