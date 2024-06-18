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

/**
 * A simple interface to provide the access token, this can be used to provide the access token from different sources.
 */
export interface TokenProvider {
    /**
     * returns the access token for the application to interact with the Firefly services.
     * @returns access token
     */
    getToken(env: string | undefined): Promise<string>;
}

/**
 * Common Client configuration to interact with the Service APIs.
 */
export interface ClientConfig {
    /**
     * Implementation of TokenProvider to get the access token
     */
    tokenProvider: TokenProvider;
    /**
     * The value to be passed as x-api-key in headers for all requests
     */
    clientId: string;
    /**
     * Method to switch between different environments i.e. beta, prod etc
     * @Experimental
     */
    serviceEnvironment?: string;
}

/**
 * Common client options to create Client with Credentials
 */
export interface ClientCredentials {
    /**
     * The value to be passed as x-api-key in headers for all requests
     */
    clientId: string;
    /**
     * The value to be used in generating the token provider
     */
    clientSecret: string;
    /**
     * Method to switch between different environments i.e. beta, prod etc
     * @Experimental
     */
    serviceEnvironment?: string;
    /**
     * scopes based on the applications being used
     * Firefly: `firefly_api, ff_apis`
     * ContentTagging: `openid, AdobeID, session, additional_info`
     * Lightroom: `openid, AdobeID, read_organizations`
     * Photoshop: `openid, AdobeID, read_organizations`
     */
    scopes?: string;
}
