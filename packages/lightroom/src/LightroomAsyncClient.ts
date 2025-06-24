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
// cc-apis-core Imports
import type { ClientConfig, ApiOptions, ApiResponse } from "@adobe/firefly-services-sdk-core";
import { ServiceConfig, BaseServiceClient } from "@adobe/firefly-services-sdk-core/internal";
// LightroomAsync Model Imports
import type { ApplyAutoToneRequest } from "./models/ApplyAutoToneRequest";
import type { ApplyEditsRequest } from "./models/ApplyEditsRequest";
import type { ApplyPresetFromXmpContentRequest } from "./models/ApplyPresetFromXmpContentRequest";
import type { ApplyPresetRequest } from "./models/ApplyPresetRequest";
import type { AutoStraightenImageRequest } from "./models/AutoStraightenImageRequest";
import type { JobStatusLinkResponse } from "./models/JobStatusLinkResponse";
import type { LrJobApiResponse } from "./models/LrJobApiResponse";
// Package.json import for package details
import { version } from "./../package.json";
/**
 * LightroomAsyncClient
 * LightroomAsync API client to use the LightroomAsync API services
 */
export class LightroomAsyncClient extends BaseServiceClient {
    constructor(config: ClientConfig) {
        const urlMap = new Map([["production", "https://image.adobe.io"]]);

        const environment = config.serviceEnvironment
            ? config.serviceEnvironment
            : BaseServiceClient.getEnvFromVersion(version);
        const internalConfig: ServiceConfig = {
            ...config,
            baseUrl: BaseServiceClient.getBaseUrl(urlMap, environment)
        };
        super(internalConfig);
    }
    /**
     * Get Status API
     * Get job status of a Lightroom job
     * @param jobId The job to get status for
     * @param options Additional options to send any additional data or cancel the request
     * @returns LrJobApiResponse Job status
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
     * Auto Straighten an image. Applies the Auto Upright transformation on an image
     * @param requestBody Request body for auto straighten api
     * @param options Additional options to send any additional data or cancel the request
     * @returns JobStatusLinkResponse response
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
     * Automatically correct exposure, contrast, sharpness, saturation on an image
     * @param requestBody Request body for applyAutoTone api
     * @param options Additional options to send any additional data or cancel the request
     * @returns JobStatusLinkResponse response
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
     * @param requestBody Request body for edit api
     * @param options Additional options to send any additional data or cancel the request
     * @returns JobStatusLinkResponse response
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
     * @param requestBody Request body for presets api
     * @param options Additional options to send any additional data or cancel the request
     * @returns JobStatusLinkResponse response
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
     * @param requestBody Request body for xmp api
     * @param options Additional options to send any additional data or cancel the request
     * @returns JobStatusLinkResponse response
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
