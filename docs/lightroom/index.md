Firefly Services: Lightroom SDK Reference

# Firefly Services: Lightroom SDK Reference

## Table of contents

### Namespaces

- [CoreTypes](modules/CoreTypes.md)

### Enumerations

- [ImageFormatType](enums/ImageFormatType.md)
- [JobStatus](enums/JobStatus.md)
- [StorageType](enums/StorageType.md)
- [UprightMode](enums/UprightMode.md)
- [WhiteBalance](enums/WhiteBalance.md)

### Classes

- [LightroomClient](classes/LightroomClient.md)

### Type Aliases

- [ApplyAutoToneRequest](index.md#applyautotonerequest)
- [ApplyEditsRequest](index.md#applyeditsrequest)
- [ApplyPresetFromXmpContentRequest](index.md#applypresetfromxmpcontentrequest)
- [ApplyPresetInput](index.md#applypresetinput)
- [ApplyPresetRequest](index.md#applypresetrequest)
- [ApplyPresetXmpInput](index.md#applypresetxmpinput)
- [ApplyPresetXmpOptions](index.md#applypresetxmpoptions)
- [AutoStraightOptions](index.md#autostraightoptions)
- [AutoStraightenImageRequest](index.md#autostraightenimagerequest)
- [EditOptions](index.md#editoptions)
- [ErrorDetails](index.md#errordetails)
- [InputValidationError](index.md#inputvalidationerror)
- [InputValidationErrorDetails](index.md#inputvalidationerrordetails)
- [JobError](index.md#joberror)
- [JobOutputDetails](index.md#joboutputdetails)
- [JobStatusLink](index.md#jobstatuslink)
- [JobStatusLinkResponse](index.md#jobstatuslinkresponse)
- [Links](index.md#links)
- [LrJobApiResponse](index.md#lrjobapiresponse)
- [LrOutputDetails](index.md#lroutputdetails)
- [SelfLink](index.md#selflink)
- [StorageDetails](index.md#storagedetails)
- [TrialLimitExceededError](index.md#triallimitexceedederror)

## Type Aliases

### ApplyAutoToneRequest

Ƭ **ApplyAutoToneRequest**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `inputs` | [`StorageDetails`](index.md#storagedetails) | - |
| `outputs` | [`LrOutputDetails`](index.md#lroutputdetails)[] | Only a single output is supported currently |

___

### ApplyEditsRequest

Ƭ **ApplyEditsRequest**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `inputs` | \{ `source`: [`StorageDetails`](index.md#storagedetails)  } | A hash describing an input image to edit. The input object will be one of 'external', 'adobe', 'azure' or 'dropbox' |
| `inputs.source` | [`StorageDetails`](index.md#storagedetails) | - |
| `options` | [`EditOptions`](index.md#editoptions) | - |
| `outputs` | [`LrOutputDetails`](index.md#lroutputdetails)[] | Edit photo output paramaters |

___

### ApplyPresetFromXmpContentRequest

Ƭ **ApplyPresetFromXmpContentRequest**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `inputs` | [`ApplyPresetXmpInput`](index.md#applypresetxmpinput) | - |
| `options` | [`ApplyPresetXmpOptions`](index.md#applypresetxmpoptions) | - |
| `outputs` | [`LrOutputDetails`](index.md#lroutputdetails)[] | Apply preset xmp output paramaters |

___

### ApplyPresetInput

Ƭ **ApplyPresetInput**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `presets` | [`StorageDetails`](index.md#storagedetails)[] | An array describing the list of presets to apply. The preset objects will either be one of 'external', 'adobe', 'azure' or 'dropbox' |
| `source` | [`StorageDetails`](index.md#storagedetails) | - |

___

### ApplyPresetRequest

Ƭ **ApplyPresetRequest**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `inputs` | [`ApplyPresetInput`](index.md#applypresetinput) | - |
| `outputs` | [`LrOutputDetails`](index.md#lroutputdetails)[] | Apply preset output paramaters |

___

### ApplyPresetXmpInput

Ƭ **ApplyPresetXmpInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `source` | [`StorageDetails`](index.md#storagedetails) |

___

### ApplyPresetXmpOptions

Ƭ **ApplyPresetXmpOptions**: `Object`

Options for applying a preset xmp to an image

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `orientation?` | `number` | The combination of flip and/or rotate to apply |
| `xmp` | `string` | The XMP to apply |

___

### AutoStraightOptions

Ƭ **AutoStraightOptions**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `constrainCrop?` | `boolean` | If the straightened image should be constrain cropped, to remove all blank edges around an image. |
| `uprightMode` | [`UprightMode`](enums/UprightMode.md) | - |

___

### AutoStraightenImageRequest

Ƭ **AutoStraightenImageRequest**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `inputs` | [`StorageDetails`](index.md#storagedetails) | - |
| `options?` | [`AutoStraightOptions`](index.md#autostraightoptions) | - |
| `outputs` | [`LrOutputDetails`](index.md#lroutputdetails)[] | Only a single output is supported currently |

___

### EditOptions

Ƭ **EditOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Blacks?` | `number` |
| `Clarity?` | `number` |
| `ColorNoiseReduction?` | `number` |
| `Contrast?` | `number` |
| `Dehaze?` | `number` |
| `Exposure?` | `number` |
| `Highlights?` | `number` |
| `NoiseReduction?` | `number` |
| `Saturation?` | `number` |
| `Shadows?` | `number` |
| `SharpenDetail?` | `number` |
| `SharpenEdgeMasking?` | `number` |
| `SharpenRadius?` | `number` |
| `Sharpness?` | `number` |
| `Texture?` | `number` |
| `Vibrance?` | `number` |
| `VignetteAmount?` | `number` |
| `WhiteBalance?` | [`WhiteBalance`](enums/WhiteBalance.md) |
| `Whites?` | `number` |

___

### ErrorDetails

Ƭ **ErrorDetails**: `Object`

Details of the error returned

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `name?` | `string` | param name |
| `reason?` | `string` | error |

___

### InputValidationError

Ƭ **InputValidationError**: `Object`

any errors reported requested output

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `code?` | `string` | error code |
| `details?` | [`InputValidationErrorDetails`](index.md#inputvalidationerrordetails)[] | Details of the error returned |
| `title?` | `string` | error description |
| `type?` | `string` | error type |

___

### InputValidationErrorDetails

Ƭ **InputValidationErrorDetails**: `Object`

Details of the input validation error returned

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `allowedValues?` | `string` | Name of the input parameter |
| `reason?` | `string` | Reason for the error |

___

### JobError

Ƭ **JobError**: `Object`

any errors reported requested output

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `code?` | `string` | error code |
| `details?` | [`ErrorDetails`](index.md#errordetails)[] | Details of the error returned |
| `title?` | `string` | error description |
| `type?` | `string` | error type |

___

### JobOutputDetails

Ƭ **JobOutputDetails**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `_links?` | [`Links`](index.md#links) | - |
| `details?` | `string` | Description of the exact error that is reported by the requested job. Will appear in the response only if there is an error. |
| `input?` | `string` | the original input file path |
| `status?` | [`JobStatus`](enums/JobStatus.md) | - |

___

### JobStatusLink

Ƭ **JobStatusLink**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `self?` | [`SelfLink`](index.md#selflink) |

___

### JobStatusLinkResponse

Ƭ **JobStatusLinkResponse**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `_links?` | [`JobStatusLink`](index.md#jobstatuslink) |

___

### Links

Ƭ **Links**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `self?` | [`StorageDetails`](index.md#storagedetails) |

___

### LrJobApiResponse

Ƭ **LrJobApiResponse**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `_links?` | [`JobStatusLink`](index.md#jobstatuslink) | - |
| `created?` | `string` | Created timestamp of the job (YYYY-DD-MMThh:mm:ss.mmmmmZ) (epoch?) |
| `jobId?` | `string` | the job's id requested (tbd. different case from Sensei?) |
| `modified?` | `string` | Modified timestamp of the job (YYYY-DD-MMThh:mm:ss.mmmmmZ) (epoch?) |
| `outputs?` | [`JobOutputDetails`](index.md#joboutputdetails)[] | output parameters for the job |

___

### LrOutputDetails

Ƭ **LrOutputDetails**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `href` | `string` | Presigned POST URL to the output file |
| `overwrite?` | `boolean` | If the output file already exists should it be overwritten.overwrite flag is used only when storage = 'adobe' |
| `quality?` | `number` | Quality of the JPEG outputs (will be ignored for other output types). Ranges from 0 to 12, with 12 as the highest quality. |
| `storage` | [`StorageType`](enums/StorageType.md) | - |
| `type` | [`ImageFormatType`](enums/ImageFormatType.md) | - |

___

### SelfLink

Ƭ **SelfLink**: `Object`

Self link for the job status

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `href?` | `string` | Job Status Url |

___

### StorageDetails

Ƭ **StorageDetails**: `Object`

File on Adobe's cloud or an external service (like AWS S3, Azure, Dropbox)

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `href` | `string` | Presigned GET URL |
| `storage` | [`StorageType`](enums/StorageType.md) | - |

___

### TrialLimitExceededError

Ƭ **TrialLimitExceededError**: `Object`

any errors reported requested output

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `code?` | `string` | error code |
| `details?` | `string` | Details of the error returned |
| `title?` | `string` | error description |
| `type?` | `string` | error type |
