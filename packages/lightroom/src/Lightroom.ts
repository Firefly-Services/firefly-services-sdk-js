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
import type {
    ClientConfig,
    ClientCredentials,
    ApiOptions,
    ApiResponse
} from "@adobe/firefly-services-sdk-core";
import { ServiceConfig, BaseServiceClient } from "@adobe/firefly-services-sdk-core/internal";
// Lightroom Model Imports
import type { ApplyAutoToneRequest } from "./models/ApplyAutoToneRequest";
import type { ApplyEditsRequest } from "./models/ApplyEditsRequest";
import type { ApplyPresetFromXmpContentRequest } from "./models/ApplyPresetFromXmpContentRequest";
import type { ApplyPresetRequest } from "./models/ApplyPresetRequest";
import type { AutoStraightenImageRequest } from "./models/AutoStraightenImageRequest";
import type { LrJobApiResponse } from "./models/LrJobApiResponse";
// Lightroom Async Handler Imports
import { LrAsyncJob } from "../resources/LrAsyncJob";
import { LightroomAsyncClient } from "./LightroomAsyncClient";
// Package.json import for package details
import { version } from "./../package.json";
// Server to Server Token Provider imports for creating TokenProvider
import { ServerToServerTokenProvider } from "@adobe/firefly-services-common-apis";
import type { ServerToServerAuthDetails } from "@adobe/firefly-services-common-apis";
/**
 * LightroomClient
 * Lightroom API client to use the Lightroom API services
 */
export class LightroomClient extends BaseServiceClient {
    private _lightroomAsyncClient: LightroomAsyncClient;
    /**
     * Constructor for LightroomClient
     * @param config configuration for creating client. Using ClientCredentials enables automatic token refresh, which cannot be disabled. Instead To manage authentication manually, use ClientConfig.
     */
    constructor(config: ClientConfig | ClientCredentials) {
        const urlMap = new Map([["production", "https://image.adobe.io"]]);
        const environment = config.serviceEnvironment
            ? config.serviceEnvironment
            : BaseServiceClient.getEnvFromVersion(version);
        const internalClientConfig: ClientConfig = {
            clientId: "",
            serviceEnvironment: environment,
            tokenProvider: undefined
        };
        if ((config as ClientConfig).tokenProvider) {
            const clientConfig = config as ClientConfig;
            internalClientConfig.tokenProvider = clientConfig.tokenProvider;
            internalClientConfig.clientId = clientConfig.clientId;
            internalClientConfig.serviceEnvironment = clientConfig.serviceEnvironment;
        } else if ((config as ClientCredentials).clientSecret) {
            const clientCredentials = config as ClientCredentials;
            internalClientConfig.clientId = clientCredentials.clientId;
            internalClientConfig.serviceEnvironment = clientCredentials.serviceEnvironment;
            const options = {
                scopes: clientCredentials.scopes,
                serviceEnvironment: internalClientConfig.serviceEnvironment
            };
            const autOptions: ServerToServerAuthDetails = {
                clientId: internalClientConfig.clientId,
                clientSecret: clientCredentials.clientSecret,
                scopes: options?.scopes ? options.scopes : "firefly_api,ff_apis"
            };
            const tokenProvider = new ServerToServerTokenProvider(autOptions, { autoRefresh: true });
            internalClientConfig.tokenProvider = tokenProvider;
        } else {
            throw new Error(
                "Invalid configuration provided. Provide config with tokenProvider or clientSecret."
            );
        }
        const internalConfig: ServiceConfig = {
            ...internalClientConfig,
            baseUrl: BaseServiceClient.getBaseUrl(urlMap, environment),
            headers: {
                "User-Agent": `FFS-SDK, JS, Lightroom-${version}`
            }
        };
        super(internalConfig);
        this._lightroomAsyncClient = new LightroomAsyncClient(internalConfig);
    }
    /**
     * Auto Straighten API
     * Auto Straighten an image. Applies the Auto Upright transformation on an image
     * @param requestBody Request body for auto straighten api
     * @param options Additional options to send any additional data or cancel the request
     * @returns LrJobApiResponse Job status
     * @throws {ApiError}
     */
    public async autoStraightenImage(
        requestBody: AutoStraightenImageRequest,
        options?: ApiOptions
    ): Promise<ApiResponse<LrJobApiResponse>> {
        return new LrAsyncJob(
            this._lightroomAsyncClient.autoStraightenImageAsync(requestBody, options),
            this._lightroomAsyncClient.lrJobStatus
        );
    }
    /**
     * Auto Tone API
     * Automatically correct exposure, contrast, sharpness, saturation on an image
     * @param requestBody Request body for applyAutoTone api
     * @param options Additional options to send any additional data or cancel the request
     * @returns LrJobApiResponse Job status
     * @throws {ApiError}
     */
    public async applyAutoTone(
        requestBody: ApplyAutoToneRequest,
        options?: ApiOptions
    ): Promise<ApiResponse<LrJobApiResponse>> {
        return new LrAsyncJob(
            this._lightroomAsyncClient.applyAutoToneAsync(requestBody, options),
            this._lightroomAsyncClient.lrJobStatus
        );
    }
    /**
     * Apply Lightroom Edits API
     * Apply one or more Lightroom edits ( exposure, contrast, sharpness, saturation ) to an image.
     * @param requestBody Request body for edit api
     * @param options Additional options to send any additional data or cancel the request
     * @returns LrJobApiResponse Job status
     * @throws {ApiError}
     */
    public async applyEdits(
        requestBody: ApplyEditsRequest,
        options?: ApiOptions
    ): Promise<ApiResponse<LrJobApiResponse>> {
        return new LrAsyncJob(
            this._lightroomAsyncClient.applyEditsAsync(requestBody, options),
            this._lightroomAsyncClient.lrJobStatus
        );
    }
    /**
     * Apply Lightroom Presets API
     * Apply one or more XMP Lightroom presets to the given image, by using the given preset XMP file(s).
     * @param requestBody Request body for presets api
     * @param options Additional options to send any additional data or cancel the request
     * @returns LrJobApiResponse Job status
     * @throws {ApiError}
     */
    public async applyPreset(
        requestBody: ApplyPresetRequest,
        options?: ApiOptions
    ): Promise<ApiResponse<LrJobApiResponse>> {
        return new LrAsyncJob(
            this._lightroomAsyncClient.applyPresetAsync(requestBody, options),
            this._lightroomAsyncClient.lrJobStatus
        );
    }
    /**
     * Add XMP to Image API
     * Apply XMP based Lightroom preset to an image. XMP content is passed inline to the api.
     * @param requestBody Request body for xmp api
     * @param options Additional options to send any additional data or cancel the request
     * @returns LrJobApiResponse Job status
     * @throws {ApiError}
     */
    public async applyPresetFromXmpContent(
        requestBody: ApplyPresetFromXmpContentRequest,
        options?: ApiOptions
    ): Promise<ApiResponse<LrJobApiResponse>> {
        return new LrAsyncJob(
            this._lightroomAsyncClient.applyPresetFromXmpContentAsync(requestBody, options),
            this._lightroomAsyncClient.lrJobStatus
        );
    }
}
