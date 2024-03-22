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

import type { WhiteBalance } from "./WhiteBalance";
export type EditOptions = {
    Contrast?: number;
    Saturation?: number;
    VignetteAmount?: number;
    Vibrance?: number;
    Highlights?: number;
    Shadows?: number;
    Whites?: number;
    Blacks?: number;
    Clarity?: number;
    Dehaze?: number;
    Texture?: number;
    Sharpness?: number;
    ColorNoiseReduction?: number;
    NoiseReduction?: number;
    SharpenDetail?: number;
    SharpenEdgeMasking?: number;
    Exposure?: number;
    SharpenRadius?: number;
    WhiteBalance?: WhiteBalance;
};
