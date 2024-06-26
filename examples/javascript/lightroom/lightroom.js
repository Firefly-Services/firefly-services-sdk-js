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

const { FireflyClient } = require("@adobe/firefly-apis");
const { LightroomClient, StorageType, ImageFormatType } = require("@adobe/lightroom-apis");
const { ServerToServerTokenProvider } = require("@adobe/firefly-services-common-apis");


/**
 * Function to generate an image and Auto tone the image and save the file to the given output post pre-signed URL.
 */
async function generateAndAutoToneImage(prompt) {
    try {
        const clientId = "<clientId>"; // Provide your client id
        const authProvider = new ServerToServerTokenProvider({
            clientId: clientId, // Provide your client id
            clientSecret: "<clientSecret>", // Provide your client secret
            scopes: "<scopes>" // Provide the scopes Example: "openid,AdobeID,read_organizations,firefly_api,ff_apis"
        },
        {
            autoRefresh: true // In case false is passed then the api authProvider.authenticate() should be explicitly called before making any API call
        }
    );

        const config = {
            tokenProvider: authProvider,
            clientId: clientId, // Provide your client id
        };

        const lightroom = new LightroomClient(config);
        const firefly = new FireflyClient(config);

        // Replace `<prompt>` with the image description
        const fireflyResponse = await firefly.generateImages({prompt});
        const firstImageUrl = fireflyResponse.result.outputs[0].image.url;
        
        console.log("Successfully generated the Firefly Image");

        // Use Lightroom applyAutoTone api to perform operation on the generated image.
        const lrInput = {
            href: firstImageUrl,
            storage: StorageType.EXTERNAL
        };

        const lrOutput = {
            href: "<lrOutputHref>", // Generate Pre-signed PUT URL to save the generated output file. 
            storage: "<lrOutputStorage>", // example: StorageType.DROPBOX or StorageType.EXTERNAL or StorageType.AZURE
            type: ImageFormatType.IMAGE_PNG// ImageFormatType.IMAGE_JPEG
        };

        const lrRequestBody = {
            inputs: lrInput,
            outputs: [lrOutput]
        }

        const applyAutoTone = await lightroom.applyAutoTone(lrRequestBody);// Apply Auto Tone
        console.log("Apply auto tone to the image.\nStatus: ", applyAutoTone.result.outputs[0].status);
    } catch (error) {
        console.error("Error occurred while generating and auto toning the image: ", error);
    }
}

generateAndAutoToneImage("A brown puppy playing in the garden with a ball in the rain."); //update prompt to try different images