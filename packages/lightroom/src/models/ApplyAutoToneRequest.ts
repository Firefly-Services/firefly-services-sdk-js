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

import type { LrOutputDetails } from "./LrOutputDetails";
import type { StorageDetails } from "./StorageDetails";
export type ApplyAutoToneRequest = {
    inputs: StorageDetails;
    /**
     * Only a single output is supported currently
     */
    outputs: LrOutputDetails[];
};
