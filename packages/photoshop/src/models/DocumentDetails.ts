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
import type { ChannelModeType } from "./ChannelModeType";
import type { DepthType } from "./DepthType";
import type { FillType } from "./FillType";
export type DocumentDetails = {
    /**
     * In pixels
     */
    height: number;
    /**
     * In pixels
     */
    width: number;
    /**
     * In pixels per inch
     */
    resolution: number;
    fill: FillType;
    mode: ChannelModeType;
    depth?: DepthType;
};
