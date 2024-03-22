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

import { PsAsyncJob, PsJobResponse } from "./PsAsyncJob";
import { SenseiAsyncJob } from "./SenseiAsyncJob";

import type { CreateArtboardRequest } from "./models/CreateArtboardRequest";
import type { ApplyDepthBlurRequest } from "./models/ApplyDepthBlurRequest";
import type { CreateDocumentRequest } from "./models/CreateDocumentRequest";
import type { DocumentManifestRequest } from "./models/DocumentManifestRequest";
import type { ModifyDocumentRequest } from "./models/ModifyDocumentRequest";
import type { ConvertToActionsJsonRequest } from "./models/ConvertToActionsJsonRequest";
import type { PlayPhotoshopActionsJsonRequest } from "./models/PlayPhotoshopActionsJsonRequest";
import type { PlayPhotoshopActionsRequest } from "./models/PlayPhotoshopActionsRequest";
import type { ApplyAutoCropRequest } from "./models/ApplyAutoCropRequest";
import type { CreateRenditionRequest } from "./models/CreateRenditionRequest";
import type { ReplaceSmartObjectRequest } from "./models/ReplaceSmartObjectRequest";
import type { EditTextLayerRequest } from "./models/EditTextLayerRequest";

import type { RemoveBackgroundRequest } from "./models/RemoveBackgroundRequest";
import type { SenseiJobApiResponse } from "./models/SenseiJobApiResponse";
import { PhotoshopAsyncClient } from "./PhotoshopAsyncClient";
import { BaseServiceClient, ServiceConfig } from "@adobe/firefly-services-sdk-core/internal";
import { CreateMaskRequest } from "./models/CreateMaskRequest";

export class PhotoshopClient extends BaseServiceClient {
    private _photoshopAsyncClient: PhotoshopAsyncClient;
    constructor(config: ClientConfig) {
        const internalConfig: ServiceConfig = {
            ...config,
            baseUrl: "https://image.adobe.io/"
        };
        super(internalConfig);
        this._photoshopAsyncClient = new PhotoshopAsyncClient(internalConfig);
    }

    /**
     * Extract Document Manifest API
     * Extract metadata from PSD document, including general file and layer information.
     * @param {DocumentManifestRequest} requestBody The input psd file to extract layer information from
     * @param {ApiOptions} options Additional options to send any additional data or cancel the request
     * @returns {Promise<ApiResponse<PsJobResponse>>} JobStatusLinkResponse response
     * @throws {ApiError}
     */
    public async getDocumentManifest(
        requestBody: DocumentManifestRequest,
        options?: ApiOptions
    ): Promise<ApiResponse<PsJobResponse>> {
        return new PsAsyncJob(
            this._photoshopAsyncClient.getDocumentManifestAsync(requestBody, options),
            this._photoshopAsyncClient.psJobStatus
        );
    }

    /**
     * Create PSD API
     * Create new PSD with layers.
     * @param {CreateDocumentRequest} requestBody The input psd file to create a new psd from
     * @param {ApiOptions} options Additional options to send any additional data or cancel the request
     * @returns {Promise<ApiResponse<PsJobResponse>>} JobStatusLinkResponse response
     * @throws {ApiError}
     */
    public async createDocument(
        requestBody: CreateDocumentRequest,
        options?: ApiOptions
    ): Promise<ApiResponse<PsJobResponse>> {
        return new PsAsyncJob(
            this._photoshopAsyncClient.createDocumentAsync(requestBody, options),
            this._photoshopAsyncClient.psJobStatus
        );
    }

    /**
     * Apply Photoshop Edits API
     * Apply basic layer edits (name, state, etc), add/edit adjustment, pixel, and shape layers
     * @param {ModifyDocumentRequest} requestBody The input psd file to apply edits to and generate renditions and/or save as a new psd
     * @param {ApiOptions} options Additional options to send any additional data or cancel the request
     * @returns {Promise<ApiResponse<PsJobResponse>>} JobStatusLinkResponse response
     * @throws {ApiError}
     */
    public async modifyDocument(
        requestBody: ModifyDocumentRequest,
        options?: ApiOptions
    ): Promise<ApiResponse<PsJobResponse>> {
        return new PsAsyncJob(
            this._photoshopAsyncClient.modifyDocumentAsync(requestBody, options),
            this._photoshopAsyncClient.psJobStatus
        );
    }

