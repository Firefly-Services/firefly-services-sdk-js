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

import type { DocumentOperationOptions } from "./DocumentOperationOptions";
import type { PsOutputDetails } from "./PsOutputDetails";
import type { StorageDetails } from "./StorageDetails";
export type ModifyDocumentRequest = {
    /**
     * An array of input objects. Each input object represents a file to be processed.
     */
    inputs: StorageDetails[];
    /**
     * An array of output objects. Each output object represents a file to be created.
     */
    outputs: PsOutputDetails[];
    options: DocumentOperationOptions;
};