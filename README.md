# Firefly Services SDK for Javascript

This repository hosts the Firefly Services SDK, offering developers a unified framework for accessing Firefly service APIs. The Firefly Services SDK for JavaScript is designed for Node.js and web environments.
It features libraries for various Firefly services, including product libraries for accessing  product specific services like Firefly, Photoshop, Lightroom, and also a common library for tasks like Authentication.
The SDK enhances developer productivity by facilitating seamless interaction with the product API services.

### Key features

1. Unified API Access: The SDK follow consistent design pattern across all Product APIs, making it easier for developers to understand and use them without having to learn the nuances of each API service.

2. TypeScript Support: Developed in TypeScript, the JS SDK enables developers to leverage TypeScript's capabilities, such as static type-checking and code autocomplete.

3. Common Utility Package: This API package offers a range of utility APIs, including authentication APIs, to facilitate interaction with various product services.

4.  Comprehensive Documentation:  SDK is accompanied by guides, API references documentation and code examples to help you get started quickly.

<!-- toc -->

-   [Getting Started](#getting-started)
    -   [Prerequisites](#prerequisites)
    -   [Adding Firefly Services SDK packages into project](#adding-firefly-services-sdk-packages-into-the-project)
    -   [Making your first API call using SDK](#using-firefly-services-sdk)
-   [Sample](#samples)
-   [Packages Details](#firefly-services-sdk-packages)

<!-- tocstop -->


## Getting Started

Be sure to check out the [documentation for Firefly Services]( https://developer.adobe.com/firefly-services/docs/guides/). To quickly get started on Firefly Services , follow these steps, or watch [this video](https://youtu.be/wYSFOAN0Rqg).

### Prerequisites

You'll need:

-   Node 18 or better
-   NPM 9 or better
-   Any Text Editor ( eg: VSCode, SublimeText )
-   To get started, you'll need your credentials(i.e. Client ID, Client Secret) from the [Developer Console](https://developer.adobe.com/firefly-services/docs/guides/get-started/#gaining-access-to-the-adobe-developer-console/) and the scopes to access to Firefly Services.

## Adding Firefly Services SDK packages into the project
The SDK can be included in your existing NodeJS project or a new project. Following are the steps for using the SDK in a new NodeJS project.

-   Create a new Node.js project.
-   Inside of the project, use commands below to add the required packages. 
        
    1. Authentication is a mandatory step for using any of the Firefly Service APIs. The common package provides utility APIs, such as server-to-server authentication, to help retrieve the access token for interacting with Firefly Service APIs. To add this package use the below command.

        ```sh
        npm install @adobe/firefly-services-common-apis
        ```
        
    2. To add the [Firefly package](packages/firefly/README.md) into the project use the below command.

        ```sh
        npm install @adobe/firefly-apis
        ```
    3. To add the [Lightroom package](/packages/lightroom/README.md) into the project use the below command.
        ```sh
        npm install @adobe/lightroom-apis
        ```
    4. To add the [Photoshop package](packages/photoshop/README.md) into the project use the below command.
        ```sh
        npm install @adobe/photoshop-apis
        ```

    Alternatively, you can install all the packages with a single command like below
        
    ```sh
    npm install @adobe/firefly-apis @adobe/photoshop-apis @adobe/lightroom-apis @adobe/firefly-services-common-apis
    ```


## Using Firefly Services SDK

### Example of using the Firefly, Photoshop and Lightroom packages
Firefly Services SDK has multiple packages for each product services like Firefly, Photoshop, Lightroom etc. Each package will have a main client class(`FireflyClient`, `PhotoshopClient`, `LightroomClient` ...) for invoking the corresponding service APIs.

Below example demonstrates two use cases 
1. Generating images from Firefly APIs and remove background using Photoshop APIs.
2. Generating images from Firefly APIs and apply auto tone using Lightroom APIs.

Create a new file named `index.js` with the below content.

<b>Note</b>: Photoshop and Lightroom services used in the below sample requires Pre-Signed URLs. Guide to generate [Pre-Signed URL](https://developer.adobe.com/photoshop/photoshop-api-docs/general-workflow/).

```js
const { PhotoshopClient } = require("@adobe/photoshop-apis");
const { FireflyClient } = require("@adobe/firefly-apis");
const { LightroomClient } = require("@adobe/lightroom-apis");
const { ServerToServerTokenProvider } = require("@adobe/firefly-services-common-apis");

/**
 * Helper function that performs Server to Server Authentication to fetch the Access token for given Client Credentials.
 * @param {string} clientId 
 * @param {string} clientSecret 
 * @param {string} scopes 
 * @returns {ServerToServerTokenProvider} instance of ServerToServerTokenProvider which can be passed in ClientConfig to get the access token.
 */
function getAuthProvider(clientId, clientSecret, scopes) {
    const serverToServerAuthDetails = {
        clientId,
        clientSecret,
        scopes ///configple:  "openid,AdobeID,read_organizations,firefly_api,ff_apis"
    };
    const serverToServerAuthOptions = {
        autoRefresh: true
    }
    return new ServerToServerTokenProvider(serverToServerAuthDetails, serverToServerAuthOptions);
}

// create authprovider
const authProvider = getAuthProvider("<clientId>", "<clientSecret>", "<scopes>"); // Manually update the "<clientId>", "<clientSecret>", "<scopes>"
const config = {
    tokenProvider: authProvider, // ServerToServerTokenProvider implements the TokenProvider interface that returns the access token.
    clientId: "<clientId>"
};

/**
 * Function to generate an image and remove image background
 */
async function generateAndRemoveBackground() {
    // create the application clients
    const photoshop = new PhotoshopClient(config);
    const firefly = new FireflyClient(config);

    const fireflyResponse = await firefly.generateImages({prompt: "<Prompt>"}); // provide a `prompt` value
    const firstImageUrl = fireflyResponse.result.outputs[0].image.presignedUrl;
    
    console.log("Successfully generated the Firefly Image");

    // Use Photoshop autoCutout api to perform operation on the generated image.
    const psInput = {
        href: firstImageUrl, 
        storage: "external"
    };

    const psOutput = {
        href: "<psOutputHref>", // Generate Pre-signed PUT URL to save the generated output file. 
        storage: "<psOutputStorage>" // example -> "dropbox" or "external" or "azure"
    };

    const psRequestBody = {
        input: psInput, 
        output: psOutput
    }

    const removeBg = await photoshop.removeBackground(psRequestBody); // Remove Background
    console.log("Successfully removed background Image");
}

/**
 * Function to generate an image and Auto tone the image
 */
async function generateAndAutoToneImage() {
    const lightroom = new LightroomClient(config);
    const firefly = new FireflyClient(config);

    // Replace `<prompt>` with the image description
    const fireflyResponse = await firefly.generateImages({prompt: "<prompt>"}); // Provide a prompt value
    const firstImageUrl = fireflyResponse.result.outputs[0].image.presignedUrl;
    
    console.log("Successfully generated the Firefly Image");

    // Use Lightroom applyAutoTone api to perform operation on the generated image.
    const lrInput = {
        href: firstImageUrl,
        storage: "external"
    };

    const lrOutput = {
        href: "<lrOutputHref>", // Generate Pre-signed PUT URL to save the generated output file. 
        storage: "<lrOutputStorage>", // example -> "dropbox" or "external" or "azure"
        type: "<imageType>"// example -> "image/jpeg" or "image/png"
    };

    const lrRequestBody = {
        inputs: lrInput,
        outputs: [lrOutput]
    }

    const applyAutoTone = await lightroom.applyAutoTone(lrRequestBody);// Apply Auto Tone
    console.log("Successfully applied auto tone to the Image");

}

generateAndRemoveBackground();
generateAndAutoToneImage();
```

## Build & Run
- Run the command `node index.js`.
- Go to your respective output storage location and notice that the original image has been edited by removing it's background from Photoshop.
- Lightroom added auto tone to the original image.

## Samples
[Sample Projects](./examples/) for reference.


# Firefly Services SDK Packages
| SDK Package Name | Product API Guides | SDK API reference | SDK Package Change Log |
| ------------ | ---------------- | ---------------- | ---------- |
| [@adobe/firefly-apis](https://www.npmjs.com/package/@adobe/firefly-apis) | [Firefly API](https://developer.adobe.com/firefly-services/docs/firefly-api/) | [API Reference](./docs/firefly/index.md) | [Firefly Change Log](./packages/firefly/CHANGELOG.md) |
| [@adobe/photoshop-apis](https://www.npmjs.com/package/@adobe/photoshop-apis) | [Photoshop API](https://developer.adobe.com/firefly-services/docs/photoshop/) | [API Reference](./docs/photoshop/index.md) | [Photoshop Change Log](./packages/photoshop/CHANGELOG.md) |
| [@adobe/lightroom-apis](https://www.npmjs.com/package/@adobe/lightroom-apis) | [Lightroom API](https://developer.adobe.com/firefly-services/docs/lightroom/) | [API Reference](./docs/lightroom/index.md) | [Lightroom Change Log](./packages/lightroom/CHANGELOG.md) |
| [@adobe/firefly-services-common-apis](https://www.npmjs.com/package/@adobe/firefly-services-common-apis) | [Authorization](https://developer.adobe.com/firefly-services/docs/photoshop/getting-started/) | [API Reference](./docs/cc-apis/common/index.md) | [Common Package Change Log](./packages/cc-apis/common/CHANGELOG.md) |

For more details on the packages in the SDK refer
- [Firefly package](packages/firefly/README.md)
- [Photoshop package](packages/photoshop/README.md)
- [Lightroom package](/packages/lightroom/README.md)
