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

import type { ImageFormatType } from "./ImageFormatType";
import type { StorageType } from "./StorageType";
/**
 * rendition object
 */
export type RenditionLinkDetails = {
    /**
     * the rendition location
     */
    href?: string;
    storage?: StorageType;
    /**
     * the requested rendition width in pixels
     */
    width?: number;
    type?: ImageFormatType;
};
