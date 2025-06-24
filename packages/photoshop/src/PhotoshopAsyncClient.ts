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
// PhotoshopAsync Model Imports
import type { ApplyAutoCropRequest } from "./models/ApplyAutoCropRequest";
import type { ApplyDepthBlurRequest } from "./models/ApplyDepthBlurRequest";
import type { ConvertToActionsJsonRequest } from "./models/ConvertToActionsJsonRequest";
import type { CreateArtboardRequest } from "./models/CreateArtboardRequest";
import type { CreateDocumentRequest } from "./models/CreateDocumentRequest";
import type { CreateMaskRequest } from "./models/CreateMaskRequest";
import type { CreateRenditionRequest } from "./models/CreateRenditionRequest";
import type { DocumentManifestRequest } from "./models/DocumentManifestRequest";
import type { EditTextLayerRequest } from "./models/EditTextLayerRequest";
import type { JobStatusLinkResponse } from "./models/JobStatusLinkResponse";
import type { ModifyDocumentRequest } from "./models/ModifyDocumentRequest";
import type { PlayPhotoshopActionsJsonRequest } from "./models/PlayPhotoshopActionsJsonRequest";
import type { PlayPhotoshopActionsRequest } from "./models/PlayPhotoshopActionsRequest";
import type { PsJobResponse } from "./models/PsJobResponse";
import type { RemoveBackgroundRequest } from "./models/RemoveBackgroundRequest";
import type { ReplaceSmartObjectRequest } from "./models/ReplaceSmartObjectRequest";
import type { SenseiJobApiResponse } from "./models/SenseiJobApiResponse";
// Package.json import for package details
import { version } from "./../package.json";
/**
 * PhotoshopAsyncClient
 * PhotoshopAsync API client to use the PhotoshopAsync API services
 */
