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
import type { ContentClass } from "./ContentClass";
import type { Size } from "./Size";
import type { StructureReference } from "./StructureReference";
import type { Styles } from "./Styles";
export type GenerateImagesRequest = {
    /**
     * The number of variations to generate. numVariations will default to the number of seeds, or to 1 if seeds is not specified.
     */
    numVariations?: number;
    /**
     * Array of seed(s) that ensure consistent image generation across multiple API calls. For example, you can use the same seed to generate a similar image with different styles. If specified alongside with numVariations, the number of seeds must be the equal to numVariations.
     */
    seeds?: number[];
    /**
     * The size of the requested generations. The supported dimensions for image generations are:
     * | Dimensions | Description |
     * | -----------| ----- |
     * | { "width": 2048, "height": 2048} | Square (1:1) |
     * | { "width": 2304, "height": 1792 } | Landscape (4:3) |
     * | { "width": 1792, "height": 2304 } | Portrait (3:4) |
     * | { "width": 2688, "height": 1536 } | Widescreen (16:9) |
     * | { "width": 1344, "height": 768 } |(7:4) |
     * |{ "width": 1152, "height": 896 } |(9:7) |
     * |{ "width": 896, "height": 1152 } |(7:9) |
     * | { "width": 1024, "height": 1024} | Square (1:1) |
     */
    size?: Size;
    /**
     * The prompt used to generate the image. The longer the prompt - the better.
     */
    prompt: string;
    /**
     * Inference will try to generate against this prompt.
     */
    negativePrompt?: string;
    /**
     * Will guide the generation to being more photographic or more like art.
     */
    contentClass?: ContentClass;
    /**
     * Adjusts the overall intensity of your photo's existing visual characteristics.
     */
    visualIntensity?: number;
    /**
     * You can specify a preset, a reference image or both.
     */
    style?: Styles;
    /**
     * A hyphen-separated string combining the ISO 639-1 language code and the ISO 3166-1 region, such as "en-US". When a locale is set, the prompt will be biased to generate more relevant content for that region. The locale will be auto-detected if not specified based on the user's profile and Accept-Language header.
     */
    promptBiasingLocaleCode?: string;
    /**
     * An image is tileable if it can be repeated infinitely in any direction without showing visible seams or edges.
     */
    tileable?: boolean;
    /**
     * Use structure to ensure the generated image maintains a similar layout and organization as the reference image, providing a cohesive and visually balanced result.
     */
    structure?: StructureReference;
};
