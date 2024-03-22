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

// cc-apis-core Imports
import type { ClientConfig, ApiOptions, ApiResponse } from "@adobe/firefly-services-sdk-core";

import { LrAsyncJob } from "./LrAsyncJob";

// Lightroom Model Imports
import type { ApplyPresetRequest } from "./models/ApplyPresetRequest";
import type { ApplyPresetFromXmpContentRequest } from "./models/ApplyPresetFromXmpContentRequest";
import type { AutoStraightenImageRequest } from "./models/AutoStraightenImageRequest";
import type { ApplyAutoToneRequest } from "./models/ApplyAutoToneRequest";
import type { ApplyEditsRequest } from "./models/ApplyEditsRequest";
import type { LrJobApiResponse } from "./models/LrJobApiResponse";
import { LightroomAsyncClient } from "./LightroomAsyncClient";
import { BaseServiceClient, ServiceConfig } from "@adobe/firefly-services-sdk-core/internal";

export class LightroomClient extends BaseServiceClient {
    private _lrAsyncClient: LightroomAsyncClient;
    constructor(config: ClientConfig) {
        const internalConfig: ServiceConfig = {
            ...config,
            baseUrl: "https://image.adobe.io/"
        };
        super(internalConfig);
        this._lrAsyncClient = new LightroomAsyncClient(internalConfig);
    }

    /**
     * Auto Straighten API
     * Auto Straighten an image. Applies the Auto Upright transformation on an image.
     * @param requestBody Request body for auto straighten api
     * @param options Additional options to send any additional data or cancel the request
     * @returns Lightroom Job Response
     * @throws {ApiError}
     */
    public async autoStraightenImage(
        requestBody: AutoStraightenImageRequest,
        options?: ApiOptions
    ): Promise<ApiResponse<LrJobApiResponse>> {
        return new LrAsyncJob(
            this._lrAsyncClient.autoStraightenImageAsync(requestBody, options),
            this._lrAsyncClient.lrJobStatus
        );
    }

    /**
     * Auto Tone API
     * Automatically correct exposure, contrast, sharpness, saturation on an image.
     * @param requestBody Request body for applyAutoTone api
     * @param options Additional options to send any additional data or cancel the request
     * @returns Lightroom Job Response
     * @throws {ApiError}
     */
    public async applyAutoTone(
        requestBody: ApplyAutoToneRequest,
        options?: ApiOptions
    ): Promise<ApiResponse<LrJobApiResponse>> {
        return new LrAsyncJob(
            this._lrAsyncClient.applyAutoToneAsync(requestBody, options),
            this._lrAsyncClient.lrJobStatus
        );
    }

    /**
     * Apply Lightroom Edits API
     * Apply one or more Lightroom edits ( exposure, contrast, sharpness, saturation ) to an image.
     * @param requestBody Request body for edit api
     * @param options Additional options to send any additional data or cancel the request
     * @returns Lightroom Job Response
     * @throws {ApiError}
     */
    public async applyEdits(
        requestBody: ApplyEditsRequest,
        options?: ApiOptions
    ): Promise<ApiResponse<LrJobApiResponse>> {
        return new LrAsyncJob(
            this._lrAsyncClient.applyEditsAsync(requestBody, options),
            this._lrAsyncClient.lrJobStatus
        );
    }

    /**
     * Apply Lightroom Presets API
     * Apply one or more XMP Lightroom presets to the given image, by using the given preset XMP file(s).
     * @param requestBody Request body for presets api
     * @param options Additional options to send any additional data or cancel the request
     * @returns Lightroom Job Response
     * @throws {ApiError}
     */
    public async applyPreset(
        requestBody: ApplyPresetRequest,
        options?: ApiOptions
    ): Promise<ApiResponse<LrJobApiResponse>> {
        return new LrAsyncJob(
            this._lrAsyncClient.applyPresetAsync(requestBody, options),
            this._lrAsyncClient.lrJobStatus
        );
    }

    /**
     * Add XMP to Image API
     * Apply XMP based Lightroom preset to an image. XMP content is passed inline to the api.
     * @param requestBody Request body for xmp api
     * @param options Additional options to send any additional data or cancel the request
     * @returns Lightroom Job Response
     * @throws {ApiError}
     */
    public async applyPresetFromXmpContent(
        requestBody: ApplyPresetFromXmpContentRequest,
        options?: ApiOptions
    ): Promise<ApiResponse<LrJobApiResponse>> {
        return new LrAsyncJob(
            this._lrAsyncClient.applyPresetFromXmpContentAsync(requestBody, options),
            this._lrAsyncClient.lrJobStatus
        );
    }
}
