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

// cc-apis-core Imports
import type { ApiOptions, ApiResponse } from "@adobe/firefly-services-sdk-core";
import { ServiceConfig, BaseServiceClient } from "@adobe/firefly-services-sdk-core/internal";

// Lightroom Model Imports
import type { ApplyPresetRequest } from "./models/ApplyPresetRequest";
import type { ApplyPresetFromXmpContentRequest } from "./models/ApplyPresetFromXmpContentRequest";
import type { AutoStraightenImageRequest } from "./models/AutoStraightenImageRequest";
import type { ApplyAutoToneRequest } from "./models/ApplyAutoToneRequest";
import type { ApplyEditsRequest } from "./models/ApplyEditsRequest";
import type { JobStatusLinkResponse } from "./models/JobStatusLinkResponse";
import type { LrJobApiResponse } from "./models/LrJobApiResponse";

export class LightroomAsyncClient extends BaseServiceClient {
    constructor(config: ServiceConfig) {
        super(config);
    }

    /**
     * Get the status for an asynchronous Lightroom job
     * @param {string} jobId The job to get status for
     * @param {ApiOptions} options Additional options to send any additional data or cancel the request
     * @returns {Promise<ApiResponse<LrJobApiResponse>>} LrJobApiResponse Job status
     * @throws {ApiError}
     */
    public lrJobStatus = (jobId: string, options?: ApiOptions): Promise<ApiResponse<LrJobApiResponse>> => {
        return this._httpRequest.request({
            method: "GET",
            url: "/lrService/status/{jobId}",
            path: {
                jobId
            },
            signal: options?.signal
        });
    };
    /**
     * Auto Straighten API
     * Auto Straighten an image. Applies the Auto Upright transformation on an image.
     * @param {AutoStraightenImageRequest} requestBody Request body for auto straighten api
     * @param {ApiOptions} options Additional options to send any additional data or cancel the request
     * @returns {Promise<ApiResponse<JobStatusLinkResponse>> } JobStatusLinkResponse response
     * @throws {ApiError}
     */
    public autoStraightenImageAsync(
        requestBody: AutoStraightenImageRequest,
        options?: ApiOptions
    ): Promise<ApiResponse<JobStatusLinkResponse>> {
        return this._httpRequest.request({
            method: "POST",
            url: "/lrService/autoStraighten",
            body: requestBody,
            mediaType: "application/json",
            errors: {
                400: `InputValidationError`,
                402: `Trial Limit Exceeded Error`,
                403: `Unauthorized`,
                404: `Requested resource was not found`,
                409: `Unable to upload asset`,
                410: `Asset Link Invalid`
            },
            signal: options?.signal
        });
    }

    /**
     * Auto Tone API
     * Automatically correct exposure, contrast, sharpness, saturation on an image.
     * @param {ApplyAutoToneRequest} requestBody Request body for applyAutoTone api
     * @param {ApiOptions} options Additional options to send any additional data or cancel the request
     * @returns {Promise<ApiResponse<JobStatusLinkResponse>>} JobStatusLinkResponse response
     * @throws {ApiError}
     */
    public applyAutoToneAsync(
        requestBody: ApplyAutoToneRequest,
        options?: ApiOptions
    ): Promise<ApiResponse<JobStatusLinkResponse>> {
        return this._httpRequest.request({
            method: "POST",
            url: "/lrService/autoTone",
            body: requestBody,
            mediaType: "application/json",
            errors: {
                400: `InputValidationError`,
                402: `Trial Limit Exceeded Error`,
                403: `Unauthorized`,
                404: `Requested resource was not found`,
                409: `Unable to upload asset`,
                410: `Asset Link Invalid`
            },
            signal: options?.signal
        });
    }

    /**
     * Apply Lightroom Edits API
     * Apply one or more Lightroom edits ( exposure, contrast, sharpness, saturation ) to an image.
     * @param {ApplyEditsRequest} requestBody Request body for edit api
     * @param {ApiOptions} options Additional options to send any additional data or cancel the request
     * @returns {Promise<ApiResponse<JobStatusLinkResponse>>} JobStatusLinkResponse response
     * @throws {ApiError}
     */
    public applyEditsAsync(
        requestBody: ApplyEditsRequest,
        options?: ApiOptions
    ): Promise<ApiResponse<JobStatusLinkResponse>> {
        return this._httpRequest.request({
            method: "POST",
            url: "/lrService/edit",
            body: requestBody,
            mediaType: "application/json",
            errors: {
                400: `InputValidationError`,
                402: `Trial Limit Exceeded Error`,
                403: `Unauthorized`,
                404: `Requested resource was not found`,
                409: `Unable to upload asset`,
                410: `Asset Link Invalid`
            },
            signal: options?.signal
        });
    }

    /**
     * Apply Lightroom Presets API
     * Apply one or more XMP Lightroom presets to the given image, by using the given preset XMP file(s).
     * @param {ApplyPresetRequest} requestBody Request body for presets api
     * @param {ApiOptions} options Additional options to send any additional data or cancel the request
     * @returns {Promise<ApiResponse<JobStatusLinkResponse>>} JobStatusLinkResponse response
     * @throws {ApiError}
     */
    public applyPresetAsync(
        requestBody: ApplyPresetRequest,
        options?: ApiOptions
    ): Promise<ApiResponse<JobStatusLinkResponse>> {
        return this._httpRequest.request({
            method: "POST",
            url: "/lrService/presets",
            body: requestBody,
            mediaType: "application/json",
            errors: {
                400: `InputValidationError`,
                402: `Trial Limit Exceeded Error`,
                403: `Unauthorized`,
                404: `Requested resource was not found`,
                409: `Unable to upload asset`,
                410: `Asset Link Invalid`
            },
            signal: options?.signal
        });
    }

    /**
     * Add XMP to Image API
     * Apply XMP based Lightroom preset to an image. XMP content is passed inline to the api.
     * @param {ApplyPresetFromXmpContentRequest} requestBody Request body for xmp api
     * @param {ApiOptions} options Additional options to send any additional data or cancel the request
     * @returns {Promise<ApiResponse<JobStatusLinkResponse>>} JobStatusLinkResponse response
     * @throws {ApiError}
     */
    public applyPresetFromXmpContentAsync(
        requestBody: ApplyPresetFromXmpContentRequest,
        options?: ApiOptions
    ): Promise<ApiResponse<JobStatusLinkResponse>> {
        return this._httpRequest.request({
            method: "POST",
            url: "/lrService/xmp",
            body: requestBody,
            mediaType: "application/json",
            errors: {
                400: `InputValidationError`,
                402: `Trial Limit Exceeded Error`,
                403: `Unauthorized`,
                404: `Requested resource was not found`,
                409: `Unable to upload asset`,
                410: `Asset Link Invalid`
            },
            signal: options?.signal
        });
    }
}
