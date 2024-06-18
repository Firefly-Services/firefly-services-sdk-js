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

import type { ApiRequestOptions } from "./ApiRequestOptions";
import type { ApiResult } from "./ApiResponse";

/**
 * Error thrown when an API request fails
 */
export class ApiError extends Error {
    /**
     * The URL of the request that failed
     */
    public readonly url: string;
    /**
     * The HTTP status code of the response
     */
    public readonly status: number;
    /**
     * The HTTP status text of the response
     */
    public readonly statusText: string;

    /* eslint-disable @typescript-eslint/no-explicit-any -- to support multipe result objects from all apps*/
    /**
     * The body of the response
     */
    public readonly body: any;
    /**
     * The request options that were used
     */
    public readonly request: ApiRequestOptions;

    constructor(request: ApiRequestOptions, response: ApiResult, message: string) {
        super(message);

        this.name = "ApiError";
        this.url = response.url;
        this.status = response.status;
        this.statusText = response.statusText;
        this.body = response.body;
        this.request = request;
    }
}
