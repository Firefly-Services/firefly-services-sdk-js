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

/**
 * Supported dimensions for the generated image.
 * | Dimensions | Description |
 * | -----------| ----- |
 * | { "width": 1024, "height": 1024} | Square (1:1) |
 * | { "width": 1408, "height": 1024 } | Landscape (4:3) |
 * | { "width": 1024, "height": 1408 } | Portrait (3:4) |
 * | { "width": 1792, "height": 1024 } | Widescreen (16:9) |
 *
 */
export type ImageSize = {
    width: number;
    height: number;
};
