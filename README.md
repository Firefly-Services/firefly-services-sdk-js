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

### Authentication
Firefly Services SDK provides authentication via token provider. With v2, authentication is simplified with a `ClientCredentials` on each of the client classes. This can be directly passed at the time of Client Initialization.
#### Authentication example
1. Authentication via `TokenProvider`
```js
const serverToServerAuthDetails = {
    clientId: "<clientId>",
    clientSecret: "<clientSecret>",
    scopes: "<scopes>",
};

// create auth provider
// ServerToServerTokenProvider implements the TokenProvider interface that returns the access token.
const authProvider = new ServerToServerTokenProvider(serverToServerAuthDetails);
const config = {
    tokenProvider: authProvider,
    clientId: "<clientId>",
};

// create the product client
const firefly = new FireflyClient(config);
```

2. v2 Authentication via Credentials

```js
// Create client Credentials 
const clientCredentials = {
    clientId: "<clientId>",
    clientSecret: "<clientSecret>"
}

const firefly = await FireflyClient(clientCredentials);
```

### Making your first API call

Each package, installed in the previous step, has a main client class: `FireflyClient`, `PhotoshopClient`, `LightroomClient`. Use these classes to invoke the corresponding service APIs.

The example below demonstrates two use cases:
1. Generating images from Firefly APIs and removing the backgrounds using Photoshop APIs.
2. Generating images from Firefly APIs and applying auto-tone using Lightroom APIs.

<b>Note</b>: Photoshop and Lightroom services in the sample below require Pre-Signed URLs. Guide to generate [Pre-Signed URL](https://developer.adobe.com/firefly-services/docs/photoshop/general-workflow/).


Create a new file named `index.js` in your project with the below content.

```js
const { PhotoshopClient } = require("@adobe/photoshop-apis");
const { FireflyClient } = require("@adobe/firefly-apis");
const { LightroomClient, StorageType } = require("@adobe/lightroom-apis");
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
        scopes, // e.g. "openid,AdobeID,read_organizations,firefly_api,ff_apis"
    };
    const serverToServerAuthOptions = {
        autoRefresh: true,
    };
    return new ServerToServerTokenProvider(serverToServerAuthDetails, serverToServerAuthOptions);
}

// create authprovider
const authProvider = getAuthProvider("<clientId>", "<clientSecret>", "<scopes>"); // Manually update the "<clientId>", "<clientSecret>", "<scopes>"
const config = {
    tokenProvider: authProvider, // ServerToServerTokenProvider implements the TokenProvider interface that returns the access token.
    clientId: "<clientId>",
};

// create the product clients
const firefly = new FireflyClient(config);
const photoshop = new PhotoshopClient(config);
const lightroom = new LightroomClient(config);

/**
 * Function to generate an image and remove image background
 */
async function generateAndRemoveBackground() {
    const fireflyResponse = await firefly.generateImages({ prompt: "<Prompt>" }); // provide a `prompt` value
    const firstImageUrl = fireflyResponse.result.outputs[0].image.url;

    console.log("Successfully generated the Firefly Image");

    // Use Photoshop autoCutout api to perform operation on the generated image.
    const psInput = {
        href: firstImageUrl,
        storage: StorageType.EXTERNAL,
    };

    const psOutput = {
        href: "<psOutputHref>", // Generate Pre-signed PUT URL to save the generated output file.
        storage: "<psOutputStorage>", // example: StorageType.DROPBOX or StorageType.EXTERNAL or StorageType.AZURE
    };

    const psRequestBody = {
        input: psInput,
        output: psOutput,
    };

    const removeBg = await photoshop.removeBackground(psRequestBody); // Remove Background
    console.log("Removed image background.\nStatus: ", removeBg.result.status);
}

/**
 * Function to generate an image and Auto tone the image
 */
async function generateAndAutoToneImage() {
    // Replace `<prompt>` with the image description
    const fireflyResponse = await firefly.generateImages({ prompt: "<prompt>" }); // Provide a prompt value
    const firstImageUrl = fireflyResponse.result.outputs[0].image.url;

    console.log("Successfully generated the Firefly Image");

    // Use Lightroom applyAutoTone api to perform operation on the generated image.
    const lrInput = {
        href: firstImageUrl,
        storage: StorageType.EXTERNAL,
    };

    const lrOutput = {
        href: "<lrOutputHref>", // Generate Pre-signed PUT URL to save the generated output file.
        storage: "<lrOutputStorage>", // example: StorageType.DROPBOX or StorageType.EXTERNAL or StorageType.AZURE
        type: "<imageType>", // example -> ImageFormatType.IMAGE_JPEG, ImageFormatType.IMAGE_PNG
    };

    const lrRequestBody = {
        inputs: lrInput,
        outputs: [lrOutput],
    };

    const applyAutoTone = await lightroom.applyAutoTone(lrRequestBody); // Apply Auto Tone
    console.log("Apply auto tone to the image.\nStatus: ", applyAutoTone.result.outputs[0].status);
}

generateAndRemoveBackground();
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
