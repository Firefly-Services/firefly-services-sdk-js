# @adobe/firefly-apis

[![Version](https://img.shields.io/npm/v/@adobe/firefly-apis.svg)](https://npmjs.org/package/@adobe/firefly-apis)
[![Downloads/week](https://img.shields.io/npm/dw/@adobe/firefly-apis.svg)](https://npmjs.org/package/@adobe/firefly-apis)

## Description

This repository is home to the Firefly Services SDK for JavaScript, designed for Node.js and web environments. It features libraries for various Firefly services, including product libraries for accessing specific product services like **Firefly**, **Lightroom**, and **Photoshop**, and a **common** **library** for shared functionalities. 

**[@adobe/firefly-apis](https://www.npmjs.com/package/@adobe/firefly-apis)** specifically is the Firefly package for accessing the [Firefly product services](https://developer.adobe.com/firefly-services/docs/firefly-api/).

You can refer to [Firefly Services Homepage](https://github.com/Firefly-Services/firefly-services-sdk-js/blob/main/README.md) for getting started guides, details about adding these packages to your project and code samples.

- [Firefly package API Reference](https://github.com/Firefly-Services/firefly-services-sdk-js/blob/main/docs/firefly/index.md)
- [Firefly package Change Log](https://github.com/Firefly-Services/firefly-services-sdk-js/blob/main/packages/firefly/CHANGELOG.md)


Table below shows details on various API service endpoints and the corresponding SDK APIs

## SDK to API Reference Mapping
| Firefly API Endpoint | SDK API Name | Description  |
|:----------|:----------|:----------|
| [/v2/images/generate](https://developer.adobe.com/firefly-services/docs/firefly-api/guides/api/image_generation/) |[generateImages](https://github.com/Firefly-Services/firefly-services-sdk-js/blob/main/docs/firefly/classes/FireflyClient.md#generateimages) | Generate images based on a prompt with optional reference image to match style |
| [/v1/images/expand](https://developer.adobe.com/firefly-services/docs/firefly-api/guides/api/generative_expand/) |[expandImage](https://github.com/Firefly-Services/firefly-services-sdk-js/blob/main/docs/firefly/classes/FireflyClient.md#expandimage) |Expand an image to a new size/aspect ratio Note: This suppports only images with 3 Channels (RGB), not recommended to use PNGs.  |
| [/v1/images/fill](https://developer.adobe.com/firefly-services/docs/firefly-api/guides/api/generative_fill/) |[fillImage](https://github.com/Firefly-Services/firefly-services-sdk-js/blob/main/docs/firefly/classes/FireflyClient.md#fillimage) | Fill the masked area of an image with an optional prompt. |
| [/v2/storage/image](https://developer.adobe.com/firefly-services/docs/firefly-api/guides/api/upload_image/) |[upload](https://github.com/Firefly-Services/firefly-services-sdk-js/blob/main/docs/firefly/classes/FireflyClient.md#upload) | Upload any content, such as images, videos, or documents. This api provides an opaque ID for referencing the uploaded content in other firefly apis. |
