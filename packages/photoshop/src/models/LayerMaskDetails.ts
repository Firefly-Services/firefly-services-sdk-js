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
import type { Offset } from "./Offset";
/**
 * An object describing the input mask added or replaced to the layer
 */
export type LayerMaskDetails = {
    /**
     * Indicates if this is a clipped layer
     */
    clip?: boolean;
    /**
     * Indicates a mask is enabled on that layer or not
     */
    enabled?: boolean;
    /**
     * Indicates a mask is linked to the layer or not
     */
    linked?: boolean;
    offset?: Offset;
};
