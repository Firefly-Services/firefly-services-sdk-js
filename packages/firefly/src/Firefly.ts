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
import type { ClientConfig, ApiOptions, ApiResponse } from "@adobe/firefly-services-sdk-core";
import { ServiceConfig, BaseServiceClient } from "@adobe/firefly-services-sdk-core/internal";

// Firefly Model Imports
import type { ExpandImageRequest } from "./models/ExpandImageRequest";
import type { ExpandImageResponse } from "./models/ExpandImageResponse";
import type { FillImageRequest } from "./models/FillImageRequest";
import type { FillImageResponse } from "./models/FillImageResponse";
import type { GenerateImagesRequest } from "./models/GenerateImagesRequest";
import type { GenerateImagesResponse } from "./models/GenerateImagesResponse";
import type { UploadResponse } from "./models/UploadResponse";
import { AcceptMimeTypes } from "./models/AcceptMimeTypes";

/**
 * FireflyClient
 * Firefly API client to use the Firefly API services
 */
export class FireflyClient extends BaseServiceClient {
    constructor(config: ClientConfig) {
        const internalConfig: ServiceConfig = {
            ...config,
            baseUrl: "https://firefly-api.adobe.io/"
        };
        super(internalConfig);
    }

    /**
     * Text to Image API
     * Generate images based on a prompt with optional reference image to match style
     * @param requestBody image generation request body
     * @param options Additional options to send any aadditional data or cancel the request
     * @returns GenerateImagesResponse Text-to-Image response
     * @throws {ApiError}
     */
    public generateImages(
        requestBody: GenerateImagesRequest,
        options?: ApiOptions
    ): Promise<ApiResponse<GenerateImagesResponse>> {
        return this._httpRequest.request({
            method: "POST",
            url: "/v2/images/generate",
            body: requestBody,
            mediaType: "application/json",
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                408: `Timeout`,
                413: `Payload Too Large`,
                415: `Unsupported Media Type`,
                422: `Unprocessable Entity`,
                429: `Too Many Requests`,
                451: `Unavailable for Legal Reasons`
            },
            signal: options?.signal
        });
    }
    /**
     * Upload API
     * Upload any content, such as images, videos, or documents. This api provides an opaque ID for referencing the uploaded content in other firefly apis.
     * @param requestBody Blob created using the image data of types PNG/JPEG/WEBP image, ensure that type is set while creating the blob.
     * @param options Additional options to send any additional data or cancel the request
     * @returns Upload response
     * @throws {ApiError}
     */
    public upload(requestBody: Blob, options?: ApiOptions): Promise<ApiResponse<UploadResponse>> {
        if (!["image/jpeg", "image/png", "image/webp"].includes(requestBody.type)) {
            return Promise.reject(
                new Error(
                    `Unsuported MIME type("${requestBody.type}") in blob for image upload MIME type supported are "image/jpeg", "image/png", "image/webp"`
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
                401: `Unauthorized`,
                403: `Forbidden`,
                429: `Too Many Requests`,
                451: `Unavailable for Legal Reasons`,
                500: `Internal Server Error`
            },
            signal: options?.signal
        });
    }
    /**
     * Expand Image API
     * Expand an image to a new size/aspect ratio
     * Note: This suppports only images with 3 Channels (RGB), not recommended to use PNGs.
     * @param requestBody image expansion request body
     * @param headers Headers to be sent with the request
     * @param options options to send any addiional data or cancel the request etc.
     * @returns ExpandImageResponse Expand Image Response
     * @throws {ApiError}
     */
    public expandImage(
        requestBody: ExpandImageRequest,
        additionalParams: {
            /**
             *  output image format
             * */
            xAcceptMimetype: AcceptMimeTypes;
        } = { xAcceptMimetype: AcceptMimeTypes.IMAGE_JPEG },
        options?: ApiOptions
    ): Promise<ApiResponse<ExpandImageResponse>> {
        return this._httpRequest.request({
            method: "POST",
            url: "/v1/images/expand",
            headers: {
                "x-accept-mimetype": additionalParams.xAcceptMimetype
            },
            body: requestBody,
            mediaType: "application/json",
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                408: `Timeout`,
                415: `Unsupported Media Type`,
                422: `Unprocessable Entity`,
                429: `Too Many Requests`,
                451: `Unavailable for Legal Reasons`
            },
            signal: options?.signal
        });
    }
    /**
     * Fill Image API
     * Fill the masked area of an image with an optional prompt.
     * @param {FillImageRequest} requestBody
     * @param {ApiOptions} options Additional options to send any aadditional data or cancel the request
     * @returns FillImageResponse Fill Image Response
     * @throws {ApiError}
     */
    public fillImage(
        requestBody: FillImageRequest,
        options?: ApiOptions
    ): Promise<ApiResponse<FillImageResponse>> {
        return this._httpRequest.request({
            method: "POST",
            url: "/v1/images/fill",
            body: requestBody,
            mediaType: "application/json",
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
                429: `Too Many Requests`,
                451: `Unavailable for Legal Reasons`,
                500: `Internal Server Error`
            },
            signal: options?.signal
        });
    }
}