    /**
     * Create Renditions API
     * Create flat image representations of a PSD in multiple formats
     * @param {CreateRenditionRequest} requestBody The input psd file to create renditions from
     * @param {ApiOptions} options Additional options to send any additional data or cancel the request
     * @returns {Promise<ApiResponse<PsJobResponse>>} JobStatusLinkResponse response
     * @throws {ApiError}
     */
    public async createRendition(
        requestBody: CreateRenditionRequest,
        options?: ApiOptions
    ): Promise<ApiResponse<PsJobResponse>> {
        return new PsAsyncJob(
            this._photoshopAsyncClient.createRenditionAsync(requestBody, options),
            this._photoshopAsyncClient.psJobStatus
        );
    }

    /**
     * Replace Smart Object API
     * Replace Smart Object in a PSD.
     * @param {ReplaceSmartObjectRequest} requestBody The input psd file to apply edits for replacing embedded smart object to and generate renditions and/or save as a new psd
     * @param {ApiOptions} options Additional options to send any additional data or cancel the request
     * @returns {Promise<ApiResponse<PsJobResponse>>} JobStatusLinkResponse response
     * @throws {ApiError}
     */
    public async replaceSmartObject(
        requestBody: ReplaceSmartObjectRequest,
        options?: ApiOptions
    ): Promise<ApiResponse<PsJobResponse>> {
        return new PsAsyncJob(
            this._photoshopAsyncClient.replaceSmartObjectAsync(requestBody, options),
            this._photoshopAsyncClient.psJobStatus
        );
    }

    /**
     * Run Photoshop Actions API
     * Executes Photoshop Action file against a PSD, JPEG, PNG, or TIFF.
     * @param {PlayPhotoshopActionsRequest} requestBody The input file to apply Photoshop Actions to and generate renditions and/or save as a new image
     * @param {ApiOptions} options Additional options to send any additional data or cancel the request
     * @returns {Promise<ApiResponse<PsJobResponse>>} JobStatusLinkResponse response
     * @throws {ApiError}
     */
    public async playPhotoshopActions(
        requestBody: PlayPhotoshopActionsRequest,
        options?: ApiOptions
    ): Promise<ApiResponse<PsJobResponse>> {
        return new PsAsyncJob(
            this._photoshopAsyncClient.playPhotoshopActionsAsync(requestBody, options),
            this._photoshopAsyncClient.psJobStatus
        );
    }

    /**
     * Run Action JSON API
     * Execute given Photoshop Action specified in actionJSON format.
     * @param {PlayPhotoshopActionsJsonRequest} requestBody The input psd file to apply Photoshop actionJSON to and generate renditions and/or save as a new image
     * @param {ApiOptions} options Additional options to send any additional data or cancel the request
     * @returns {Promise<ApiResponse<PsJobResponse>>} JobStatusLinkResponse response
     * @throws {ApiError}
     */
    public async playPhotoshopActionsJson(
        requestBody: PlayPhotoshopActionsJsonRequest,
        options?: ApiOptions
    ): Promise<ApiResponse<PsJobResponse>> {
        return new PsAsyncJob(
            this._photoshopAsyncClient.playPhotoshopActionsJsonAsync(requestBody, options),
            this._photoshopAsyncClient.psJobStatus
        );
    }

    /**
     * Convert to Action JSON API
     * Convert .atn file to an actionJSON format.
     * @param {ConvertToActionsJsonRequest} requestBody The input atn file to convert to actionJSON
     * @param {ApiOptions} options Additional options to send any additional data or cancel the request
     * @returns {Promise<ApiResponse<PsJobResponse>>} JobStatusLinkResponse response
     * @throws {ApiError}
     */
    public async convertToActionsJson(
        requestBody: ConvertToActionsJsonRequest,
        options?: ApiOptions
    ): Promise<ApiResponse<PsJobResponse>> {
        return new PsAsyncJob(
            this._photoshopAsyncClient.convertToActionsJsonAsync(requestBody, options),
            this._photoshopAsyncClient.psJobStatus
        );
    }

