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

import type { TokenProvider } from "@adobe/firefly-services-sdk-core";
import { version } from "../package.json";

interface TokenResponse {
    access_token: string;
    token_type: string;
    expires_in: number;
}

/**
 * ServerToServerAuthDetails
 */
export interface ServerToServerAuthDetails {
    /**
     * client-id of the application
     */
    clientId: string;
    /**
     * client-secret of the application
     */
    clientSecret: string;
    /**
     * scopes based on the applications being used
     * Firefly: `firefly_api, ff_apis`
     * ContentTagging: `openid, AdobeID, session, additional_info`
     * Lightroom: `openid, AdobeID, read_organizations`
     * Photoshop: `openid, AdobeID, read_organizations`
     */
    scopes: string;
}

/**
 * ServerToServerAuthOptions to manage token refresh
 */
export interface ServerToServerAuthOptions {
    /**
     * Option to Opt-in to magage token generation and refresh on expiry.
     */
    autoRefresh: boolean;
}

/**
 * ServerToServerTokenProvider Implements TokenProvider.
 * It generates Access Token using server to server authentication credentials. [More details](https://developer.adobe.com/developer-console/docs/guides/authentication/ServerToServerAuthentication/)
 */
export class ServerToServerTokenProvider implements TokenProvider {
    private _baseUrlMap: Map<string, string> = new Map([["production", "https://ims-na1.adobelogin.com"]]);
    private _clientId: string;
    private _clientSecret: string;
    private _scopes: string;
    private _tokenDetails?: TokenResponse;
    private _tokenExpiryTime?: number;
    private _autoRefresh: boolean;

    /**
     * ServerToServerTokenProvider
     * @param details: Credentials required for authentication
     * @param options: options to manage token refresh
     */
    constructor(
        details: ServerToServerAuthDetails,
        options: ServerToServerAuthOptions = {
            autoRefresh: false
        }
    ) {
        this._clientId = details.clientId;
        this._clientSecret = details.clientSecret;
        this._scopes = details.scopes;
        this._autoRefresh = options.autoRefresh;
    }

    private _isTokenExpired(): boolean {
        if (!this._tokenExpiryTime) {
            return true;
        }
        const currentTime = Date.now();
        return currentTime > this._tokenExpiryTime;
    }

    /**
     * Returns the cached valid access token if available.
     * If the token is not available and the autoRefresh option is set to true, this method performs authentication and then returns the token.
     * If no token is available and autoRefresh is false, it throws an Error.
     * @returns access token
     */
    public async getToken(env = "production"): Promise<string> {
        if (!this._autoRefresh) {
            if (!this._tokenDetails) {
                throw new Error(
                    "Token not available, `autoRefresh` is disabled, please call authenticate method to get the token."
                );
            }

            if (this._isTokenExpired()) {
                throw new Error("Token expired, please call authenticate method to get the token.");
            }
            return this._tokenDetails.access_token;
        }

        // check for token and expiry
        if (!this._tokenDetails && this._isTokenExpired()) {
            await this.authenticate(env);
        }
        return this._tokenDetails?.access_token || "";
    }

    /**
     * Authenticates the provided credentials and caches the generated token.
     * If autoRefresh option is set to true, the token will be automatically refreshed.
     * If autoRefresh is set to false, this method needs to be called manually before making API calls, and the user should handle token refresh themselves.
     * @returns access token
     */
    public async authenticate(env = "production"): Promise<string> {
        const endpoint = "ims/token/v3";
        const data = `grant_type=client_credentials&client_id=${this._clientId}&client_secret=${this._clientSecret}&scope=${this._scopes}`;
        const config: RequestInit = {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "User-Agent": "FFS-SDK, JS, Common-" + version
            },
            body: data
        };

        try {
            const response = await fetch(`${this._baseUrlMap.get(env)}/${endpoint}`, config);
            this._tokenDetails = await response.json();
            if (!this._tokenDetails) {
                throw new Error("Failed: Invalid Token response Data");
            }
            this._tokenExpiryTime = Date.now() + Number(this._tokenDetails.expires_in) * 1000;
            return this._tokenDetails.access_token;
        } catch (error) {
            console.error("Error while fetching token", error);
            throw error;
        }
    }
}
