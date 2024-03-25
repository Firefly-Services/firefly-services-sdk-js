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

import { PhotoshopClient, RemoveBackgroundRequest, SenseiOutputDetails } from "@adobe/photoshop-apis";
import { CoreTypes, FireflyClient, GenerateImagesResponse } from "@adobe/firefly-apis";
import { ServerToServerTokenProvider } from "@adobe/firefly-services-common-apis";
import { StorageDetails, StorageType } from "@adobe/lightroom-apis";


/**
 * Function to generate an image and remove image background and save the file to the given output post pre-signed URL.
 */
async function generateAndRemoveBackground(prompt: string) {
    try {
        const clientId: string = "<clientId>"; // Provide your client id
        const authProvider: CoreTypes.TokenProvider = new ServerToServerTokenProvider({
            clientId: clientId, // Provide your client id
            clientSecret: "<clientSecret>", // Provide your client secret
            scopes:  "<scopes>" // Provide the scopes e.g. "openid,AdobeID,read_organizations,firefly_api,ff_apis"
        });

        const config = {
            tokenProvider: authProvider,
            clientId: clientId,
        };
        

        // create the application clients
        const firefly: FireflyClient = new FireflyClient(config);
        const photoshop: PhotoshopClient = new PhotoshopClient(config);

        const fireflyResponse: CoreTypes.ApiResponse<GenerateImagesResponse> = await firefly.generateImages({prompt: prompt}); 
        if (!fireflyResponse.result.outputs) {
            throw new Error("Failed to generate the image" + fireflyResponse);
        }
        const firstImageUrl = fireflyResponse.result.outputs[0].image?.presignedUrl;
        
        console.log("Successfully generated the Firefly Image");

        // Use Photoshop autoCutout api to perform operation on the generated image.
        const psInput: StorageDetails = {
            href: firstImageUrl ?? "", 
            storage: StorageType.EXTERNAL
        };

        const psOutput: SenseiOutputDetails = {
            href: "<psOutputHref>", // Generate Pre-signed PUT URL to save the generated output file. 
            storage: StorageType.EXTERNAL // example: StorageType.DROPBOX or StorageType.EXTERNAL or StorageType.AZURE
        };

        const psRequestBody: RemoveBackgroundRequest = {
            input: psInput, 
            output: psOutput
        }

        const removeBg = await photoshop.removeBackground(psRequestBody); // Remove Background
        console.log("Removed image background.\nStatus: ", removeBg.result.status);
    } catch (error) {
        console.error("Error occurred while generating and removing the image background: ", error);
    }
}

generateAndRemoveBackground("A brown puppy playing in the garden."); // update prompt to try different images
