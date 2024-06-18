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
import type { AntiAliasType } from "./AntiAliasType";
import type { CharacterStyleDetails } from "./CharacterStyleDetails";
import type { EastAsianFeatures } from "./EastAsianFeatures";
import type { OrientationType } from "./OrientationType";
import type { ParagraphStyleDetails } from "./ParagraphStyleDetails";
import type { TextType } from "./TextType";
/**
 * Supported text layer attributes.
 */
export type TextDetails = {
    /**
     * The contents of the text layer (deprecated, please use content)
     */
    contents?: string;
    /**
     * The content of the text layer
     */
    content?: string;
    orientation?: OrientationType;
    /**
     * The text's rotation in angle
     */
    rotate?: number;
    antiAlias?: AntiAliasType;
    eastAsianFeatures?: EastAsianFeatures;
    /**
     * Array of character_style objects. Any of the `characterStyles` property is required.
     */
    characterStyles?: CharacterStyleDetails[];
    /**
     * Array of paragraph_style objects. Any of the `paragraphStyles` properties is required.
     */
    paragraphStyles?: ParagraphStyleDetails[];
    textType?: TextType;
};
