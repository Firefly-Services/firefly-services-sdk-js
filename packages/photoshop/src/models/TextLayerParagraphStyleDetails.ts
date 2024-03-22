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

import type { AlignmentType } from "./AlignmentType";
/**
 * If the same supported attributes apply to all characters in the layer than this will be an array of one item, otherwise each paragraphStyle object will have a 'from' and 'to' value indicating the range of characters that the style applies to.
 */
export type TextLayerParagraphStyleDetails = {
    /**
     * The beginning of the range of characters that this paragraphStyle applies to. Based on initial index of 0. For example a style applied to only the first two characters would be from=0 and to=1
     */
    from?: number;
    /**
     * The ending of the range of characters that this paragraphStyle applies to. Based on initial index of 0. For example a style applied to only the first two characters would be from=0 and to=1
     */
    to?: number;
    alignment?: AlignmentType;
};
