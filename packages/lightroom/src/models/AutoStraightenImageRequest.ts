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
import type { AutoStraightOptions } from "./AutoStraightOptions";
import type { LrOutputDetails } from "./LrOutputDetails";
import type { StorageDetails } from "./StorageDetails";
export type AutoStraightenImageRequest = {
    inputs: StorageDetails;
    options?: AutoStraightOptions;
    /**
     * Only a single output is supported currently
     */
    outputs: LrOutputDetails[];
};
