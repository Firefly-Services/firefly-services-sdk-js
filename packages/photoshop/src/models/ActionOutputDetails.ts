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
import type { CompressionType } from "./CompressionType";
import type { ImageFormatType } from "./ImageFormatType";
import type { StorageType } from "./StorageType";
/**
 * output object
 */
export type ActionOutputDetails = {
    /**
     * Presigned POST URL to the output file
     */
    href: string;
    storage: StorageType;
    type: ImageFormatType;
    /**
     * If the file already exists, indicates if the output file should be overwritten. Will eventually support eTags. Only applies to CC Storage
     */
    overwrite?: boolean;
    /**
     * quality of the renditions for JPEG. Range from 1 to 7, with 7 as the highest quality.
     */
    quality?: number;
    compression?: CompressionType;
};
