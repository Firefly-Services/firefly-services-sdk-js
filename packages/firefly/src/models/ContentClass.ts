/*************************************************************************
 * ADOBE CONFIDENTIAL
 * ___________________
 *
 * Copyright 2024 Adobe Inc.
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
 * The content class guides the overall image theme and styles can be applied on top of each content type. If no content type is specified, it is auto-detected.
 * | Value  |  Description
 * |:---------- |:------
 * | photo      | Photorealistic style
 * | art    | Artistic style
 *
 */
export enum ContentClass {
    PHOTO = "photo",
    ART = "art"
}
