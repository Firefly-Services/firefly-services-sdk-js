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
import { BaseHttpRequest } from "./BaseHttpRequest";
import type { ServiceConfig } from "./ServiceTypes";
import { request as __request } from "./request";
import { ApiResponse } from "./ApiResponse";

export class FetchHttpRequest extends BaseHttpRequest {
    constructor(config: ServiceConfig) {
        super(config);
    }

    /**
     * Request method
     * @param options The request options from the service
     * @returns CancelablePromise<T>
     * @throws ApiError
     */
    public override request<T>(options: ApiRequestOptions): Promise<ApiResponse<T>> {
        return __request(this.config, options);
    }
}
