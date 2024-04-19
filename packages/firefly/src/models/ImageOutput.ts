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
/**
 * Array of objects with details on output images
 */
export type ImageOutput = {
    /**
     * A valid Storage Item containing both an internal ID and a pre-signed URL
     */
    image?: {
        /**
         * Signed URL of the generated image
         */
        presignedUrl?: string;
        /**
         * Unique ID associated with the generated image
         */
        id?: string;
    };
    /**
     * seed used to generate the image
     */
    seed?: number;
};
