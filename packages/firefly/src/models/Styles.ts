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
import type { StylesImageReference } from "./StylesImageReference";
export type Styles = {
    /**
     * You can specify a preset ID for a style. Refer to Image Model Styles under Concepts for the list of supported <code>Preset IDs</code>.
     */
    presets?: string[];
    /**
     * The strength of the style to be applied.
     */
    strength?: number;
    /**
     * Firefly will detect the style in the image and apply the same style in the generated image.
     * <strong>Note</strong>: Only allow listed domains are allowed to be accepted as input URL in the request. The allow-listed domains are as follows:
     * <ul><li><code>amazonaws.com</code></li><li><code>windows.net</code></li><li><code>dropboxusercontent.com</code></li></ul>
     */
    imageReference?: StylesImageReference;
};
