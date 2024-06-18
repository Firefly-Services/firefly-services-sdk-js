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
import type { EditOptions } from "./EditOptions";
import type { LrOutputDetails } from "./LrOutputDetails";
import type { StorageDetails } from "./StorageDetails";
export type ApplyEditsRequest = {
    /**
     * A hash describing an input image to edit. The input object will be one of 'external', 'adobe', 'azure' or 'dropbox'
     */
    inputs: {
        source: StorageDetails;
    };
    options: EditOptions;
    /**
     * Edit photo output paramaters
     */
    outputs: LrOutputDetails[];
};
