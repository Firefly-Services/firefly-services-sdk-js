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

const { FireflyClient } = require("@adobe/firefly-apis");
const { ServerToServerTokenProvider } = require("@adobe/firefly-services-common-apis");


/**
 * Function to generate an image and get pre-signed URL.
 */
async function generateImages(prompt) {
    try {
        const clientId = "<clientId>"; // Provide your client id
        const authProvider = new ServerToServerTokenProvider({
            clientId: clientId, // Provide your client id
            clientSecret: "<clientSecret>", // Provide your client secret
            scopes: "<scopes>" // Provide the scopes Example: "openid,AdobeID,read_organizations,firefly_api,ff_apis"
        });

        const config = {
            tokenProvider: authProvider,
            clientId: clientId, // Provide your client id
        };

        const firefly = new FireflyClient(config);

        // Replace `<prompt>` with the image description
        const fireflyResponse = await firefly.generateImages({prompt}); // Provide a prompt value
        console.log("Successfully generated the Firefly Image");
        for (let i = 0; i < fireflyResponse.result.outputs.length; i++) {
            console.log(`Image ${i + 1} URL: ${fireflyResponse.result.outputs[i].image.presignedUrl}`);
        }
    } catch (error) {
        console.error("Error occurred while generating:", error);
    }
}

generateImages("A brown puppy playing in the garden with a ball in the rain."); // update prompt to try different images
