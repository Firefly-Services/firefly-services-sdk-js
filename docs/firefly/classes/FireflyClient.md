[Firefly Services: Firefly SDK Reference](../index.md) / FireflyClient

# Class: FireflyClient

FireflyClient
Firefly API client to use the Firefly API services

## Hierarchy

- `BaseServiceClient`

  ↳ **`FireflyClient`**

## Table of contents

### Constructors

- [constructor](FireflyClient.md#constructor)

### Methods

- [expandImage](FireflyClient.md#expandimage)
- [fillImage](FireflyClient.md#fillimage)
- [generateImages](FireflyClient.md#generateimages)
- [upload](FireflyClient.md#upload)

## Constructors

### constructor

• **new FireflyClient**(`config`): [`FireflyClient`](FireflyClient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`ClientConfig`](../interfaces/CoreTypes.ClientConfig.md) |

#### Returns

[`FireflyClient`](FireflyClient.md)

#### Overrides

BaseServiceClient.constructor

## Methods

### expandImage

▸ **expandImage**(`requestBody`, `additionalParams?`, `options?`): `Promise`\<[`ApiResponse`](../modules/CoreTypes.md#apiresponse)\<[`ExpandImageResponse`](../index.md#expandimageresponse)\>\>

Expand Image API
Expand an image to a new size/aspect ratio

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestBody` | [`ExpandImageRequest`](../index.md#expandimagerequest) | image expansion request body. |
| `additionalParams` | `Object` | Additional parameters to send with the request |
| `additionalParams.xAcceptMimetype?` | [`AcceptMimeTypes`](../enums/AcceptMimeTypes.md) | Output image format |
| `options?` | [`ApiOptions`](../interfaces/CoreTypes.ApiOptions.md) | Additional options to send any additional data or cancel the request |

#### Returns

`Promise`\<[`ApiResponse`](../modules/CoreTypes.md#apiresponse)\<[`ExpandImageResponse`](../index.md#expandimageresponse)\>\>

ExpandImageResponse Expand Image Response

**`Throws`**

___

### fillImage

▸ **fillImage**(`requestBody`, `options?`): `Promise`\<[`ApiResponse`](../modules/CoreTypes.md#apiresponse)\<[`FillImageResponse`](../index.md#fillimageresponse)\>\>

Fill Image API
Fill the masked area of an image with an optional prompt.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestBody` | [`FillImageRequest`](../index.md#fillimagerequest) | image fill request body. |
| `options?` | [`ApiOptions`](../interfaces/CoreTypes.ApiOptions.md) | Additional options to send any additional data or cancel the request |

#### Returns

`Promise`\<[`ApiResponse`](../modules/CoreTypes.md#apiresponse)\<[`FillImageResponse`](../index.md#fillimageresponse)\>\>

FillImageResponse Fill Image Response

**`Throws`**

___

### generateImages

▸ **generateImages**(`requestBody`, `options?`): `Promise`\<[`ApiResponse`](../modules/CoreTypes.md#apiresponse)\<[`GenerateImagesResponse`](../index.md#generateimagesresponse)\>\>

Generate images API
Generate images based on a prompt with optional reference image to match style

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestBody` | [`GenerateImagesRequest`](../index.md#generateimagesrequest) | image generation request body. |
| `options?` | [`ApiOptions`](../interfaces/CoreTypes.ApiOptions.md) | Additional options to send any additional data or cancel the request |

#### Returns

`Promise`\<[`ApiResponse`](../modules/CoreTypes.md#apiresponse)\<[`GenerateImagesResponse`](../index.md#generateimagesresponse)\>\>

GenerateImagesResponse Generate images response

**`Throws`**

___

### upload

▸ **upload**(`requestBody`, `options?`): `Promise`\<[`ApiResponse`](../modules/CoreTypes.md#apiresponse)\<[`UploadResponse`](../index.md#uploadresponse)\>\>

Upload API
Upload any content, such as images, videos, or documents. This api provides an opaque ID for referencing the uploaded content in other firefly apis.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestBody` | `Blob` | Blob created using the image data of types PNG/JPEG/WEBP image, ensure that type is set while creating the blob. |
| `options?` | [`ApiOptions`](../interfaces/CoreTypes.ApiOptions.md) | Additional options to send any additional data or cancel the request |

#### Returns

`Promise`\<[`ApiResponse`](../modules/CoreTypes.md#apiresponse)\<[`UploadResponse`](../index.md#uploadresponse)\>\>

UploadResponse Storage Response

**`Throws`**
