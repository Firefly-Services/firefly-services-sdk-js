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
import type { PublicBinaryOutput } from "./PublicBinaryOutput";
export type OutputImage = {
    /**
     * Identifier used to customize image generation processes.
     */
    seed: number;
    /**
     * A valid storage item containing a pre-signed URL. The pre-signed URL will expire in one hour.
     */
    image: PublicBinaryOutput;
};
