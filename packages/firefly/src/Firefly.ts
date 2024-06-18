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
import type {
    ClientConfig,
    ClientCredentials,
    ApiOptions,
    ApiResponse
} from "@adobe/firefly-services-sdk-core";
import { ServiceConfig, BaseServiceClient } from "@adobe/firefly-services-sdk-core/internal";
// Firefly Model Imports
import type { ExpandImageRequest } from "./models/ExpandImageRequest";
import type { ExpandImageResponse } from "./models/ExpandImageResponse";
import type { FillImageRequest } from "./models/FillImageRequest";
import type { FillImageResponse } from "./models/FillImageResponse";
import type { GenerateImagesRequest } from "./models/GenerateImagesRequest";
import type { GenerateImagesResponse } from "./models/GenerateImagesResponse";
import type { GenerateObjectCompositeRequest } from "./models/GenerateObjectCompositeRequest";
import type { GenerateObjectCompositeResponse } from "./models/GenerateObjectCompositeResponse";
import type { GenerateSimilarImagesRequest } from "./models/GenerateSimilarImagesRequest";
import type { GenerateSimilarImagesResponse } from "./models/GenerateSimilarImagesResponse";
import type { UploadResponse } from "./models/UploadResponse";
// Package.json import for package details
import { version } from "./../package.json";
// Server to Server Token Provider imports for creating TokenProvider
import { ServerToServerTokenProvider } from "@adobe/firefly-services-common-apis";
import type { ServerToServerAuthDetails } from "@adobe/firefly-services-common-apis";
/**
 * FireflyClient
 * Firefly API client to use the Firefly API services
 */
