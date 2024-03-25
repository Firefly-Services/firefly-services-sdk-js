# Firefly Services SDK for Javascript

This repository hosts the Firefly Services SDK, offering developers a unified framework for accessing Firefly service APIs. The Firefly Services SDK for JavaScript is designed for Node.js and web environments.
It features libraries for various Firefly services, including services like Firefly, Photoshop, and Lightroom, and a common library for tasks like authentication. The SDK enhances developer productivity by facilitating seamless interaction with the product API services.

### Key features

1. Unified API Access: The SDK follow consistent design pattern across all Product APIs, making it easier for developers to understand and use them without having to learn the nuances of each API service.

2. TypeScript Support: Developed in TypeScript, the JavaScript SDK enables you to harness TypeScript's capabilities, including static type-checking and code autocomplete, for a more robust development experience.

3. Common Utility Package: This API package offers a range of utility APIs, including authentication APIs, to facilitate interaction with various product services.

4. Comprehensive Documentation:  SDK is accompanied by guides, API references documentation and code examples to help you get started quickly.

<!-- toc -->

-   [Getting Started](#getting-started)
    -   [Prerequisites](#prerequisites)
    -   [Adding Firefly Services SDK packages into project](#adding-firefly-services-sdk-packages-into-the-project)
    -   [Making your first API call](#making-your-first-api-call)
-   [Sample](#samples)
-   [Packages Details](#firefly-services-sdk-packages)

<!-- tocstop -->


## Getting Started

Be sure to check out the [documentation for Firefly Services](https://developer.adobe.com/firefly-services/docs/guides/) and watch [this video](https://youtu.be/wYSFOAN0Rqg). 

### Prerequisites

You'll need:

-   [Node v18.0](https://nodejs.org/en/download) or better
-   [NPM v9.0](https://www.npmjs.com/package/npm?activeTab=versions) or better
-   Any Text Editor (example, VSCode, SublimeText)
-   To get started, you'll need your credentials, such as Client ID, Client Secret, and the scopes to access to Firefly Services. Follow the guide to [access Developer Console](https://developer.adobe.com/firefly-services/docs/guides/get-started/#gaining-access-to-the-adobe-developer-console/).

### Adding Firefly Services SDK packages into the project
You can include SDK in your existing NodeJS project or a new project. Once you have a NodeJS project, use the commands below to add the required packages to your project.

1. Authentication is a mandatory step for using any of the Firefly Service APIs. The common package provides utility APIs, such as server-to-server authentication, to help retrieve the access token for interacting with Firefly Service APIs. To add this package, use the command below.
```sh
npm install @adobe/firefly-services-common-apis
```
        
2. For Firefly APIs, add the [Firefly package](packages/firefly/README.md).
```sh
npm install @adobe/firefly-apis
```
   
3. For Lightroom APIs, add the [Lightroom package](/packages/lightroom/README.md).  
```sh
npm install @adobe/lightroom-apis
```

4. For Photoshop APIs, add the [Photoshop package](packages/photoshop/README.md).
```sh
npm install @adobe/photoshop-apis
```

Alternatively, you can install all the packages with a single command like the one below.        
```sh
npm install @adobe/firefly-apis @adobe/photoshop-apis @adobe/lightroom-apis @adobe/firefly-services-common-apis
```


### Making your first API call

Each package, installed in the previous step, has a main client class: `FireflyClient`, `PhotoshopClient`, `LightroomClient`. Use these classes to invoke the corresponding service APIs.

The example below demonstrates two use cases:
1. Generating images from Firefly APIs and removing the backgrounds using Photoshop APIs.
2. Generating images from Firefly APIs and applying auto-tone using Lightroom APIs.

<b>Note</b>: Photoshop and Lightroom services in the sample below require Pre-Signed URLs. Guide to generate [Pre-Signed URL](https://developer.adobe.com/photoshop/photoshop-api-docs/general-workflow/).


Create a new file named `index.js` in your project with the below content.

```js
const { PhotoshopClient } = require("@adobe/photoshop-apis");
const { FireflyClient } = require("@adobe/firefly-apis");
const { LightroomClient } = require("@adobe/lightroom-apis");
const { ServerToServerTokenProvider } = require("@adobe/firefly-services-common-apis");

/**
 * Helper function that performs server-to-server authentication to fetch the access token.
 * @param {string} clientId 
 * @param {string} clientSecret 
 * @param {string} scopes 
 * @returns {ServerToServerTokenProvider}
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

// create auth config
const authProvider = getAuthProvider("<clientId>", "<clientSecret>", "<scopes>"); // Update the "<clientId>", "<clientSecret>", "<scopes>"
const config = {
    tokenProvider: authProvider,
    clientId: "<clientId>" // Update the "<clientId>"
};

/**
 * Generate an image and remove background
 */
async function generateImageAndRemoveBackground() {
    const photoshop = new PhotoshopClient(config);
    const firefly = new FireflyClient(config);

    const fireflyResponse = await firefly.generateImages({prompt: "<prompt>"}); // Update the "<prompt>"
    const firstImageUrl = fireflyResponse.result.outputs[0].image.presignedUrl;
    
    console.log("Successfully generated a Firefly Image");

    // Prepare for Photoshop operation
    const psInput = {
        href: firstImageUrl, 
        storage: "external"
    };

    const psOutput = {
        href: "<psOutputHref>", // Update with generated Pre-signed PUT URL for output file. 
        storage: "<psOutputStorage>" // example -> "dropbox" or "external" or "azure"
    };

    const psRequestBody = {
        input: psInput, 
        output: psOutput
    }

    const removeBg = await photoshop.removeBackground(psRequestBody); // Remove Background
    console.log("Successfully removed background");
}

/**
 * Generate an image and apply auto-tone
 */
async function generateAndAutoToneImage() {
    const lightroom = new LightroomClient(config);
    const firefly = new FireflyClient(config);

    const fireflyResponse = await firefly.generateImages({prompt: "<prompt>"}); // Update the "<prompt>"
    const firstImageUrl = fireflyResponse.result.outputs[0].image.presignedUrl;
    
    console.log("Successfully generated a Firefly Image");

    // Prepare for Lightroom operation
    const lrInput = {
        href: firstImageUrl,
        storage: "external"
    };

    const lrOutput = {
        href: "<lrOutputHref>", // Update with generated pre-signed PUT URL for output file. 
        storage: "<lrOutputStorage>", // example -> "dropbox" or "external" or "azure"
        type: "<imageType>" // example -> "image/jpeg" or "image/png"
    };

    const lrRequestBody = {
        inputs: lrInput,
        outputs: [lrOutput]
    }

    const applyAutoTone = await lightroom.applyAutoTone(lrRequestBody); // Apply Auto Tone
    console.log("Successfully applied auto tone to the Image");

}

generateImageAndRemoveBackground();
generateAndAutoToneImage();
```

## Build & Run
- Update the file with necessary information, such as client id, prompt, pre-signed URL for output file and more
- Run the command `node index.js`.
- Go to your respective output storage location to find the final image.

# Samples
[Sample Projects](./examples/) for reference.


# Firefly Services SDK Packages
| SDK Package Name | Product API Guides | SDK API reference | SDK Package Change Log |
| ------------ | ---------------- | ---------------- | ---------- |
| [@adobe/firefly-apis](https://www.npmjs.com/package/@adobe/firefly-apis) | [Firefly API](https://developer.adobe.com/firefly-services/docs/firefly-api/) | [API Reference](./docs/firefly/index.md) | [Firefly Change Log](./packages/firefly/CHANGELOG.md) |
| [@adobe/photoshop-apis](https://www.npmjs.com/package/@adobe/photoshop-apis) | [Photoshop API](https://developer.adobe.com/firefly-services/docs/photoshop/) | [API Reference](./docs/photoshop/index.md) | [Photoshop Change Log](./packages/photoshop/CHANGELOG.md) |
| [@adobe/lightroom-apis](https://www.npmjs.com/package/@adobe/lightroom-apis) | [Lightroom API](https://developer.adobe.com/firefly-services/docs/lightroom/) | [API Reference](./docs/lightroom/index.md) | [Lightroom Change Log](./packages/lightroom/CHANGELOG.md) |
| [@adobe/firefly-services-common-apis](https://www.npmjs.com/package/@adobe/firefly-services-common-apis) | [Authorization](https://developer.adobe.com/firefly-services/docs/photoshop/getting-started/) | [API Reference](./docs/cc-apis/common/index.md) | [Common Package Change Log](./packages/cc-apis/common/CHANGELOG.md) |

For more details on the packages in the SDK refer to
- [Firefly package](packages/firefly/README.md)
- [Photoshop package](packages/photoshop/README.md)
- [Lightroom package](/packages/lightroom/README.md)
