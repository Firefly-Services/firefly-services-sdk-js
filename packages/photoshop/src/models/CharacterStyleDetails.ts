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
import type { AutoKernType } from "./AutoKernType";
import type { BaselineType } from "./BaselineType";
import type { ColorDetails } from "./ColorDetails";
import type { FontCaps } from "./FontCaps";
/**
 * character style settings
 */
export type CharacterStyleDetails = {
    /**
     * The font size, in pixels
     */
    size?: number;
    /**
     * the font's postscript name to be used to set the font for this layer.
     */
    fontPostScriptName?: string;
    color?: ColorDetails;
    /**
     * The font's leading value, where leading is the distance between each line of text.
     */
    leading?: number;
    /**
     * The font's tracking value, where tracking is the horizontal spacing between a range of characters.
     */
    tracking?: number;
    baseline?: BaselineType;
    fontCaps?: FontCaps;
    autoKern?: AutoKernType;
    /**
     * Toggle strikethrough for selected text
     */
    strikethrough?: boolean;
    /**
     * Toggle bold for selected text
     */
    syntheticBold?: boolean;
    /**
     * Toggle italic for selected text
     */
    syntheticItalic?: boolean;
    /**
     * Toggle underlining of text
     */
    underline?: boolean;
    /**
     * Toggle text ligature, which are special characters in a font that combine two (or more)
     */
    ligature?: boolean;
    /**
     * Toggle automatic formatting of fractions: numbers separated by a slash (such as 1/2)
     */
    fractions?: boolean;
    /**
     * Toggle stylisticAlternates, which formats stylized characters that create a purely aesthetic effect
     */
    stylisticAlternates?: boolean;
    /**
     * The amount of vertical scaling to apply to the font
     */
    verticalScale?: number;
    /**
     * The amount of horizontal scaling to apply to the font
     */
    horizontalScale?: number;
};
