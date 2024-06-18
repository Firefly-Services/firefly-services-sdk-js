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
import type { StorageDetails } from "./StorageDetails";
export type ActionJsonOptions = {
    /**
     * array of Photoshop JSON-formatted Actions to play
     */
    actionJSON: Record<string /* eslint-disable  @typescript-eslint/no-explicit-any -- Required any*/, any>[];
    /**
     * array of custom pattern preset to be used in Photoshop Actions
     */
    patterns?: StorageDetails[];
    /**
     * array of custom fonts needed in this document
     */
    fonts?: StorageDetails[];
    /**
     * array of custom brushes needed in this document
     */
    brushes?: StorageDetails[];
    /**
     * array of references to additional images, which can be referred by actionJson commands
     */
    additionalImages?: StorageDetails[];
};