export class PhotoshopAsyncClient extends BaseServiceClient {
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
     * Get job status of a Photoshop job
     * @param jobId The job to get status for
     * @param options Additional options to send any additional data or cancel the request
     * @returns PsJobResponse Job Status
     * @throws {ApiError}
     */
    public psJobStatus = (jobId: string, options?: ApiOptions): Promise<ApiResponse<PsJobResponse>> => {
        return this._httpRequest.request({
            method: "GET",
            url: "/pie/psdService/status/{jobId}",
            path: {
                jobId
            },
            signal: options?.signal
        });
    };
    /**
     * Extract Document Manifest API.
     * Extract metadata from PSD document, including general file and layer information.
     * @param requestBody The input psd file to extract layer information from
     * @param options Additional options to send any additional data or cancel the request
     * @returns JobStatusLinkResponse response
     * @throws {ApiError}
     */
    public getDocumentManifestAsync(
        requestBody: DocumentManifestRequest,
        options?: ApiOptions
    ): Promise<ApiResponse<JobStatusLinkResponse>> {
        return this._httpRequest.request({
            method: "POST",
            url: "/pie/psdService/documentManifest",
            body: requestBody,
            mediaType: "application/json",
            errors: {
                400: `InputValidationError`,
                402: `Trial Limit Exceeded Error`,
                403: `Unauthorized`,
                404: `Requested resource was not found`
            },
            signal: options?.signal
        });
    }
    /**
     * Create PSD API
     * Create new PSD with layers
     * @param requestBody The input psd file to create a new psd from
     * @param options Additional options to send any additional data or cancel the request
     * @returns JobStatusLinkResponse response
     * @throws {ApiError}
     */
    public createDocumentAsync(
        requestBody: CreateDocumentRequest,
        options?: ApiOptions
    ): Promise<ApiResponse<JobStatusLinkResponse>> {
        return this._httpRequest.request({
            method: "POST",
            url: "/pie/psdService/documentCreate",
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
     * Apply Photoshop Edits API
     * Apply basic layer edits (name, state, etc), add/edit adjustment, pixel, and shape layers.
     * @param requestBody The input psd file to apply edits to and generate renditions and/or save as a new psd
     * @param options Additional options to send any additional data or cancel the request
     * @returns JobStatusLinkResponse response
     * @throws {ApiError}
     */
    public modifyDocumentAsync(
        requestBody: ModifyDocumentRequest,
        options?: ApiOptions
    ): Promise<ApiResponse<JobStatusLinkResponse>> {
        return this._httpRequest.request({
            method: "POST",
            url: "/pie/psdService/documentOperations",
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
     * Create Renditions API
     * Create flat image representations of a PSD in multiple formats
     * @param requestBody The input psd file to create renditions from
     * @param options Additional options to send any additional data or cancel the request
     * @returns JobStatusLinkResponse response
     * @throws {ApiError}
     */
    public createRenditionAsync(
        requestBody: CreateRenditionRequest,
        options?: ApiOptions
    ): Promise<ApiResponse<JobStatusLinkResponse>> {
        return this._httpRequest.request({
            method: "POST",
            url: "/pie/psdService/renditionCreate",
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
     * Replace Smart Object API.
     * Replace Smart Object in a PSD.
     * @param requestBody The input psd file to apply edits for replacing embedded smart object to and generate renditions and/or save as a new psd
     * @param options Additional options to send any additional data or cancel the request
     * @returns JobStatusLinkResponse response
     * @throws {ApiError}
     */
    public replaceSmartObjectAsync(
        requestBody: ReplaceSmartObjectRequest,
        options?: ApiOptions
    ): Promise<ApiResponse<JobStatusLinkResponse>> {
        return this._httpRequest.request({
            method: "POST",
            url: "/pie/psdService/smartObject",
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
     * Run Photoshop Actions API
     * Executes Photoshop Action file against a PSD, JPEG, PNG, or TIFF
     * @param requestBody The input file to apply Photoshop Actions to and generate renditions and/or save as a new image
     * @param options Additional options to send any additional data or cancel the request
     * @returns JobStatusLinkResponse response
     * @throws {ApiError}
     */
    public playPhotoshopActionsAsync(
        requestBody: PlayPhotoshopActionsRequest,
        options?: ApiOptions
    ): Promise<ApiResponse<JobStatusLinkResponse>> {
        return this._httpRequest.request({
            method: "POST",
            url: "/pie/psdService/photoshopActions",
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
     * Run Action JSON API
     * Execute given Photoshop Action specified in actionJSON format.
     * @param requestBody The input psd file to apply Photoshop actionJSON to and generate renditions and/or save as a new image
     * @param options Additional options to send any additional data or cancel the request
     * @returns JobStatusLinkResponse response
     * @throws {ApiError}
     */
    public playPhotoshopActionsJsonAsync(
        requestBody: PlayPhotoshopActionsJsonRequest,
        options?: ApiOptions
    ): Promise<ApiResponse<JobStatusLinkResponse>> {
        return this._httpRequest.request({
            method: "POST",
            url: "/pie/psdService/actionJSON",
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
     * Convert to Action JSON API
     * Convert .atn file to an actionJSON format
     * @param requestBody The input atn file to convert to actionJSON
     * @param options Additional options to send any additional data or cancel the request
     * @returns JobStatusLinkResponse response
     * @throws {ApiError}
     */
    public convertToActionsJsonAsync(
        requestBody: ConvertToActionsJsonRequest,
        options?: ApiOptions
    ): Promise<ApiResponse<JobStatusLinkResponse>> {
        return this._httpRequest.request({
            method: "POST",
            url: "/pie/psdService/actionJsonCreate",
            body: requestBody,
            mediaType: "application/json",
            errors: {
                400: `InputValidationError`,
                402: `Trial Limit Exceeded Error`,
                403: `Unauthorized`,
                404: `Requested resource was not found`,
                410: `Asset Link Invalid`
            },
            signal: options?.signal
        });
    }
    /**
     * Smart Crop API
     * Smart crop an image keeping the subject of interest in view.
     * @param requestBody The input image to apply product crop to.
     * @param options Additional options to send any additional data or cancel the request
     * @returns JobStatusLinkResponse response
     * @throws {ApiError}
     */
    public applyAutoCropAsync(
        requestBody: ApplyAutoCropRequest,
        options?: ApiOptions
    ): Promise<ApiResponse<JobStatusLinkResponse>> {
        return this._httpRequest.request({
            method: "POST",
            url: "/pie/psdService/productCrop",
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
     * Depth Blur API
     * Apply depth blur to an image input
     * @param requestBody The input image to apply depth blur to.
     * @param options Additional options to send any additional data or cancel the request
     * @returns JobStatusLinkResponse response
     * @throws {ApiError}
     */
    public applyDepthBlurAsync(
        requestBody: ApplyDepthBlurRequest,
        options?: ApiOptions
    ): Promise<ApiResponse<JobStatusLinkResponse>> {
        return this._httpRequest.request({
            method: "POST",
            url: "/pie/psdService/depthBlur",
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
     * Edit Text Layer API
     * Change the contents of a text layer in a PSD, eg for localization
     * @param requestBody The input text to be edited.
     * @param options Additional options to send any additional data or cancel the request
     * @returns JobStatusLinkResponse response
     * @throws {ApiError}
     */
    public editTextLayerAsync(
        requestBody: EditTextLayerRequest,
        options?: ApiOptions
    ): Promise<ApiResponse<JobStatusLinkResponse>> {
        return this._httpRequest.request({
            method: "POST",
            url: "/pie/psdService/text",
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
     * Create Arboards API
     * Create artboards from multiple PSD inputs
     * @param requestBody The input artboard to be created.
     * @param options Additional options to send any additional data or cancel the request
     * @returns JobStatusLinkResponse response
     * @throws {ApiError}
     */
    public createArtboardAsync(
        requestBody: CreateArtboardRequest,
        options?: ApiOptions
    ): Promise<ApiResponse<JobStatusLinkResponse>> {
        return this._httpRequest.request({
            method: "POST",
            url: "/pie/psdService/artboardCreate",
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
     * Get Status API
     * Get job status of a Sensei job
     * @param jobId The job to get status for
     * @param options Additional options to send any additional data or cancel the request
     * @returns SenseiJobApiResponse Job status
     * @throws {ApiError}
     */
    public senseiJobStatus = (
        jobId: string,
        options?: ApiOptions
    ): Promise<ApiResponse<SenseiJobApiResponse>> => {
        return this._httpRequest.request({
            method: "GET",
            url: "/sensei/status/{jobId}",
            path: {
                jobId
            },
            signal: options?.signal
        });
    };
    /**
     * Remove Background API
     * Isolate subject of interest in an image and remove background.
     * @param requestBody The input image and the cutout mask parameters
     * @param options Additional options to send any additional data or cancel the request
     * @returns JobStatusLinkResponse response
     * @throws {ApiError}
     */
    public removeBackgroundAsync(
        requestBody: RemoveBackgroundRequest,
        options?: ApiOptions
    ): Promise<ApiResponse<JobStatusLinkResponse>> {
        return this._httpRequest.request({
            method: "POST",
            url: "/sensei/cutout",
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
     * Create Mask API
     * Isolate a subject of interest in an image (people, objects, etc) and generate an image mask
     * @param requestBody The input image and the mask parameters
     * @param options Additional options to send any additional data or cancel the request
     * @returns JobStatusLinkResponse response
     * @throws {ApiError}
     */
    public createMaskAsync(
        requestBody: CreateMaskRequest,
        options?: ApiOptions
    ): Promise<ApiResponse<JobStatusLinkResponse>> {
        return this._httpRequest.request({
            method: "POST",
            url: "/sensei/mask",
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
