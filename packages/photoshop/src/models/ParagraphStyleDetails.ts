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

import type { ParagraphStyleAlignmentType } from "./ParagraphStyleAlignmentType";
/**
 * Paragraph style settings
 */
export type ParagraphStyleDetails = {
    /**
     * The paragraph alignment (deprecated, please use alignment)
     */
    align?: ParagraphStyleAlignmentType;
    alignment?: ParagraphStyleAlignmentType;
    /**
     * The amount of indent to add to the left margin
     */
    startIndent?: number;
    /**
     * The amount of indent to add to the right margin
     */
    endIndent?: number;
    /**
     * Toggle hyphenate for paragraph text
     */
    hyphenate?: boolean;
    /**
     * The amount of indent to add to the first line of the paragraph
     */
    firstLineIndent?: number;
    /**
     * The amount of space to add before the paragraph
     */
    spaceBefore?: number;
    /**
     * The amount of inspace to add after the paragraph
     */
    spaceAfter?: number;
};
