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
- [generateObjectComposite](FireflyClient.md#generateobjectcomposite)
- [generateSimilarImages](FireflyClient.md#generatesimilarimages)
- [generateVideoV3](FireflyClient.md#generatevideov3)
- [upload](FireflyClient.md#upload)

## Constructors

### constructor

• **new FireflyClient**(`config`): [`FireflyClient`](FireflyClient.md)

Constructor for FireflyClient

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `config` | [`ClientConfig`](../interfaces/CoreTypes.ClientConfig.md) \| [`ClientCredentials`](../interfaces/CoreTypes.ClientCredentials.md) | configuration for creating client. Using ClientCredentials enables automatic token refresh, which cannot be disabled. Instead To manage authentication manually, use ClientConfig. |

#### Returns

[`FireflyClient`](FireflyClient.md)

#### Overrides

BaseServiceClient.constructor

## Methods

### expandImage

▸ **expandImage**(`requestBody`, `options?`): `Promise`\<[`ApiResponse`](../modules/CoreTypes.md#apiresponse)\<[`ExpandImageResponse`](../index.md#expandimageresponse)\>\>

Expand Image API
Change the aspect ratio or size of an image and expand its contents with or without a text prompt.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestBody` | [`ExpandImageRequest`](../index.md#expandimagerequest) | image expansion request body. |
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

Generate Images API
Generate images based on a prompt with optional reference image to match style and structure.

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

### generateObjectComposite

▸ **generateObjectComposite**(`requestBody`, `options?`): `Promise`\<[`ApiResponse`](../modules/CoreTypes.md#apiresponse)\<[`GenerateObjectCompositeResponse`](../index.md#generateobjectcompositeresponse)\>\>

Generate Object Composite API
Upload an image(with or without mask), such as a product photo, and utilize a text prompt to generate a seamlessly composited scene featuring the product.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestBody` | [`GenerateObjectCompositeRequest`](../index.md#generateobjectcompositerequest) | Object composite generation request body. |
| `options?` | [`ApiOptions`](../interfaces/CoreTypes.ApiOptions.md) | Additional options to send any additional data or cancel the request |

#### Returns

`Promise`\<[`ApiResponse`](../modules/CoreTypes.md#apiresponse)\<[`GenerateObjectCompositeResponse`](../index.md#generateobjectcompositeresponse)\>\>

GenerateObjectCompositeResponse Generate Object Composite Response

**`Throws`**

___

### generateSimilarImages

▸ **generateSimilarImages**(`requestBody`, `options?`): `Promise`\<[`ApiResponse`](../modules/CoreTypes.md#apiresponse)\<[`GenerateSimilarImagesResponse`](../index.md#generatesimilarimagesresponse)\>\>

Generate Similar Images API
Generate similar Images based on the reference image.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestBody` | [`GenerateSimilarImagesRequest`](../index.md#generatesimilarimagesrequest) | Generate similar images request body |
| `options?` | [`ApiOptions`](../interfaces/CoreTypes.ApiOptions.md) | Additional options to send any additional data or cancel the request |

#### Returns

`Promise`\<[`ApiResponse`](../modules/CoreTypes.md#apiresponse)\<[`GenerateSimilarImagesResponse`](../index.md#generatesimilarimagesresponse)\>\>

GenerateSimilarImagesResponse Generate similar images response

**`Throws`**

___

### generateVideoV3

▸ **generateVideoV3**(`requestBody`, `additionalParams?`, `options?`): `Promise`\<[`ApiResponse`](../modules/CoreTypes.md#apiresponse)\<\{ `cancelUrl`: `string` ; `jobId`: `string` ; `statusUrl`: `string`  }\>\>

Generate video from text
Generate a video using a text prompt.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestBody` | [`GenerateVideoRequestV3`](../index.md#generatevideorequestv3) | The request body for the video generation. Any of these listed properties can be individually omitted/empty, but some kind of parameter data is required. |
| `additionalParams` | `Object` | Additional parameters to send with the request |
| `additionalParams.xModelVersion` | ``"video1_standard"`` | Specify the Firefly model version to use for the video generation. |
| `options?` | [`ApiOptions`](../interfaces/CoreTypes.ApiOptions.md) | Additional options to send any additional data or cancel the request |

#### Returns

`Promise`\<[`ApiResponse`](../modules/CoreTypes.md#apiresponse)\<\{ `cancelUrl`: `string` ; `jobId`: `string` ; `statusUrl`: `string`  }\>\>

any Successful Response

**`Throws`**

___

### upload

▸ **upload**(`requestBody`, `options?`): `Promise`\<[`ApiResponse`](../modules/CoreTypes.md#apiresponse)\<[`UploadResponse`](../index.md#uploadresponse)\>\>

Upload API

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestBody` | `Blob` | Upload source image or mask image of types PNG/JPEG/WEBP for Image-to-Image operations, such as fill, expand. This api returns an identifier that is used to refer to uploaded content. |
| `options?` | [`ApiOptions`](../interfaces/CoreTypes.ApiOptions.md) | Additional options to send any additional data or cancel the request |

#### Returns

`Promise`\<[`ApiResponse`](../modules/CoreTypes.md#apiresponse)\<[`UploadResponse`](../index.md#uploadresponse)\>\>

UploadResponse Successful Response

**`Throws`**
