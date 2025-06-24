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
import type { VideoValidationErrorMessage } from "./VideoValidationErrorMessage";
/**
 * The error details within the error response for video operations.
 */
export type VideoApiError = {
    /**
     * Indicates the type of error that occurred.
     */
    error_code: string;
    /**
     * A human-readable error message.
     */
    message?: string;
    /**
     * Stack trace of the error for debugging purposes.
     */
    stack_trace?: string[];
    /**
     * Detailed validation error messages.
     */
    validation_errors?: VideoValidationErrorMessage[];
};
