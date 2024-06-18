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
import type { OutputImage } from "./OutputImage";
import type { Size } from "./Size";
/**
 * text-to-image response
 */
export type GenerateImagesResponse = {
    /**
     * If size was passed as input, this value should be the same as the one passed as input.
     */
    size: Size;
    /**
     * Each image will have a storage item.
     */
    outputs: OutputImage[];
    /**
     * The user may see that the generation does not comply to its full prompt
     */
    promptHasDeniedWords?: boolean;
    /**
     * The user may see that the generation does not comply to its full prompt
     */
    promptHasBlockedArtists?: boolean;
    /**
     * Will be same as input, if input was specified
     */
    contentClass?: ContentClass;
};
