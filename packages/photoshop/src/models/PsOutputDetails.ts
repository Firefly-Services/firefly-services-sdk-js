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
import type { IccProfileDetails } from "./IccProfileDetails";
import type { ImageFormatType } from "./ImageFormatType";
import type { LayerReference } from "./LayerReference";
import type { StorageType } from "./StorageType";
import type { TrimToCanvasType } from "./TrimToCanvasType";
/**
 * output object
 */
export type PsOutputDetails = {
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
     * width, in pixels, of the renditions. Width of 0 generates a full size rendition. Height is not necessary as the rendition generate will automatically figure out the correct width-to-height aspect ratio. Only supported for image rendition
     */
    width?: number;
    /**
     * size, in pixels, of the renditions. When width is 0, maxWidth can be provided to get the rendition size. maxWidth when less than document width gets precedence over width. Height is not neccessary as the rendition generate will automatically maintain the aspect ratio.
     */
    maxWidth?: number;
    /**
     * quality of the renditions for JPEG. Range from 1 to 7, with 7 as the highest quality.
     */
    quality?: number;
    compression?: CompressionType;
    trimToCanvas?: TrimToCanvasType;
    /**
     * An array of layer objects.
     * By including this array you are signaling that you'd like a rendition created from these layer id's or layer names. Excluding it will generate a document-level rendition.
     */
    layers?: LayerReference[];
    iccProfile?: IccProfileDetails;
};
