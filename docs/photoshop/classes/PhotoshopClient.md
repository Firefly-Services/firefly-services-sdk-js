[Firefly Services: Photoshop SDK Reference](../index.md) / PhotoshopClient

# Class: PhotoshopClient

PhotoshopClient
Photoshop API client to use the Photoshop API services

## Hierarchy

- `BaseServiceClient`

  ↳ **`PhotoshopClient`**

## Table of contents

### Constructors

- [constructor](PhotoshopClient.md#constructor)

### Methods

- [applyAutoCrop](PhotoshopClient.md#applyautocrop)
- [applyDepthBlur](PhotoshopClient.md#applydepthblur)
- [convertToActionsJson](PhotoshopClient.md#converttoactionsjson)
- [createArtboard](PhotoshopClient.md#createartboard)
- [createDocument](PhotoshopClient.md#createdocument)
- [createMask](PhotoshopClient.md#createmask)
- [createRendition](PhotoshopClient.md#createrendition)
- [editTextLayer](PhotoshopClient.md#edittextlayer)
- [getDocumentManifest](PhotoshopClient.md#getdocumentmanifest)
- [modifyDocument](PhotoshopClient.md#modifydocument)
- [playPhotoshopActions](PhotoshopClient.md#playphotoshopactions)
- [playPhotoshopActionsJson](PhotoshopClient.md#playphotoshopactionsjson)
- [removeBackground](PhotoshopClient.md#removebackground)
- [replaceSmartObject](PhotoshopClient.md#replacesmartobject)

## Constructors

### constructor

• **new PhotoshopClient**(`config`): [`PhotoshopClient`](PhotoshopClient.md)

Constructor for PhotoshopClient

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `config` | [`ClientConfig`](../interfaces/CoreTypes.ClientConfig.md) \| [`ClientCredentials`](../interfaces/CoreTypes.ClientCredentials.md) | configuration for creating client. Using ClientCredentials enables automatic token refresh, which cannot be disabled. Instead To manage authentication manually, use ClientConfig. |

#### Returns

[`PhotoshopClient`](PhotoshopClient.md)

#### Overrides

BaseServiceClient.constructor

## Methods

### applyAutoCrop

▸ **applyAutoCrop**(`requestBody`, `options?`): `Promise`\<[`ApiResponse`](../modules/CoreTypes.md#apiresponse)\<[`PsJobResponse`](../index.md#psjobresponse)\>\>

Smart Crop API
Smart crop an image keeping the subject of interest in view.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestBody` | [`ApplyAutoCropRequest`](../index.md#applyautocroprequest) | The input image to apply product crop to. |
| `options?` | [`ApiOptions`](../interfaces/CoreTypes.ApiOptions.md) | Additional options to send any additional data or cancel the request |

#### Returns

`Promise`\<[`ApiResponse`](../modules/CoreTypes.md#apiresponse)\<[`PsJobResponse`](../index.md#psjobresponse)\>\>

PsJobResponse Job Status

**`Throws`**

___

### applyDepthBlur

▸ **applyDepthBlur**(`requestBody`, `options?`): `Promise`\<[`ApiResponse`](../modules/CoreTypes.md#apiresponse)\<[`PsJobResponse`](../index.md#psjobresponse)\>\>

Depth Blur API
Apply depth blur to an image input

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestBody` | [`ApplyDepthBlurRequest`](../index.md#applydepthblurrequest) | The input image to apply depth blur to. |
| `options?` | [`ApiOptions`](../interfaces/CoreTypes.ApiOptions.md) | Additional options to send any additional data or cancel the request |

#### Returns

`Promise`\<[`ApiResponse`](../modules/CoreTypes.md#apiresponse)\<[`PsJobResponse`](../index.md#psjobresponse)\>\>

PsJobResponse Job Status

**`Throws`**

___

### convertToActionsJson

▸ **convertToActionsJson**(`requestBody`, `options?`): `Promise`\<[`ApiResponse`](../modules/CoreTypes.md#apiresponse)\<[`PsJobResponse`](../index.md#psjobresponse)\>\>

Convert to Action JSON API
Convert .atn file to an actionJSON format

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestBody` | [`ConvertToActionsJsonRequest`](../index.md#converttoactionsjsonrequest) | The input atn file to convert to actionJSON |
| `options?` | [`ApiOptions`](../interfaces/CoreTypes.ApiOptions.md) | Additional options to send any additional data or cancel the request |

#### Returns

`Promise`\<[`ApiResponse`](../modules/CoreTypes.md#apiresponse)\<[`PsJobResponse`](../index.md#psjobresponse)\>\>

PsJobResponse Job Status

**`Throws`**

___

### createArtboard

▸ **createArtboard**(`requestBody`, `options?`): `Promise`\<[`ApiResponse`](../modules/CoreTypes.md#apiresponse)\<[`PsJobResponse`](../index.md#psjobresponse)\>\>

Create Arboards API
Create artboards from multiple PSD inputs

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestBody` | [`CreateArtboardRequest`](../index.md#createartboardrequest) | The input artboard to be created. |
| `options?` | [`ApiOptions`](../interfaces/CoreTypes.ApiOptions.md) | Additional options to send any additional data or cancel the request |

#### Returns

`Promise`\<[`ApiResponse`](../modules/CoreTypes.md#apiresponse)\<[`PsJobResponse`](../index.md#psjobresponse)\>\>

PsJobResponse Job Status

**`Throws`**

___

### createDocument

▸ **createDocument**(`requestBody`, `options?`): `Promise`\<[`ApiResponse`](../modules/CoreTypes.md#apiresponse)\<[`PsJobResponse`](../index.md#psjobresponse)\>\>

Create PSD API
Create new PSD with layers

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestBody` | [`CreateDocumentRequest`](../index.md#createdocumentrequest) | The input psd file to create a new psd from |
| `options?` | [`ApiOptions`](../interfaces/CoreTypes.ApiOptions.md) | Additional options to send any additional data or cancel the request |

#### Returns

`Promise`\<[`ApiResponse`](../modules/CoreTypes.md#apiresponse)\<[`PsJobResponse`](../index.md#psjobresponse)\>\>

PsJobResponse Job Status

**`Throws`**

___

### createMask

▸ **createMask**(`requestBody`, `options?`): `Promise`\<[`ApiResponse`](../modules/CoreTypes.md#apiresponse)\<[`SenseiJobApiResponse`](../index.md#senseijobapiresponse)\>\>

Create Mask API
Isolate a subject of interest in an image (people, objects, etc) and generate an image mask

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestBody` | [`CreateMaskRequest`](../index.md#createmaskrequest) | The input image and the mask parameters |
| `options?` | [`ApiOptions`](../interfaces/CoreTypes.ApiOptions.md) | Additional options to send any additional data or cancel the request |

#### Returns

`Promise`\<[`ApiResponse`](../modules/CoreTypes.md#apiresponse)\<[`SenseiJobApiResponse`](../index.md#senseijobapiresponse)\>\>

SenseiJobApiResponse Job status

**`Throws`**

___

### createRendition

▸ **createRendition**(`requestBody`, `options?`): `Promise`\<[`ApiResponse`](../modules/CoreTypes.md#apiresponse)\<[`PsJobResponse`](../index.md#psjobresponse)\>\>

Create Renditions API
Create flat image representations of a PSD in multiple formats

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestBody` | [`CreateRenditionRequest`](../index.md#createrenditionrequest) | The input psd file to create renditions from |
| `options?` | [`ApiOptions`](../interfaces/CoreTypes.ApiOptions.md) | Additional options to send any additional data or cancel the request |

#### Returns

`Promise`\<[`ApiResponse`](../modules/CoreTypes.md#apiresponse)\<[`PsJobResponse`](../index.md#psjobresponse)\>\>

PsJobResponse Job Status

**`Throws`**

___

### editTextLayer

▸ **editTextLayer**(`requestBody`, `options?`): `Promise`\<[`ApiResponse`](../modules/CoreTypes.md#apiresponse)\<[`PsJobResponse`](../index.md#psjobresponse)\>\>

Edit Text Layer API
Change the contents of a text layer in a PSD, eg for localization

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestBody` | [`EditTextLayerRequest`](../index.md#edittextlayerrequest) | The input text to be edited. |
| `options?` | [`ApiOptions`](../interfaces/CoreTypes.ApiOptions.md) | Additional options to send any additional data or cancel the request |

#### Returns

`Promise`\<[`ApiResponse`](../modules/CoreTypes.md#apiresponse)\<[`PsJobResponse`](../index.md#psjobresponse)\>\>

PsJobResponse Job Status

**`Throws`**

___

### getDocumentManifest

▸ **getDocumentManifest**(`requestBody`, `options?`): `Promise`\<[`ApiResponse`](../modules/CoreTypes.md#apiresponse)\<[`PsJobResponse`](../index.md#psjobresponse)\>\>

Extract Document Manifest API.
Extract metadata from PSD document, including general file and layer information.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestBody` | [`DocumentManifestRequest`](../index.md#documentmanifestrequest) | The input psd file to extract layer information from |
| `options?` | [`ApiOptions`](../interfaces/CoreTypes.ApiOptions.md) | Additional options to send any additional data or cancel the request |

#### Returns

`Promise`\<[`ApiResponse`](../modules/CoreTypes.md#apiresponse)\<[`PsJobResponse`](../index.md#psjobresponse)\>\>

PsJobResponse Job Status

**`Throws`**

___

### modifyDocument

▸ **modifyDocument**(`requestBody`, `options?`): `Promise`\<[`ApiResponse`](../modules/CoreTypes.md#apiresponse)\<[`PsJobResponse`](../index.md#psjobresponse)\>\>

Apply Photoshop Edits API
Apply basic layer edits (name, state, etc), add/edit adjustment, pixel, and shape layers.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestBody` | [`ModifyDocumentRequest`](../index.md#modifydocumentrequest) | The input psd file to apply edits to and generate renditions and/or save as a new psd |
| `options?` | [`ApiOptions`](../interfaces/CoreTypes.ApiOptions.md) | Additional options to send any additional data or cancel the request |

#### Returns

`Promise`\<[`ApiResponse`](../modules/CoreTypes.md#apiresponse)\<[`PsJobResponse`](../index.md#psjobresponse)\>\>

PsJobResponse Job Status

**`Throws`**

___

### playPhotoshopActions

▸ **playPhotoshopActions**(`requestBody`, `options?`): `Promise`\<[`ApiResponse`](../modules/CoreTypes.md#apiresponse)\<[`PsJobResponse`](../index.md#psjobresponse)\>\>

Run Photoshop Actions API
Executes Photoshop Action file against a PSD, JPEG, PNG, or TIFF

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestBody` | [`PlayPhotoshopActionsRequest`](../index.md#playphotoshopactionsrequest) | The input file to apply Photoshop Actions to and generate renditions and/or save as a new image |
| `options?` | [`ApiOptions`](../interfaces/CoreTypes.ApiOptions.md) | Additional options to send any additional data or cancel the request |

#### Returns

`Promise`\<[`ApiResponse`](../modules/CoreTypes.md#apiresponse)\<[`PsJobResponse`](../index.md#psjobresponse)\>\>

PsJobResponse Job Status

**`Throws`**

___

### playPhotoshopActionsJson

▸ **playPhotoshopActionsJson**(`requestBody`, `options?`): `Promise`\<[`ApiResponse`](../modules/CoreTypes.md#apiresponse)\<[`PsJobResponse`](../index.md#psjobresponse)\>\>

Run Action JSON API
Execute given Photoshop Action specified in actionJSON format.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestBody` | [`PlayPhotoshopActionsJsonRequest`](../index.md#playphotoshopactionsjsonrequest) | The input psd file to apply Photoshop actionJSON to and generate renditions and/or save as a new image |
| `options?` | [`ApiOptions`](../interfaces/CoreTypes.ApiOptions.md) | Additional options to send any additional data or cancel the request |

#### Returns

`Promise`\<[`ApiResponse`](../modules/CoreTypes.md#apiresponse)\<[`PsJobResponse`](../index.md#psjobresponse)\>\>

PsJobResponse Job Status

**`Throws`**

___

### removeBackground

▸ **removeBackground**(`requestBody`, `options?`): `Promise`\<[`ApiResponse`](../modules/CoreTypes.md#apiresponse)\<[`SenseiJobApiResponse`](../index.md#senseijobapiresponse)\>\>

Remove Background API
Isolate subject of interest in an image and remove background.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestBody` | [`RemoveBackgroundRequest`](../index.md#removebackgroundrequest) | The input image and the cutout mask parameters |
| `options?` | [`ApiOptions`](../interfaces/CoreTypes.ApiOptions.md) | Additional options to send any additional data or cancel the request |

#### Returns

`Promise`\<[`ApiResponse`](../modules/CoreTypes.md#apiresponse)\<[`SenseiJobApiResponse`](../index.md#senseijobapiresponse)\>\>

SenseiJobApiResponse Job status

**`Throws`**

___

### replaceSmartObject

▸ **replaceSmartObject**(`requestBody`, `options?`): `Promise`\<[`ApiResponse`](../modules/CoreTypes.md#apiresponse)\<[`PsJobResponse`](../index.md#psjobresponse)\>\>

Replace Smart Object API.
Replace Smart Object in a PSD.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestBody` | [`ReplaceSmartObjectRequest`](../index.md#replacesmartobjectrequest) | The input psd file to apply edits for replacing embedded smart object to and generate renditions and/or save as a new psd |
| `options?` | [`ApiOptions`](../interfaces/CoreTypes.ApiOptions.md) | Additional options to send any additional data or cancel the request |

#### Returns

`Promise`\<[`ApiResponse`](../modules/CoreTypes.md#apiresponse)\<[`PsJobResponse`](../index.md#psjobresponse)\>\>

PsJobResponse Job Status

**`Throws`**
