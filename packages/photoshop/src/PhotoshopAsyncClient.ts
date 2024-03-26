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

import type { CreateArtboardRequest } from "./models/CreateArtboardRequest";
import type { ApplyDepthBlurRequest } from "./models/ApplyDepthBlurRequest";
import type { CreateDocumentRequest } from "./models/CreateDocumentRequest";
import type { DocumentManifestRequest } from "./models/DocumentManifestRequest";
import type { ModifyDocumentRequest } from "./models/ModifyDocumentRequest";
import type { ManifestJobApiResponse } from "./models/ManifestJobApiResponse";
import type { ConvertToActionsJsonRequest } from "./models/ConvertToActionsJsonRequest";
import type { PlayPhotoshopActionsJsonRequest } from "./models/PlayPhotoshopActionsJsonRequest";
import type { PlayPhotoshopActionsRequest } from "./models/PlayPhotoshopActionsRequest";
import type { PsJobApiResponse } from "./models/PsJobApiResponse";
import type { ApplyAutoCropRequest } from "./models/ApplyAutoCropRequest";
import type { CreateRenditionRequest } from "./models/CreateRenditionRequest";
import type { ReplaceSmartObjectRequest } from "./models/ReplaceSmartObjectRequest";
import type { EditTextLayerRequest } from "./models/EditTextLayerRequest";

import type { RemoveBackgroundRequest } from "./models/RemoveBackgroundRequest";
import type { JobStatusLinkResponse } from "./models/JobStatusLinkResponse";
import type { SenseiJobApiResponse } from "./models/SenseiJobApiResponse";
import { CreateMaskRequest } from "./models/CreateMaskRequest";

export class PhotoshopAsyncClient extends BaseServiceClient {
    constructor(config: ServiceConfig) {
        super(config);
    }

    /**
     * Returns the status of a photoshop job.
     * @param jobId The job to get status for
     * @param {ApiOptions} options Additional options to send any additional data or cancel the request
     * @returns {Promise<ApiResponse<ManifestJobApiResponse | PsJobApiResponse>>} any once all children are complete
     * @throws {ApiError}
     */
    public psJobStatus = (
        jobId: string,
        options?: ApiOptions
    ): Promise<ApiResponse<ManifestJobApiResponse | PsJobApiResponse>> => {
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
     * Get information about the PSD document, including metadata about the file as a whole as well as detailed information about the layers included in the file.
     * @param {DocumentManifestRequest} requestBody The input psd file to extract layer information from
     * @param {ApiOptions} options Additional options to send any additional data or cancel the request
     * @returns {Promise<ApiResponse<JobStatusLinkResponse>>} JobStatusLinkResponse response
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
     * Create a new psd optionaly with layers and generate renditions or save as PSD.
     * @param {CreateDocumentRequest} requestBody The input psd file to create a new psd from
     * @param {ApiOptions} options Additional options to send any additional data or cancel the request
     * @returns {Promise<ApiResponse<JobStatusLinkResponse>>} JobStatusLinkResponse response
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
     * Apply psd edits.
     * @param {ModifyDocumentRequest} requestBody The input psd file to apply edits to and generate renditions and/or save as a new psd
     * @param {ApiOptions} options Additional options to send any additional data or cancel the request
     * @returns {Promise<ApiResponse<JobStatusLinkResponse>>} JobStatusLinkResponse response
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
     * Create renditions
     * @param {CreateRenditionRequest} requestBody The input psd file to create renditions from
     * @param {ApiOptions} options Additional options to send any additional data or cancel the request
     * @returns {Promise<ApiResponse<JobStatusLinkResponse>>} JobStatusLinkResponse response
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
     * Edits a PSD for replacing embedded smart object and then generate renditions and/or save a new psd.
     * @param {ReplaceSmartObjectRequest} requestBody The input psd file to apply edits for replacing embedded smart object to and generate renditions and/or save as a new psd
     * @param {ApiOptions} options Additional options to send any additional data or cancel the request
     * @returns {Promise<ApiResponse<JobStatusLinkResponse>>} JobStatusLinkResponse response
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
     * Executes Photoshop Actions on a given image.
     * @param {PlayPhotoshopActionsRequest} requestBody The input file to apply Photoshop Actions to and generate renditions and/or save as a new image
     * @param {ApiOptions} options Additional options to send any additional data or cancel the request
     * @returns {Promise<ApiResponse<JobStatusLinkResponse>>} JobStatusLinkResponse response
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
     * Playback photoshop actions in actionJSON format
     * @param {PlayPhotoshopActionsJsonRequest} requestBody The input psd file to apply Photoshop actionJSON to and generate renditions and/or save as a new image
     * @param {ApiOptions} options Additional options to send any additional data or cancel the request
     * @returns {Promise<ApiResponse<JobStatusLinkResponse>>} JobStatusLinkResponse response
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
     * Converts an atn file to actionJSON
     * @param {ConvertToActionsJsonRequest} requestBody The input atn file to convert to actionJSON
     * @param {ApiOptions} options Additional options to send any additional data or cancel the request
     * @returns {Promise<ApiResponse<JobStatusLinkResponse>>} JobStatusLinkResponse response
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
     * Performs smart crop on the given image.
     * @param {ApplyAutoCropRequest} requestBody The input image to apply product crop to.
     * @param {ApiOptions} options Additional options to send any additional data or cancel the request
     * @returns {Promise<ApiResponse<JobStatusLinkResponse>>} JobStatusLinkResponse response
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
     * Appy Depth Blur on a given image.
     * @param {ApplyDepthBlurRequest} requestBody The input image to apply depth blur to.
     * @param {ApiOptions} options Additional options to send any additional data or cancel the request
     * @returns {Promise<ApiResponse<JobStatusLinkResponse>>} JobStatusLinkResponse response
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
     * Edit one or more text layers on the given Photoshop psd document.
     * @param {EditTextLayerRequest} requestBody The input text to be edited.
     * @param {ApiOptions} options Additional options to send any additional data or cancel the request
     * @returns {Promise<ApiResponse<JobStatusLinkResponse>>} JobStatusLinkResponse response
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
     * Creates an artboard.
     * @param {CreateArtboardRequest} requestBody The input artboard to be created.
     * @param {ApiOptions} options Additional options to send any additional data or cancel the request
     * @returns {Promise<ApiResponse<JobStatusLinkResponse>>} JobStatusLinkResponse response
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
     * Get the status for an asynchronous cutout/mask job
     * @param jobId The job to get status for
     * @param {ApiOptions} options Additional options to send any additional data or cancel the request
     * @returns {Promise<ApiResponse<SenseiJobApiResponse>>} Job status
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
     * Remove the background from the given input image.
     * @param {RemoveBackgroundRequest} requestBody The input image and the cutout mask parameters
     * @param {ApiOptions} options Additional options to send any additional data or cancel the request
     * @returns {Promise<ApiResponse<JobStatusLinkResponse>>} JobStatusLinkResponse response
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
     * Generates a mask PNG
     * @param {RemoveBackgroundRequest} requestBody The input image and the mask parameters
     * @param {ApiOptions} options Additional options to send any additional data or cancel the request
     * @returns {Promise<ApiResponse<JobStatusLinkResponse>>} JobStatusLinkResponse response
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
