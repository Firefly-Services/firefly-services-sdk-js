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

import type { ApiRequestOptions } from "./ApiRequestOptions";
import type { ServiceConfig } from "./ServiceTypes";
import { ApiResponse } from "./ApiResponse";

export abstract class BaseHttpRequest {
    constructor(public readonly config: ServiceConfig) {}

    public abstract request<T>(options: ApiRequestOptions): Promise<ApiResponse<T>>;
}
