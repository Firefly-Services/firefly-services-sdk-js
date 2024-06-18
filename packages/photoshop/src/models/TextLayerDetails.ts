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
import type { TextLayerCharacterStyleDetails } from "./TextLayerCharacterStyleDetails";
import type { TextLayerParagraphStyleDetails } from "./TextLayerParagraphStyleDetails";
/**
 * text settings
 */
export type TextLayerDetails = {
    /**
     * the text string
     */
    content?: string;
    /**
     * characterStyle settings. If the same supported attributes apply to all characters in the layer than this will be an array of one item, otherwise each characterStyle object will have a 'from' and 'to' value indicating the range of characters that the style applies to.
     */
    characterStyles?: TextLayerCharacterStyleDetails[];
    /**
     * paragraphStyles settings. If the same supported attributes apply to all characters in the layer than this will be an array of one item, otherwise each paragraphStyle object will have a 'from' and 'to' value indicating the range of characters that the style applies to.
     */
    paragraphStyles?: TextLayerParagraphStyleDetails[];
};
