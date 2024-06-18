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
 * action to take if there are one or more missing fonts in the document
 *
 * * fail - The job will not succeed and the status will be set to "failed", with the details of the error provided in the "details" section in the status
 * * useDefault - The job will succeed, however, by default all the missing fonts will be replaced with this font: ArialMT
 */
export enum ManageMissingFonts {
    USE_DEFAULT = "useDefault",
    FAIL = "fail"
}
