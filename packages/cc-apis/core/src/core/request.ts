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

import { ApiError } from "./ApiError";
import type { ApiRequestOptions } from "./ApiRequestOptions";
import type { ApiResult, ApiResponse } from "./ApiResponse";
import type { ServiceConfig } from "./ServiceTypes";

export const isDefined = <T>(value: T | null | undefined): value is Exclude<T, null | undefined> => {
    return value !== undefined && value !== null;
};

/* eslint-disable @typescript-eslint/no-explicit-any -- validation method could be any object */
export const isString = (value: any): value is string => {
    return typeof value === "string";
};

/* eslint-disable @typescript-eslint/no-explicit-any -- validation method could be any object */
export const isStringWithValue = (value: any): value is string => {
    return isString(value) && value !== "";
};

/* eslint-disable @typescript-eslint/no-explicit-any -- validation method could be any object */
export const isBlob = (value: any): value is Blob => {
    return (
        typeof value === "object" &&
        typeof value.type === "string" &&
        typeof value.stream === "function" &&
        typeof value.arrayBuffer === "function" &&
        typeof value.constructor === "function" &&
        typeof value.constructor.name === "string" &&
        /^(Blob|File)$/.test(value.constructor.name) &&
        /^(Blob|File)$/.test(value[Symbol.toStringTag])
    );
};

/* eslint-disable @typescript-eslint/no-explicit-any -- validation method could be any object */
export const isFormData = (value: any): value is FormData => {
    return value instanceof FormData;
};

export const base64 = (str: string): string => {
    try {
        return btoa(str);
    } catch (err) {
        // @ts-ignore
        return Buffer.from(str).toString("base64");
    }
};

export const getQueryString = (params: Record<string, any>): string => {
    const qs: string[] = [];

    const append = (key: string, value: any) => {
        qs.push(`${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`);
    };

    const process = (key: string, value: any) => {
        if (isDefined(value)) {
            if (Array.isArray(value)) {
                value.forEach((v) => {
                    process(key, v);
                });
            } else if (typeof value === "object") {
                Object.entries(value).forEach(([k, v]) => {
                    process(`${key}[${k}]`, v);
                });
            } else {
                append(key, value);
            }
        }
    };

    Object.entries(params).forEach(([key, value]) => {
        process(key, value);
    });

    if (qs.length > 0) {
        return `?${qs.join("&")}`;
    }

    return "";
};

const getUrl = (config: ServiceConfig, options: ApiRequestOptions): string => {
    const encoder = encodeURI;

    const path = options.url.replace(/{(.*?)}/g, (substring: string, group: string) => {
        if (options.path && Object.prototype.hasOwnProperty.call(options.path, group)) {
            return encoder(String(options.path[group]));
        }
        return substring;
    });

    const baseUrl: string = config.baseUrl;

    const url = `${baseUrl}${path}`;
    if (options.query) {
        return `${url}${getQueryString(options.query)}`;
    }
    return url;
};

export const getFormData = (options: ApiRequestOptions): FormData | undefined => {
    if (options.formData) {
        const formData = new FormData();

        const process = (key: string, value: any) => {
            if (isString(value) || isBlob(value)) {
                formData.append(key, value);
            } else {
                formData.append(key, JSON.stringify(value));
            }
        };

        Object.entries(options.formData)
            .filter(([_, value]) => isDefined(value))
            .forEach(([key, value]) => {
                if (Array.isArray(value)) {
                    value.forEach((v) => process(key, v));
                } else {
                    process(key, value);
                }
            });

        return formData;
    }
    return undefined;
};

type Resolver<T> = (options: ApiRequestOptions) => Promise<T>;

export const resolve = async <T>(
    options: ApiRequestOptions,
    resolver?: T | Resolver<T>
): Promise<T | undefined> => {
    if (typeof resolver === "function") {
        return (resolver as Resolver<T>)(options);
    }
    return resolver;
};

