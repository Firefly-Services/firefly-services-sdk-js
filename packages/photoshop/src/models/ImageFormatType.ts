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
 * desired image format
 *
 * * image/vnd.adobe.photoshop - Create a new PSD file
 * * image/jpeg, image/png, image/tiff - Create a new jpeg, png or tiff rendition
 *
 * Image mode conversions:
 *
 * Certain image modes (rgb, cmyk, greyscale, etc) must be converted to another image mode before a rendition can be created:
 *
 * * Tiff Requested: Multichannel and Duotone will convert to RGB
 * * PNG Requested: CMYK, HSL, HSB, Multichannel, Duotone, Lab and XYZ will convert to RGB
 */
export enum ImageFormatType {
    IMAGE_VND_ADOBE_PHOTOSHOP = "image/vnd.adobe.photoshop",
    IMAGE_JPEG = "image/jpeg",
    IMAGE_PNG = "image/png",
    IMAGE_TIFF = "image/tiff",
    VND_ADOBE_PHOTOSHOP = "vnd.adobe.photoshop"
}
