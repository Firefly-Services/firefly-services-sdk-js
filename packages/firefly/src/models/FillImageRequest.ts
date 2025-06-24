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
import type { InputImage } from "./InputImage";
/**
 * Fill images payload
 */
export type FillImageRequest = {
    /**
     * The number of variations to generate. numVariations will default to the number of seeds, or to 1 if seeds is not specified.
     */
    numVariations?: number;
    /**
     * Array of seed(s) that ensure consistent image generation across multiple API calls. For example, you can use the same seed to generate a similar image with different styles. If specified alongside with numVariations, the number of seeds must be the equal to numVariations
     */
    seeds?: number[];
    /**
     * The prompt used to generate the image. The longer the prompt - the better
     */
    prompt?: string;
    /**
     * Inference will try to generate against this prompt
     */
    negativePrompt?: string;
    /**
     * Input image to fill with generative content. You can either use a <code>url</code> or an <code>uploadId</code> as the source for the uploaded image.
     * <strong>Note</strong>: Only allow listed domains are allowed to be accepted as input URL in the request. The allow-listed domains are as follows:
     * <ul><li><code>amazonaws.com</code></li><li><code>windows.net</code></li><li><code>dropboxusercontent.com</code></li></ul>
     */
    image: InputImage;
    /**
     * A hyphen-separated string combining the ISO 639-1 language code and the ISO 3166-1 region, such as "en-US". When a locale is set, the prompt will be biased to generate more relevant content for that region. The locale will be auto-detected if not specified based on the user's profile and Accept-Language header.
     */
    promptBiasingLocaleCode?: string;
};
