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

import type { ArtboardDetails } from "./ArtboardDetails";
import type { PsOutputDetails } from "./PsOutputDetails";
export type CreateArtboardRequest = {
    options: ArtboardDetails;
    /**
     * An array of output objects
     */
    outputs: PsOutputDetails[];
};
