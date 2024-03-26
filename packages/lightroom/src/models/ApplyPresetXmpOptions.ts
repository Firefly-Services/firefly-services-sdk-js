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

/**
 * Options for applying a preset xmp to an image
 */
export type ApplyPresetXmpOptions = {
    /**
     * The XMP to apply
     */
    xmp: string;
    /**
     * The combination of flip and/or rotate to apply
     */
    orientation?: number;
};
