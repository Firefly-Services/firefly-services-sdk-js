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
import type { MaskFormat } from "./MaskFormat";
import type { SenseiColor } from "./SenseiColor";
import type { StorageType } from "./StorageType";
/**
 * a PNG file
 */
export type SenseiOutputDetails = {
    /**
     * Presigned POST URL to the output file
     */
    href: string;
    storage: StorageType;
    mask?: MaskFormat;
    color?: SenseiColor;
    /**
     * If the file already exists, indicates if the output file should be overwritten. Will eventually support eTags. Only applies to CC Storage
     */
    overwrite?: boolean;
};
