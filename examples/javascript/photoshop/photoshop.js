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

const { PhotoshopClient, StorageType } = require("@adobe/photoshop-apis");
const { FireflyClient } = require("@adobe/firefly-apis");
const { ServerToServerTokenProvider } = require("@adobe/firefly-services-common-apis");


/**
 * Function to generate an image and remove image background and save the file to the given output post pre-signed URL.
 */
async function generateAndRemoveBackground(prompt) {
    try {
        const clientId = "<clientId>"; // Provide your client id
        const authProvider = new ServerToServerTokenProvider({
            clientId: clientId, // Provide your client id
            clientSecret: "<clientSecret>", // Provide your client secret
            scopes:  "<scopes>" // Provide the scopes Example: "openid,AdobeID,read_organizations,firefly_api,ff_apis"
        });

        const config = {
            tokenProvider: authProvider,
            clientId: clientId, // Provide your client id
        };
        

        // create the application clients
        const firefly = new FireflyClient(config);
        const photoshop = new PhotoshopClient(config);

        const fireflyResponse = await firefly.generateImages({prompt: prompt}); 
        const firstImageUrl = fireflyResponse.result.outputs[0].image.presignedUrl;
        
        console.log("Successfully generated the Firefly Image");

        // Use Photoshop autoCutout api to perform operation on the generated image.
        const psInput = {
            href: firstImageUrl, 
            storage: StorageType.EXTERNAL
        };

        const psOutput = {
            href: "<psOutputHref>", // Generate Pre-signed PUT URL to save the generated output file. 
            storage: "<psOutputStorage>" // example: StorageType.DROPBOX or StorageType.EXTERNAL or StorageType.AZURE
        };

        const psRequestBody = {
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
