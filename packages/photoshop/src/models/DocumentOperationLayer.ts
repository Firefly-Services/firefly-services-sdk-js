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
import type { DeleteDetails } from "./DeleteDetails";
import type { FillDetails } from "./FillDetails";
import type { HorizontalAlignType } from "./HorizontalAlignType";
import type { LayerPosition } from "./LayerPosition";
import type { LayerType } from "./LayerType";
import type { MaskDetails } from "./MaskDetails";
import type { MoveDetails } from "./MoveDetails";
import type { SmartObject } from "./SmartObject";
import type { StorageDetails } from "./StorageDetails";
import type { TextLayerDetails } from "./TextLayerDetails";
import type { VerticalAlignType } from "./VerticalAlignType";
export type DocumentOperationLayer = {
    /**
     * Indicates you want to edit the layer identified by it's id or name. Note the object is currently empty but leaves room for further enhancements. The layer block should than contain changes from the original manifest. If you apply it to a group layer you will be effecting the attributes of the group layer itself, not the child layers. Edit layer is supported for layer type "smartObject" and "fillLayer" only.
     */
    edit?: Record<string /* eslint-disable  @typescript-eslint/no-explicit-any -- Required any*/, any>;
    move?: MoveDetails;
    add?: LayerPosition;
    delete: DeleteDetails;
    /**
     * the layer id
     */
    id: number;
    /**
     * the layer index.  Required when deleting a layer, otherwise not used
     */
    index?: number;
    /**
     * a tree of layer objects representing the PSD layer structure extracted from the psd document
     */
    children?: ChildrenLayerDetails[];
    type?: LayerType;
    input?: StorageDetails;
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
    mask?: MaskDetails;
    bounds?: Bounds;
    smartObject?: SmartObject;
    fill?: FillDetails;
    text?: TextLayerDetails;
    blendOptions?: BlendDetails;
    horizontalAlign?: HorizontalAlignType;
    verticalAlign?: VerticalAlignType;
    /**
     * Indicates if the pixels need to proportionally fill into the entire canvas of the document
     */
    fillToCanvas?: boolean;
};
