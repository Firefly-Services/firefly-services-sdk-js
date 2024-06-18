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
import type { FocalSelector } from "./FocalSelector";
export type DepthBlurDetails = {
    /**
     * The distance of the point to be in focus. 0 would be the nearest point, 100 would be the furthest point
     */
    focalDistance?: number;
    /**
     * The range of the focal point
     */
    focalRange?: number;
    focalSelector?: FocalSelector;
    /**
     * If enabled uses selectsubject to automatically select the prominent subject for focus. Also would override focalDistance
     */
    focusSubject?: boolean;
    /**
     * The amount of blur to apply
     */
    blurStrength?: number;
    /**
     * The amount of haze to apply
     */
    haze?: number;
    /**
     * The value of the temperature to apply. -50 would be coldest and 50 would be the warmest setting
     */
    temp?: number;
    /**
     * The amount of the tint to apply
     */
    tint?: number;
    /**
     * The amount of the saturation to apply. -50 implies fully unsaturated colors and 50 will fully saturate the colors
     */
    saturation?: number;
    /**
     * The amount of the brightness to apply
     */
    brightness?: number;
    /**
     * The amount of the graining to add to the image
     */
    grain?: number;
};
