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
import type { PlacementStart } from "./PlacementStart";
import type { PublicBinaryInputV3 } from "./PublicBinaryInputV3";
export type ImageConditionV3 = {
    /**
     * Details about the timeline placement of the image.
     */
    placement: PlacementStart;
    /**
     * The source details of the image.
     */
    source: PublicBinaryInputV3;
};