export class FireflyClient extends BaseServiceClient {
    /**
     * Constructor for FireflyClient
     * @param config configuration for creating client. Using ClientCredentials enables automatic token refresh, which cannot be disabled. Instead To manage authentication manually, use ClientConfig.
     */
    constructor(config: ClientConfig | ClientCredentials) {
        const urlMap = new Map([["production", "https://firefly-api.adobe.io"]]);
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
                "User-Agent": `FFS-SDK, JS, Firefly-${version}`
            }
        };
        super(internalConfig);
    }
    /**
     * Generate Images API
     * Generate images based on a prompt with optional reference image to match style and structure.
     * @param requestBody image generation request body.
     * @param options Additional options to send any additional data or cancel the request
     * @returns GenerateImagesResponse Generate images response
     * @throws {ApiError}
     */
    public generateImages(
        requestBody: GenerateImagesRequest,
        options?: ApiOptions
    ): Promise<ApiResponse<GenerateImagesResponse>> {
        return this._httpRequest.request({
            method: "POST",
            url: "/v3/images/generate",
            body: requestBody,
            mediaType: "application/json",
            errors: {
                400: `Bad Request`,
                403: `Forbidden`,
                408: `Request Timeout`,
                415: `Unsupported Media Type`,
                422: `Unprocessable Entity`,
                500: `Internal Server Error`,
                501: `Not Implemented`,
                503: `Service Unavailable`
            },
            signal: options?.signal
        });
    }
    /**
     * Upload API
     * @param requestBody Upload source image or mask image of types PNG/JPEG/WEBP for Image-to-Image operations, such as  fill, expand. This api returns an identifier that is used to refer to uploaded content.
     * @param options Additional options to send any additional data or cancel the request
     * @returns UploadResponse Successful Response
     * @throws {ApiError}
     */
    public upload(requestBody: Blob, options?: ApiOptions): Promise<ApiResponse<UploadResponse>> {
        const supportedMimeTypes: string[] = ["image/jpeg", "image/png", "image/webp"];
        if (requestBody instanceof Blob && !supportedMimeTypes.includes(requestBody.type)) {
            return Promise.reject(
                new Error(
                    `Unsuported MIME type("${requestBody.type}") in blob for image upload MIME type supported are "image/jpeg", "image/png", "image/webp".`
                )
            );
        }
        return this._httpRequest.request({
            method: "POST",
            url: "/v2/storage/image",
            body: requestBody,
            mediaType: requestBody.type,
            errors: {
                400: `Bad Request`,
                403: `Forbidden`,
                404: `Not Found`,
                408: `Request Timeout`,
                409: `Conflict`,
                410: `Gone`,
                415: `Unsupported Media Type`,
                422: `Unprocessable Entity`,
                451: `Unavailable For Legal Reasons`,
                499: `Additional Response`,
                500: `Internal Server Error`,
                501: `Not Implemented`,
                503: `Service Unavailable`
            },
            signal: options?.signal
        });
    }
    /**
     * Generate Similar Images API
     * Generate similar Images based on the reference image.
     * @param requestBody Generate similar images request body
     * @param options Additional options to send any additional data or cancel the request
     * @returns GenerateSimilarImagesResponse Generate similar images response
     * @throws {ApiError}
     */
    public generateSimilarImages(
        requestBody: GenerateSimilarImagesRequest,
        options?: ApiOptions
    ): Promise<ApiResponse<GenerateSimilarImagesResponse>> {
        return this._httpRequest.request({
            method: "POST",
            url: "/v3/images/generate-similar",
            body: requestBody,
            mediaType: "application/json",
            errors: {
                400: `Bad Request`,
                403: `Forbidden`,
                408: `Request Timeout`,
                415: `Unsupported Media Type`,
                422: `Unprocessable Entity`,
                500: `Internal Server Error`,
                501: `Not Implemented`,
                503: `Service Unavailable`
            },
            signal: options?.signal
        });
    }
    /**
     * Expand Image API
     * Change the aspect ratio or size of an image and expand its contents with or without a text prompt.
     * @param requestBody image expansion request body.
     * @param options Additional options to send any additional data or cancel the request
     * @returns ExpandImageResponse Expand Image Response
     * @throws {ApiError}
     */
    public expandImage(
        requestBody: ExpandImageRequest,
        options?: ApiOptions
    ): Promise<ApiResponse<ExpandImageResponse>> {
        return this._httpRequest.request({
            method: "POST",
            url: "/v3/images/expand",
            body: requestBody,
            mediaType: "application/json",
            errors: {
                400: `Bad Request`,
                403: `Forbidden`,
                408: `Request Timeout`,
                415: `Unsupported Media Type`,
                422: `Unprocessable Entity`,
                500: `Internal Server Error`,
                501: `Not Implemented`,
                503: `Service Unavailable`
            },
            signal: options?.signal
        });
    }
    /**
     * Fill Image API
     * Fill the masked area of an image with an optional prompt.
     * @param requestBody image fill request body.
     * @param options Additional options to send any additional data or cancel the request
     * @returns FillImageResponse Fill Image Response
     * @throws {ApiError}
     */
    public fillImage(
        requestBody: FillImageRequest,
        options?: ApiOptions
    ): Promise<ApiResponse<FillImageResponse>> {
        return this._httpRequest.request({
            method: "POST",
            url: "/v3/images/fill",
            body: requestBody,
            mediaType: "application/json",
            errors: {
                400: `Bad Request`,
                403: `Forbidden`,
                408: `Request Timeout`,
                415: `Unsupported Media Type`,
                422: `Unprocessable Entity`,
                500: `Internal Server Error`,
                501: `Not Implemented`,
                503: `Service Unavailable`
            },
            signal: options?.signal
        });
    }
    /**
     * Generate Object Composite API
     * Upload an image(with or without mask), such as a product photo, and utilize a text prompt to generate a seamlessly composited scene featuring the product.
     * @param requestBody Object composite generation request body.
     * @param options Additional options to send any additional data or cancel the request
     * @returns GenerateObjectCompositeResponse Generate Object Composite Response
     * @throws {ApiError}
     */
    public generateObjectComposite(
        requestBody: GenerateObjectCompositeRequest,
        options?: ApiOptions
    ): Promise<ApiResponse<GenerateObjectCompositeResponse>> {
        return this._httpRequest.request({
            method: "POST",
            url: "/v3/images/generate-object-composite",
            body: requestBody,
            mediaType: "application/json",
            errors: {
                400: `Bad Request`,
                403: `Forbidden`,
                408: `Request Timeout`,
                415: `Unsupported Media Type`,
                422: `Unprocessable Entity`,
                500: `Internal Server Error`,
                501: `Not Implemented`,
                503: `Service Unavailable`
            },
            signal: options?.signal
        });
    }
}
