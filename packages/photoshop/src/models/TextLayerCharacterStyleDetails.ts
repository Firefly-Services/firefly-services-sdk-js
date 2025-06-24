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
import type { FontColorDetails } from "./FontColorDetails";
import type { OrientationType } from "./OrientationType";
export type TextLayerCharacterStyleDetails = {
    /**
     * The beginning of the range of characters that this characterStyle applies to. Based on initial index of 0. For example a style applied to only the first two characters would be from=0 and to=1
     */
    from?: number;
    /**
     * The ending of the range of characters that this characterStyle applies to. Based on initial index of 0. For example a style applied to only the first two characters would be from=0 and to=1
     */
    to?: number;
    /**
     * in points
     */
    fontSize?: number;
    /**
     * the font's postscript name. The list of supported fonts is at https://github.com/AdobeDocs/photoshop-api-docs/blob/master/SupportedFonts.md
     */
    fontName?: string;
    orientation?: OrientationType;
    fontColor?: FontColorDetails;
};
