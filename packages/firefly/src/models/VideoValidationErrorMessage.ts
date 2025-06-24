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
export type VideoValidationErrorMessage = {
    /**
     * Additional context for the validation error.
     */
    ctx?: Record<string /* eslint-disable  @typescript-eslint/no-explicit-any -- Required any*/, any>;
    /**
     * Location of the validation error in the request.
     */
    loc: number | string[];
    /**
     * Validation error message.
     */
    msg: string;
    /**
     * Type of validation error.
     */
    type: string;
};
