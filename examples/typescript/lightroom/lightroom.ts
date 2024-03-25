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

import { CoreTypes, FireflyClient, GenerateImagesResponse } from "@adobe/firefly-apis";
import { ApplyAutoToneRequest, ImageFormatType, LightroomClient, LrJobApiResponse, LrOutputDetails, StorageDetails, StorageType } from "@adobe/lightroom-apis";
import { ServerToServerTokenProvider } from "@adobe/firefly-services-common-apis";


/**
 * Function to generate an image and Auto tone the image and save the file to the given output post pre-signed URL.
 */
async function generateAndAutoToneImage(prompt: string) {
    try {
        const clientId: string = "<clientId>"; // Provide your client id
        const authProvider: CoreTypes.TokenProvider = new ServerToServerTokenProvider({
            clientId: clientId, // Provide your client id
            clientSecret: "<clientSecret>", // Provide your client secret
            scopes: "<scopes>" // Provide the scopes e.g. "openid,AdobeID,read_organizations,firefly_api,ff_apis"
        });

        const config: CoreTypes.ClientConfig = {
            tokenProvider: authProvider,
            clientId: clientId,
        };

        const lightroom: LightroomClient = new LightroomClient(config);
        const firefly: FireflyClient = new FireflyClient(config);

        // Replace `<prompt>` with the image description
        const fireflyResponse: CoreTypes.ApiResponse<GenerateImagesResponse> = await firefly.generateImages({prompt});
        if (!fireflyResponse.result.outputs) {
            throw new Error("Failed to generate the image" + fireflyResponse);
        }
        const firstImageUrl = fireflyResponse.result.outputs[0].image?.presignedUrl;
        
        console.log("Successfully generated the Firefly Image");

        // Use Lightroom applyAutoTone api to perform operation on the generated image.
        const lrInput: StorageDetails= {
            href: firstImageUrl ?? "",
            storage: StorageType.EXTERNAL
        };

        const lrOutput: LrOutputDetails = {
            href: "<lrOutputHref>", // Generate Pre-signed PUT URL to save the generated output file. 
            storage: StorageType.EXTERNAL, // example -> StorageType.DROPBOX or StorageType.EXTERNAL or StorageType.AZURE
            type: ImageFormatType.IMAGE_JPEG// example -> mageFormatType.IMAGE_JPEG, ImageFormatType.IMAGE_PNG
        };

        const lrRequestBody: ApplyAutoToneRequest = {
            inputs: lrInput,
            outputs: [lrOutput]
        }

        const applyAutoTone: CoreTypes.ApiResponse<LrJobApiResponse> = await lightroom.applyAutoTone(lrRequestBody);// Apply Auto Tone
        if (!applyAutoTone.result.outputs) {
            throw new Error("Failed to apply auto tone to the image" + applyAutoTone);
        }
        console.log("Apply auto tone to the image.\nStatus: ", applyAutoTone.result.outputs[0].status);
    } catch (error) {
        console.error("Error occurred while generating and auto toning the image: ", error);
    }
}

generateAndAutoToneImage("A brown puppy playing in the garden with a ball in the rain.");// update prompt to try different images