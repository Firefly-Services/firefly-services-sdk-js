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
import type { ChildrenLayerDetails } from "./ChildrenLayerDetails";
import type { FillDetails } from "./FillDetails";
import type { LayerType } from "./LayerType";
import type { MaskDetails } from "./MaskDetails";
import type { SmartObject } from "./SmartObject";
import type { StorageDetails } from "./StorageDetails";
import type { TextLayerDetails } from "./TextLayerDetails";
export type DocumentCreateLayer = {
    type: LayerType;
    input: StorageDetails;
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
    children?: ChildrenLayerDetails[];
    mask?: MaskDetails;
    smartObject?: SmartObject;
    fill?: FillDetails;
    text?: TextLayerDetails;
    blendOptions?: BlendDetails;
};
