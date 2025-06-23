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
import type { ExpandInputImage } from "./ExpandInputImage";
import type { Placement } from "./Placement";
import type { Size } from "./Size";
/**
 * Images expand payload
 */
export type ExpandImageRequest = {
    /**
     * The number of variations to generate. numVariations will default to the number of seeds, or to 1 if seeds is not specified.
     */
    numVariations?: number;
    /**
     * Array of seed(s) that ensure consistent image generation across multiple API calls. For example, you can use the same seed to generate a similar image with different styles. If specified alongside with numVariations, the number of seeds must be the equal to numVariations
     */
    seeds?: number[];
    /**
     * Specifies the desired width and height for the final, expanded image.
     */
    size?: Size;
    /**
     * The prompt used to generate the image. The longer the prompt - the better
     */
    prompt?: string;
    /**
     * The image to be expanded. You can either use a <code>url</code> or an <code>uploadId</code> as the source for the uploaded image.
     * <strong>Note</strong>: Only allow listed domains are allowed to be accepted as input URL in the request. The allow-listed domains are as follows:
     * <ul><li><code>amazonaws.com</code></li><li><code>windows.net</code></li><li><code>dropboxusercontent.com</code></li></ul>
     */
    image: ExpandInputImage;
    /**
     * Specifies how the source image will be positioned and sized in the final generation. The value should describe the placement and dimensions of the image within the output. <p><strong>Note:</strong> Placement for source images cannot be used when a mask image is being applied.</p>
     */
    placement?: Placement;
};
