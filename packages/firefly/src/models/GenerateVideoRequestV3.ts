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
import type { ClinetoSize } from "./ClinetoSize";
import type { InputImageV3 } from "./InputImageV3";
import type { VideoSettingsV3 } from "./VideoSettingsV3";
export type GenerateVideoRequestV3 = {
    /**
     * The constant rate factor for encoding video. 0 indicates a lossless generation, with the highest quality and largest file size. 63 indicates the worst quality generation with the smallest file size. The suggested value range is 17-23.
     */
    bitRateFactor?: number;
    /**
     * The details of the image used as a keyframe for the generated video. Provided images are used as a first frame or final frame to guide the video generation.
     */
    image?: InputImageV3;
    /**
     * The API will try to generate against the characteristcs in this prompt.
     */
    negativePrompt?: string;
    /**
     * The prompt used to generate the image. The longer the prompt, the better.
     */
    prompt?: string;
    /**
     * The seed reference value. Currently only 1 seed is supported.
     */
    seeds?: number[];
    /**
     * The dimensions of the generated video. Review the usage notes for [supported aspect ratios](../getting_started/usage_notes/) and the sizes associated with them.
     */
    sizes?: ClinetoSize[];
    /**
     * The camera and shot control settings.
     */
    videoSettings?: VideoSettingsV3;
};
