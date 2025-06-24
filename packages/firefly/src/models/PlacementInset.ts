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
/**
 * Margin values in target size
 */
export type PlacementInset = {
    /**
     * The space between left edge of the result image and left edge of the placed object image.
     */
    left?: number;
    /**
     * The space between top edge of the result image and top edge of the placed object image.
     */
    top?: number;
    /**
     * The space between right edge of the result image and right edge of the placed object image.
     */
    right?: number;
    /**
     * The space between bottom edge of the result image and bottom edge of the placed object image.
     */
    bottom?: number;
};
