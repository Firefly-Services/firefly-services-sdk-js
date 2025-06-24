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
import type { PlacementAlignment } from "./PlacementAlignment";
import type { PlacementInset } from "./PlacementInset";
export type Placement = {
    /**
     * Defines the inward displacement applied to the image's edges. This parameter specifies the distance by which each edge of the image will be pushed inward, thereby reducing the visible area by the specified amount on all sides.
     */
    inset?: PlacementInset;
    /**
     * Specifies how the image will be anchored within the available space for each direction. For horizontal, (0,1,2)=(center, left, right). For vertical, (0,1,2)=(center, top, bottom).
     */
    alignment?: PlacementAlignment;
};
