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
 * An enumeration.
 */
export enum ErrorCode {
    MODEL_NOT_LOADED = "model_not_loaded",
    NOT_IMPLEMENTED = "not_implemented",
    VALIDATION_ERROR = "validation_error",
    RUNTIME_ERROR = "runtime_error",
    TIMEOUT_ERROR = "timeout_error",
    PROMPT_UNSAFE = "prompt_unsafe",
    INPUT_MEDIA_UNSAFE = "input_media_unsafe",
    OUTPUT_MEDIA_UNSAFE = "output_media_unsafe",
    BAD_REQUEST = "bad_request",
    LANGUAGE_NOT_SUPPORTED = "language_not_supported",
    ACCESS_ERROR = "access_error",
    INVALID_CONTENT_TYPE = "invalid_content_type"
}