export const getHeaders = async (config: ServiceConfig, options: ApiRequestOptions): Promise<Headers> => {
    const [token, additionalHeaders] = await Promise.all([
        config.tokenProvider.getToken(),
        resolve(options, config.headers)
    ]);

    const headers = Object.entries({
        Accept: "application/json",
        ...additionalHeaders,
        ...options.headers
    })
        .filter(([_, value]) => isDefined(value))
        .reduce(
            (headers, [key, value]) => ({
                ...headers,
                [key]: String(value)
            }),
            {} as Record<string, string>
        );

    if (isStringWithValue(token)) {
        headers["Authorization"] = `Bearer ${token}`;
    }

    if (options.body) {
        if (isBlob(options.body) && Boolean(options.body.type)) {
            headers["Content-Type"] = options.body.type;
        } else if (options.mediaType) {
            headers["Content-Type"] = options.mediaType;
        } else if (isBlob(options.body)) {
            headers["Content-Type"] = options.body.type || "application/octet-stream";
        } else if (isString(options.body)) {
            headers["Content-Type"] = "text/plain";
        } else if (!isFormData(options.body)) {
            headers["Content-Type"] = "application/json";
        }
    }

    return new Headers(headers);
};

export const getRequestBody = (options: ApiRequestOptions): any => {
    if (options.body !== undefined) {
        if (options.mediaType?.includes("/json")) {
            return JSON.stringify(options.body);
        } else if (isString(options.body) || isBlob(options.body) || isFormData(options.body)) {
            return options.body;
        } else {
            return JSON.stringify(options.body);
        }
    }
    return undefined;
};

export const sendRequest = async (
    config: ServiceConfig,
    options: ApiRequestOptions,
    url: string,
    body: any,
    formData: FormData | undefined,
    headers: Headers
): Promise<Response> => {
    const request: RequestInit = {
        headers,
        body: body ?? formData,
        method: options.method,
        signal: options.signal
    };

    return await fetch(url, request);
};

export const getResponseHeader = (response: Response, responseHeader?: string): string | undefined => {
    if (responseHeader) {
        const content = response.headers.get(responseHeader);
        if (isString(content)) {
            return content;
        }
    }
    return undefined;
};

export const getResponseBody = async (response: Response): Promise<any> => {
    if (response.status !== 204) {
        try {
            const contentType = response.headers.get("Content-Type");
            if (contentType) {
                const jsonTypes = ["application/json", "application/problem+json"];
                const isJSON = jsonTypes.some((type) => contentType.toLowerCase().startsWith(type));
                const isFormData = contentType.toLowerCase().includes("multipart/form-data");
                if (isJSON) {
                    return await response.json();
                } else if (isFormData) {
                    return await response.formData();
                } else {
                    return await response.text();
                }
            }
        } catch (error) {
            console.error(error);
        }
    }
    return undefined;
};

export const catchErrorCodes = (options: ApiRequestOptions, result: ApiResult): void => {
    const errors: Record<number, string> = {
        400: "Bad Request",
        401: "Unauthorized",
        403: "Forbidden",
        404: "Not Found",
        500: "Internal Server Error",
        502: "Bad Gateway",
        503: "Service Unavailable",
        ...options.errors
    };

    const error = errors[result.status];
    if (error) {
        throw new ApiError(options, result, error);
    }

    if (!result.ok) {
        const errorStatus = result.status ?? "unknown";
        const errorStatusText = result.statusText ?? "unknown";
        const errorBody = (() => {
            try {
                return JSON.stringify(result.body, null, 2);
            } catch (e) {
                return undefined;
            }
        })();

        throw new ApiError(
            options,
            result,
            `Generic Error: status: ${errorStatus}; status text: ${errorStatusText}; body: ${errorBody}`
        );
    }
};

/**
 * Request method
 * @param config The OpenAPI configuration object
 * @param options The request options from the service
 * @returns CancelablePromise<T>
 * @throws ApiError
 */
export const request = <T>(config: ServiceConfig, options: ApiRequestOptions): Promise<ApiResponse<T>> => {
    /*eslint no-async-promise-executor: "off" -- required for returning Promise to the caller*/
    return new Promise(async (resolve, reject) => {
        try {
            const url = getUrl(config, options);
            const formData = getFormData(options);
            const body = getRequestBody(options);
            const headers = await getHeaders(config, options);

            const response = await sendRequest(config, options, url, body, formData, headers);
            const responseBody = await getResponseBody(response);
            // const responseHeader = getResponseHeader(response, options.responseHeader);

            const apiResult: ApiResult = {
                url,
                ok: response.ok,
                status: response.status,
                statusText: response.statusText,
                body: responseBody,
                response
            };

            catchErrorCodes(options, apiResult);

            const result: ApiResponse<T> = {
                result: apiResult.body as T,
                headers: response.headers
            };
            resolve(result);
        } catch (error) {
            reject(error);
        }
    });
};
