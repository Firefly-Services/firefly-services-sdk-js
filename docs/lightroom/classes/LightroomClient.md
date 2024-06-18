[Firefly Services: Lightroom SDK Reference](../index.md) / LightroomClient

# Class: LightroomClient

LightroomClient
Lightroom API client to use the Lightroom API services

## Hierarchy

- `BaseServiceClient`

  ↳ **`LightroomClient`**

## Table of contents

### Constructors

- [constructor](LightroomClient.md#constructor)

### Methods

- [applyAutoTone](LightroomClient.md#applyautotone)
- [applyEdits](LightroomClient.md#applyedits)
- [applyPreset](LightroomClient.md#applypreset)
- [applyPresetFromXmpContent](LightroomClient.md#applypresetfromxmpcontent)
- [autoStraightenImage](LightroomClient.md#autostraightenimage)

## Constructors

### constructor

• **new LightroomClient**(`config`): [`LightroomClient`](LightroomClient.md)

Constructor for LightroomClient

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `config` | [`ClientConfig`](../interfaces/CoreTypes.ClientConfig.md) \| [`ClientCredentials`](../interfaces/CoreTypes.ClientCredentials.md) | configuration for creating client. Using ClientCredentials enables automatic token refresh, which cannot be disabled. Instead To manage authentication manually, use ClientConfig. |

#### Returns

[`LightroomClient`](LightroomClient.md)

#### Overrides

BaseServiceClient.constructor

## Methods

### applyAutoTone

▸ **applyAutoTone**(`requestBody`, `options?`): `Promise`\<[`ApiResponse`](../modules/CoreTypes.md#apiresponse)\<[`LrJobApiResponse`](../index.md#lrjobapiresponse)\>\>

Auto Tone API
Automatically correct exposure, contrast, sharpness, saturation on an image

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestBody` | [`ApplyAutoToneRequest`](../index.md#applyautotonerequest) | Request body for applyAutoTone api |
| `options?` | [`ApiOptions`](../interfaces/CoreTypes.ApiOptions.md) | Additional options to send any additional data or cancel the request |

#### Returns

`Promise`\<[`ApiResponse`](../modules/CoreTypes.md#apiresponse)\<[`LrJobApiResponse`](../index.md#lrjobapiresponse)\>\>

LrJobApiResponse Job status

**`Throws`**

___

### applyEdits

▸ **applyEdits**(`requestBody`, `options?`): `Promise`\<[`ApiResponse`](../modules/CoreTypes.md#apiresponse)\<[`LrJobApiResponse`](../index.md#lrjobapiresponse)\>\>

Apply Lightroom Edits API
Apply one or more Lightroom edits ( exposure, contrast, sharpness, saturation ) to an image.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestBody` | [`ApplyEditsRequest`](../index.md#applyeditsrequest) | Request body for edit api |
| `options?` | [`ApiOptions`](../interfaces/CoreTypes.ApiOptions.md) | Additional options to send any additional data or cancel the request |

#### Returns

`Promise`\<[`ApiResponse`](../modules/CoreTypes.md#apiresponse)\<[`LrJobApiResponse`](../index.md#lrjobapiresponse)\>\>

LrJobApiResponse Job status

**`Throws`**

___

### applyPreset

▸ **applyPreset**(`requestBody`, `options?`): `Promise`\<[`ApiResponse`](../modules/CoreTypes.md#apiresponse)\<[`LrJobApiResponse`](../index.md#lrjobapiresponse)\>\>

Apply Lightroom Presets API
Apply one or more XMP Lightroom presets to the given image, by using the given preset XMP file(s).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestBody` | [`ApplyPresetRequest`](../index.md#applypresetrequest) | Request body for presets api |
| `options?` | [`ApiOptions`](../interfaces/CoreTypes.ApiOptions.md) | Additional options to send any additional data or cancel the request |

#### Returns

`Promise`\<[`ApiResponse`](../modules/CoreTypes.md#apiresponse)\<[`LrJobApiResponse`](../index.md#lrjobapiresponse)\>\>

LrJobApiResponse Job status

**`Throws`**

___

### applyPresetFromXmpContent

▸ **applyPresetFromXmpContent**(`requestBody`, `options?`): `Promise`\<[`ApiResponse`](../modules/CoreTypes.md#apiresponse)\<[`LrJobApiResponse`](../index.md#lrjobapiresponse)\>\>

Add XMP to Image API
Apply XMP based Lightroom preset to an image. XMP content is passed inline to the api.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestBody` | [`ApplyPresetFromXmpContentRequest`](../index.md#applypresetfromxmpcontentrequest) | Request body for xmp api |
| `options?` | [`ApiOptions`](../interfaces/CoreTypes.ApiOptions.md) | Additional options to send any additional data or cancel the request |

#### Returns

`Promise`\<[`ApiResponse`](../modules/CoreTypes.md#apiresponse)\<[`LrJobApiResponse`](../index.md#lrjobapiresponse)\>\>

LrJobApiResponse Job status

**`Throws`**

___

### autoStraightenImage

▸ **autoStraightenImage**(`requestBody`, `options?`): `Promise`\<[`ApiResponse`](../modules/CoreTypes.md#apiresponse)\<[`LrJobApiResponse`](../index.md#lrjobapiresponse)\>\>

Auto Straighten API
Auto Straighten an image. Applies the Auto Upright transformation on an image

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestBody` | [`AutoStraightenImageRequest`](../index.md#autostraightenimagerequest) | Request body for auto straighten api |
| `options?` | [`ApiOptions`](../interfaces/CoreTypes.ApiOptions.md) | Additional options to send any additional data or cancel the request |

#### Returns

`Promise`\<[`ApiResponse`](../modules/CoreTypes.md#apiresponse)\<[`LrJobApiResponse`](../index.md#lrjobapiresponse)\>\>

LrJobApiResponse Job status

**`Throws`**
