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

import type { AdjustmentDetails } from "./AdjustmentDetails";
import type { BlendDetails } from "./BlendDetails";
import type { Bounds } from "./Bounds";
import type { FillDetails } from "./FillDetails";
import type { LayerMaskDetails } from "./LayerMaskDetails";
import type { LayerType } from "./LayerType";
import type { SmartObjectDetails } from "./SmartObjectDetails";
import type { TextLayerDetails } from "./TextLayerDetails";
export type ChildrenLayerDetails = {
    /**
     * the layer id. Note an id of -1 is valid and indicates a PSD that only contains a background image and no layers
     */
    id?: number;
    /**
     * the layer index
     */
    index?: number;
    /**
     * If thumbnails were requested, a presigned GET URL to the thumbnail
     */
    thumbnail?: string;
    type?: LayerType;
    /**
     * the layer name
     */
    name?: string;
    /**
     * is the layer locked
     */
    locked?: boolean;
    /**
     * is the layer visible
     */
    visible?: boolean;
    adjustments?: AdjustmentDetails;
    bounds?: Bounds;
    blendOptions?: BlendDetails;
    mask?: LayerMaskDetails;
    smartObject?: SmartObjectDetails;
    fill?: FillDetails;
    text?: TextLayerDetails;
};
