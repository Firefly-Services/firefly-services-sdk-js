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

import type { Bounds } from "./Bounds";
import type { TextDetails } from "./TextDetails";
export type TextOptionsLayer = {
    /**
     * The name of the layer you want to insert. Use either id OR name
     */
    name?: string;
    /**
     * The id of the layer you want to insert. Use either id OR name.
     */
    id?: number;
    bounds?: Bounds;
    /**
     * Is the layer editable
     */
    locked?: boolean;
    /**
     * Is the layer visible
     */
    visible?: boolean;
    text?: TextDetails;
};
