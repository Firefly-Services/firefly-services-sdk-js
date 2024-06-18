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
import type { DocumentOperationLayer } from "./DocumentOperationLayer";
import type { ManageMissingFonts } from "./ManageMissingFonts";
import type { OperationDocument } from "./OperationDocument";
import type { StorageDetails } from "./StorageDetails";
export type DocumentOperationOptions = {
    manageMissingFonts?: ManageMissingFonts;
    /**
     * options.globalFont The full postscript name of the font to be used as the global default for the document. This font will be used for any text layer which has a missing font and no other font has been specifically provided for that layer.
     * If this font itself is missing, the option specified for manageMissingFonts from above will take effect.
     */
    globalFont?: string;
    /**
     * array of custom fonts needed in this document
     */
    fonts?: StorageDetails[];
    document?: OperationDocument;
    /**
     * Array of layers to be created in the document
     */
    layers?: DocumentOperationLayer[];
};
