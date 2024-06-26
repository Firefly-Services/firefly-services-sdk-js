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

import { BaseHttpRequest } from "./BaseHttpRequest";
import { FetchHttpRequest } from "./FetchHttpRequest";
import { ServiceConfig } from "./ServiceTypes";

/**
 * Base class for all the Product API clients
 */
export class BaseServiceClient {
    protected _httpRequest: BaseHttpRequest;
    protected _config: ServiceConfig;

    constructor(config: ServiceConfig) {
        this._config = this.validateServiceConfig(config);
        this._httpRequest = new FetchHttpRequest(config);
    }

    /**
     * Compute and return baseurl for provided environment from the urlMap
     * @param urlMap
     * @param environment
     * @returns baseUrl as string
     */
    protected static getBaseUrl(urlMap: Map<string, string>, environment: string): string {
        const url = urlMap.get(environment);
        if (url === undefined) {
            throw new Error(`Unsupported environment: ${environment}`);
        }
        return url;
    }

    /**
     * Compute and return environment from the version string
     * @param version
     * @returns environment as string
     */
    protected static getEnvFromVersion(version: string): string {
        if (version.toLowerCase().includes("beta")) return "beta";
        else return "production";
    }

    private validateServiceConfig(config: ServiceConfig): ServiceConfig {
        const configCopy: ServiceConfig = config;

        // check if the baseUrl is a valid
        if (typeof config.baseUrl !== "string" || config.baseUrl.length <= 0) {
            throw new Error("Internal Error: Invalid Domain");
        }

        // check if the clientId is a valid
        if (typeof config.clientId !== "string" || config.clientId.length <= 0) {
            throw new Error("config.clientId is not valid");
        }

        configCopy.headers = {
            ...config.headers,
            "x-api-key": config.clientId
        };
        return configCopy;
    }
}
