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

import { FireflyClient, CoreTypes, GenerateImagesResponse } from "@adobe/firefly-apis";
import { ServerToServerTokenProvider } from "@adobe/firefly-services-common-apis";

/**
 * Function to generate an image and get pre-signed URL.
 */
async function generateImages(prompt: string): Promise<void> {
    try {
        const clientId: string = "<clientId>"; // Provide your client id
        const authProvider: CoreTypes.TokenProvider = new ServerToServerTokenProvider(
            {
                clientId: clientId, // Provide your client id
                clientSecret: "<clientSecret>", // Provide your client secret
                scopes: "<scope>", // Provide the scopes Example: "openid,AdobeID,read_organizations,firefly_api,ff_apis"
            },
            {
                autoRefresh: true, // In case false is passed then the api authProvider.authenticate() should be explicitly called before making any API call
            }
        );

        const config: CoreTypes.ClientConfig = {
            tokenProvider: authProvider,
            clientId: clientId,
        };

        const firefly: FireflyClient = new FireflyClient(config);

        const fireflyResponse: CoreTypes.ApiResponse<GenerateImagesResponse> = await firefly.generateImages({ prompt });
        console.log("Successfully generated the Firefly Image");
        for (let i = 0; i < (fireflyResponse.result.outputs?.length ?? 0); i++) {
            const result: GenerateImagesResponse = fireflyResponse.result;
            if (result.outputs === undefined) {
                console.log(`Image ${i + 1} failed to generate.`);
                continue;
            }
            console.log(`Image ${i + 1} URL: ${result.outputs[i]?.image?.url}`);
        }
    } catch (error) {
        console.error("Error occurred while generating:", error);
    }
}

generateImages("A brown puppy playing in the garden with a ball in the rain."); // update prompt to try different images
