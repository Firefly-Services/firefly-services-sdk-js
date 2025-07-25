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
/**
 * exposure settings
 */
export type ExposureDetails = {
    /**
     * the layer's exposure
     */
    exposure?: number;
    /**
     * the layer's offset
     */
    offset?: number;
    /**
     * the layer's gamma correction
     */
    gammaCorrection?: number;
};
