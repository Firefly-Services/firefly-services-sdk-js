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
 * The text's kerning setting. Optical: set based on the shape of the font. Metrics: uses kern pairs included in fonts
 */
export enum AutoKernType {
    OPTICAL_KERN = "opticalKern",
    METRICS_KERN = "metricsKern"
}
