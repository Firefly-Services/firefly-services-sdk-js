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
// Photoshop Model Imports
import type { ApplyAutoCropRequest } from "./models/ApplyAutoCropRequest";
import type { ApplyDepthBlurRequest } from "./models/ApplyDepthBlurRequest";
import type { ConvertToActionsJsonRequest } from "./models/ConvertToActionsJsonRequest";
import type { CreateArtboardRequest } from "./models/CreateArtboardRequest";
import type { CreateDocumentRequest } from "./models/CreateDocumentRequest";
import type { CreateMaskRequest } from "./models/CreateMaskRequest";
import type { CreateRenditionRequest } from "./models/CreateRenditionRequest";
import type { DocumentManifestRequest } from "./models/DocumentManifestRequest";
import type { EditTextLayerRequest } from "./models/EditTextLayerRequest";
import type { ModifyDocumentRequest } from "./models/ModifyDocumentRequest";
import type { PlayPhotoshopActionsJsonRequest } from "./models/PlayPhotoshopActionsJsonRequest";
import type { PlayPhotoshopActionsRequest } from "./models/PlayPhotoshopActionsRequest";
import type { PsJobResponse } from "./models/PsJobResponse";
import type { RemoveBackgroundRequest } from "./models/RemoveBackgroundRequest";
import type { ReplaceSmartObjectRequest } from "./models/ReplaceSmartObjectRequest";
import type { SenseiJobApiResponse } from "./models/SenseiJobApiResponse";
// Photoshop Async Handler Imports
import { PsAsyncJob } from "../resources/PsAsyncJob";
import { PhotoshopAsyncClient } from "./PhotoshopAsyncClient";
import { SenseiAsyncJob } from "../resources/SenseiAsyncJob";
// Package.json import for package details
import { version } from "./../package.json";
// Server to Server Token Provider imports for creating TokenProvider
import { ServerToServerTokenProvider } from "@adobe/firefly-services-common-apis";
import type { ServerToServerAuthDetails } from "@adobe/firefly-services-common-apis";
/**
 * PhotoshopClient
 * Photoshop API client to use the Photoshop API services
 */
export class PhotoshopClient extends BaseServiceClient {
    private _photoshopAsyncClient: PhotoshopAsyncClient;
    /**
     * Constructor for PhotoshopClient
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
                "User-Agent": `FFS-SDK, JS, Photoshop-${version}`
            }
        };
        super(internalConfig);
        this._photoshopAsyncClient = new PhotoshopAsyncClient(internalConfig);
    }
    /**
     * Extract Document Manifest API.
     * Extract metadata from PSD document, including general file and layer information.
     * @param requestBody The input psd file to extract layer information from
     * @param options Additional options to send any additional data or cancel the request
     * @returns PsJobResponse Job Status
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
     * Create new PSD with layers
     * @param requestBody The input psd file to create a new psd from
     * @param options Additional options to send any additional data or cancel the request
     * @returns PsJobResponse Job Status
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
     * Apply basic layer edits (name, state, etc), add/edit adjustment, pixel, and shape layers.
     * @param requestBody The input psd file to apply edits to and generate renditions and/or save as a new psd
     * @param options Additional options to send any additional data or cancel the request
     * @returns PsJobResponse Job Status
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
     * @param requestBody The input psd file to create renditions from
     * @param options Additional options to send any additional data or cancel the request
     * @returns PsJobResponse Job Status
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
     * Replace Smart Object API.
     * Replace Smart Object in a PSD.
     * @param requestBody The input psd file to apply edits for replacing embedded smart object to and generate renditions and/or save as a new psd
     * @param options Additional options to send any additional data or cancel the request
     * @returns PsJobResponse Job Status
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
     * Executes Photoshop Action file against a PSD, JPEG, PNG, or TIFF
     * @param requestBody The input file to apply Photoshop Actions to and generate renditions and/or save as a new image
     * @param options Additional options to send any additional data or cancel the request
     * @returns PsJobResponse Job Status
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
     * @param requestBody The input psd file to apply Photoshop actionJSON to and generate renditions and/or save as a new image
     * @param options Additional options to send any additional data or cancel the request
     * @returns PsJobResponse Job Status
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
     * Convert .atn file to an actionJSON format
     * @param requestBody The input atn file to convert to actionJSON
     * @param options Additional options to send any additional data or cancel the request
     * @returns PsJobResponse Job Status
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
     * Smart crop an image keeping the subject of interest in view.
     * @param requestBody The input image to apply product crop to.
     * @param options Additional options to send any additional data or cancel the request
     * @returns PsJobResponse Job Status
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
     * Apply depth blur to an image input
     * @param requestBody The input image to apply depth blur to.
     * @param options Additional options to send any additional data or cancel the request
     * @returns PsJobResponse Job Status
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
     * @param requestBody The input text to be edited.
     * @param options Additional options to send any additional data or cancel the request
     * @returns PsJobResponse Job Status
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
     * Create artboards from multiple PSD inputs
     * @param requestBody The input artboard to be created.
     * @param options Additional options to send any additional data or cancel the request
     * @returns PsJobResponse Job Status
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
     * Isolate subject of interest in an image and remove background.
     * @param requestBody The input image and the cutout mask parameters
     * @param options Additional options to send any additional data or cancel the request
     * @returns SenseiJobApiResponse Job status
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
     * Isolate a subject of interest in an image (people, objects, etc) and generate an image mask
     * @param requestBody The input image and the mask parameters
     * @param options Additional options to send any additional data or cancel the request
     * @returns SenseiJobApiResponse Job status
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
