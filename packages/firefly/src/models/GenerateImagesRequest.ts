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

import type { ContentClass } from "./ContentClass";
import type { ImageGenerateSize } from "./ImageGenerateSize";
import type { PhotoSettings } from "./PhotoSettings";
import type { Styles } from "./Styles";
export type GenerateImagesRequest = {
    /**
     * The prompt used to generate the image. The longer the prompt - the better
     */
    prompt: string;
    /**
     * The model will avoid these words in the generated content.
     */
    negativePrompt?: string;
    /**
     * Will guide the generation to being more photographic or more like art
     */
    contentClass?: ContentClass;
    /**
     * The number of variations to generate. If seeds array is specified, "n" does not have to be specified.
     */
    n?: number;
    /**
     * Array of seed(s) that will provide generation stability across multiple API calls. E.g. You can use the same seed to generate a similar image with different styles. If "n" is specified, the number of elements in the array must be equal to "n".
     */
    seeds?: number[];
    size?: ImageGenerateSize;
    /**
     * This is only valid if contentClass is photo, otherwise it will be ignored
     */
    photoSettings?: PhotoSettings;
    /**
     * You can specify a preset, a reference image or both
     */
    styles?: Styles;
    /**
     * Adjusts the overall intensity of your photo's existing visual characteristics
     */
    visualIntensity?: number;
    /**
     * A hyphen separated string, combining the ISO 639-1 language code and the ISO 3166-1 region, such as "en-US". When a locale is set, the prompt will be debiased to generated more relevant content to that region. If not specified, the locale will be auto detected, based on user's profile and Accept-Language header.
     */
    locale?: string;
};
