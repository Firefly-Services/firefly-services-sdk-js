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

import type { ImageFormatType } from "./ImageFormatType";
import type { StorageType } from "./StorageType";
export type LrOutputDetails = {
    /**
     * Presigned POST URL to the output file
     */
    href: string;
    storage: StorageType;
    type: ImageFormatType;
    /**
     * If the output file already exists should it be overwritten.overwrite flag is used only when storage = 'adobe'
     */
    overwrite?: boolean;
    /**
     * Quality of the JPEG outputs (will be ignored for other output types). Ranges from 0 to 12, with 12 as the highest quality.
     */
    quality?: number;
};
