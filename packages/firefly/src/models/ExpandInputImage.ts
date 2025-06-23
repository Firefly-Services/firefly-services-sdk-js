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
import type { PublicBinaryInput } from "./PublicBinaryInput";
export type ExpandInputImage = {
    /**
     * Source of the image to be expanded.
     */
    source: PublicBinaryInput;
    /**
     * Defines the expanding area where the source image should expand towards. Mask has to be larger than the source image, and the target size has to match the size of the mask, or it will be inferred from the mask.
     */
    mask?: PublicBinaryInput;
};
