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

import type { ChannelModeType } from "./ChannelModeType";
import type { ImageModeType } from "./ImageModeType";
export type ManifestJobDocumentDetails = {
    /**
     * The name of the document
     */
    name?: string;
    /**
     * In pixels
     */
    height?: number;
    /**
     * In pixels
     */
    width?: number;
    /**
     * The version of Photoshop used to create the document
     */
    photoshopBuild?: string;
    imageMode?: ImageModeType;
    bitDepth?: ChannelModeType;
    /**
     * The name of the ICC profile used for the document
     */
    iccProfileName?: string;
};