    /**
     * Smart Crop API
     * Smart crop an image keeping the subject of interest in view
     * @param {ApplyAutoCropRequest} requestBody The input image to apply product crop to.
     * @param {ApiOptions} options Additional options to send any additional data or cancel the request
     * @returns {Promise<ApiResponse<PsJobResponse>>} JobStatusLinkResponse response
     * @throws {ApiError}
     */
    public async applyAutoCrop(
        requestBody: ApplyAutoCropRequest,
        options?: ApiOptions
    ): Promise<ApiResponse<PsJobResponse>> {
        return new PsAsyncJob(
            this._photoshopAsyncClient.applyAutoCropAsync(requestBody, options),
            this._photoshopAsyncClient.psJobStatus
        );
    }

    /**
     * Depth Blur API
     * Apply depth blur to an image input.
     * @param {ApplyDepthBlurRequest} requestBody The input image to apply depth blur to.
     * @param {ApiOptions} options Additional options to send any additional data or cancel the request
     * @returns {Promise<ApiResponse<PsJobResponse>>} JobStatusLinkResponse response
     * @throws {ApiError}
     */
    public async applyDepthBlur(
        requestBody: ApplyDepthBlurRequest,
        options?: ApiOptions
    ): Promise<ApiResponse<PsJobResponse>> {
        return new PsAsyncJob(
            this._photoshopAsyncClient.applyDepthBlurAsync(requestBody, options),
            this._photoshopAsyncClient.psJobStatus
        );
    }

    /**
     * Edit Text Layer API
     * Change the contents of a text layer in a PSD, eg for localization
     * @param {EditTextLayerRequest} requestBody The input text to be edited.
     * @param {ApiOptions} options Additional options to send any additional data or cancel the request
     * @returns {Promise<ApiResponse<PsJobResponse>>} JobStatusLinkResponse response
     * @throws {ApiError}
     */
    public async editTextLayer(
        requestBody: EditTextLayerRequest,
        options?: ApiOptions
    ): Promise<ApiResponse<PsJobResponse>> {
        return new PsAsyncJob(
            this._photoshopAsyncClient.editTextLayerAsync(requestBody, options),
            this._photoshopAsyncClient.psJobStatus
        );
    }

    /**
     * Create Arboards API
     * Create artboards from multiple PSD inputs.
     * @param {CreateArtboardRequest} requestBody The input artboard to be created.
     * @param {ApiOptions} options Additional options to send any additional data or cancel the request
     * @returns {Promise<ApiResponse<PsJobResponse>>} JobStatusLinkResponse response
     * @throws {ApiError}
     */
    public async createArtboard(
        requestBody: CreateArtboardRequest,
        options?: ApiOptions
    ): Promise<ApiResponse<PsJobResponse>> {
        return new PsAsyncJob(
            this._photoshopAsyncClient.createArtboardAsync(requestBody, options),
            this._photoshopAsyncClient.psJobStatus
        );
    }

    /**
     * Remove Background API
     * Isolate subject of interest in an image and remove background..
     * @param {RemoveBackgroundRequest} requestBody The input image and the cutout mask parameters
     * @param {ApiOptions} options Additional options to send any additional data or cancel the request
     * @returns {Promise<ApiResponse<PsJobResponse>>} JobStatusLinkResponse response
     * @throws {ApiError}
     */
    public async removeBackground(
        requestBody: RemoveBackgroundRequest,
        options?: ApiOptions
    ): Promise<ApiResponse<SenseiJobApiResponse>> {
        return new SenseiAsyncJob(
            this._photoshopAsyncClient.removeBackgroundAsync(requestBody, options),
            this._photoshopAsyncClient.senseiJobStatus
        );
    }

    /**
     * Create Mask API
     * Isolate a subject of interest in an image (people, objects, etc) and generate an image mask.
     * @param {RemoveBackgroundRequest} requestBody The input image and the mask parameters
     * @param {ApiOptions} options Additional options to send any additional data or cancel the request
     * @returns {Promise<ApiResponse<PsJobResponse>>} JobStatusLinkResponse response
     * @throws {ApiError}
     */
    public async createMask(
        requestBody: CreateMaskRequest,
        options?: ApiOptions
    ): Promise<ApiResponse<SenseiJobApiResponse>> {
        return new SenseiAsyncJob(
            this._photoshopAsyncClient.createMaskAsync(requestBody, options),
            this._photoshopAsyncClient.senseiJobStatus
        );
    }
}
