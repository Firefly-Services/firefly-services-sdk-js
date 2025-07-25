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
import type { BlendDetails } from "./BlendDetails";
import type { Bounds } from "./Bounds";
import type { ChildrenLayerDetails } from "./ChildrenLayerDetails";
import type { FillDetails } from "./FillDetails";
import type { LayerMaskDetails } from "./LayerMaskDetails";
import type { LayerType } from "./LayerType";
import type { ManifestJobAdjustmentDetails } from "./ManifestJobAdjustmentDetails";
import type { SmartObjectDetails } from "./SmartObjectDetails";
import type { TextLayerDetails } from "./TextLayerDetails";
export type LayerDetails = {
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
    /**
     * An array of nested layer objects. Only layerSections (group layers) can include children
     */
    children?: ChildrenLayerDetails[];
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
    adjustments?: ManifestJobAdjustmentDetails;
    bounds?: Bounds;
    blendOptions?: BlendDetails;
    mask?: LayerMaskDetails;
    smartObject?: SmartObjectDetails;
    fill?: FillDetails;
    text?: TextLayerDetails;
};
