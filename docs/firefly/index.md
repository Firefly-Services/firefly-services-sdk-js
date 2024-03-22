Firefly Services: Firefly SDK Reference

# Firefly Services: Firefly SDK Reference

## Table of contents

### Namespaces

- [CoreTypes](modules/CoreTypes.md)

### Enumerations

- [AcceptMimeTypes](enums/AcceptMimeTypes.md)
- [ContentClass](enums/ContentClass.md)

### Classes

- [FireflyClient](classes/FireflyClient.md)

### Type Aliases

- [ErrorBody](index.md#errorbody)
- [ExpandImageRequest](index.md#expandimagerequest)
- [ExpandImageResponse](index.md#expandimageresponse)
- [FillImageRequest](index.md#fillimagerequest)
- [FillImageResponse](index.md#fillimageresponse)
- [GenerateImagesRequest](index.md#generateimagesrequest)
- [GenerateImagesResponse](index.md#generateimagesresponse)
- [ImageFillMask](index.md#imagefillmask)
- [ImageGenerateSize](index.md#imagegeneratesize)
- [ImageOutput](index.md#imageoutput)
- [ImageSize](index.md#imagesize)
- [PhotoSettings](index.md#photosettings)
- [Styles](index.md#styles)
- [UploadResponse](index.md#uploadresponse)
- [UploadedResource](index.md#uploadedresource)

## Type Aliases

### ErrorBody

Ƭ **ErrorBody**: `Object`

Details about the error

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `error_code?` | `string` | Associated error code |
| `message?` | `string` | Error message |

___

### ExpandImageRequest

Ƭ **ExpandImageRequest**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `image` | [`UploadedResource`](index.md#uploadedresource) | - |
| `n?` | `number` | The number of variations to generate. If seeds array is specified, "n" does not have to be specified. |
| `prompt?` | `string` | If provided, the expanded image will be rendered with content generated from prompt. If not provided, the expanded image will be rendered with content matching the existing style of the image. |
| `seeds?` | `number`[] | Array of seed(s) that will provide generation stability across multiple API calls. E.g. You can use the same seed to generate a similar image with different styles. If "n" is specified, the number of elements in the array must be equal to "n". |
| `size?` | [`ImageSize`](index.md#imagesize) | - |

___

### ExpandImageResponse

Ƭ **ExpandImageResponse**: `Object`

Expand Image response

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `images?` | [`ImageOutput`](index.md#imageoutput)[] | - |
| `pipelineVersion?` | `string` | Unique identifier indicating the model and pipeline version with which the images were generated. |
| `prompt?` | `string` | Specify a prompt for generating content in the masked area. If not provided, the existing style of the source image will be used. |
| `promptHasBlockedArtist?` | `boolean` | Flag to indicate if artist names were detected in the prompt. |
| `promptHasDeniedWords?` | `boolean` | Flag to indicate if denied words were detected in the prompt. |
| `size?` | [`ImageSize`](index.md#imagesize) | - |

___

### FillImageRequest

Ƭ **FillImageRequest**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `image` | [`UploadedResource`](index.md#uploadedresource) | - |
| `mask` | [`ImageFillMask`](index.md#imagefillmask) | - |
| `n?` | `number` | The number of variations to generate. If seeds array is specified, "n" does not have to be specified. |
| `prompt?` | `string` | If provided, the masked area will be rendered with content generated from prompt. If not provided, the masked area will be rendered with content matching the existing style of the source image. |
| `seeds?` | `number`[] | Array of seed(s) that will provide generation stability across multiple API calls. E.g. You can use the same seed to generate a similar image with different styles. If "n" is specified, the number of elements in the array must be equal to "n". |

___

### FillImageResponse

Ƭ **FillImageResponse**: `Object`

Fill Image response

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `images?` | [`ImageOutput`](index.md#imageoutput)[] | - |
| `pipelineVersion?` | `string` | Unique identifier indicating the model and pipeline version with which the images were generated. |
| `prompt?` | `string` | Specify a prompt for generating content in the masked area. If not provided, the existing style of the source image will be used. |
| `promptHasBlockedArtist?` | `boolean` | Flag to indicate if artist names were detected in the prompt. |
| `promptHasDeniedWords?` | `boolean` | Flag to indicate if denied words were detected in the prompt. |
| `size?` | [`ImageSize`](index.md#imagesize) | - |

___

### GenerateImagesRequest

Ƭ **GenerateImagesRequest**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `contentClass?` | [`ContentClass`](enums/ContentClass.md) | Will guide the generation to being more photographic or more like art |
| `locale?` | `string` | A hyphen separated string, combining the ISO 639-1 language code and the ISO 3166-1 region, such as "en-US". When a locale is set, the prompt will be debiased to generated more relevant content to that region. If not specified, the locale will be auto detected, based on user's profile and Accept-Language header. |
| `n?` | `number` | The number of variations to generate. If seeds array is specified, "n" does not have to be specified. |
| `negativePrompt?` | `string` | The model will avoid these words in the generated content. |
| `photoSettings?` | [`PhotoSettings`](index.md#photosettings) | This is only valid if contentClass is photo, otherwise it will be ignored |
| `prompt` | `string` | The prompt used to generate the image. The longer the prompt - the better |
| `seeds?` | `number`[] | Array of seed(s) that will provide generation stability across multiple API calls. E.g. You can use the same seed to generate a similar image with different styles. If "n" is specified, the number of elements in the array must be equal to "n". |
| `size?` | [`ImageGenerateSize`](index.md#imagegeneratesize) | - |
| `styles?` | [`Styles`](index.md#styles) | You can specify a preset, a reference image or both |
| `visualIntensity?` | `number` | Adjusts the overall intensity of your photo's existing visual characteristics |

___

### GenerateImagesResponse

Ƭ **GenerateImagesResponse**: `Object`

text-to-image response

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `outputs?` | [`ImageOutput`](index.md#imageoutput)[] | - |
| `size?` | [`ImageGenerateSize`](index.md#imagegeneratesize) | - |
| `version?` | `string` | Unique identifier indicating the model and pipeline version with which the images were generated. |

___

### ImageFillMask

Ƭ **ImageFillMask**: `Object`

Custom mask that will be filled with generated content

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID associated with the asset (generate this ID using the upload API). Pre-signed URLs will be supported in the future. |

___

### ImageGenerateSize

Ƭ **ImageGenerateSize**: `Object`

Dimensions of the generated image
| Dimensions | Description |
| -----------| ----- |
| { "width": 2048, "height": 2048} | Square (1:1) |
| { "width": 2304, "height": 1792 } | Landscape (4:3) |
| { "width": 1792, "height": 2304 } | Portrait (3:4) |
| { "width": 2688, "height": 1536 } | Widescreen (16:9) |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `height` | `number` |
| `width` | `number` |

___

### ImageOutput

Ƭ **ImageOutput**: `Object`

Array of objects with details on output images

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `image?` | \{ `id?`: `string` ; `presignedUrl?`: `string`  } | A valid Storage Item containing both an internal ID and a pre-signed URL |
| `image.id?` | `string` | Unique ID associated with the generated image |
| `image.presignedUrl?` | `string` | Signed URL of the generated image |
| `seed?` | `number` | seed used to generate the image |

___

### ImageSize

Ƭ **ImageSize**: `Object`

Supported dimensions for the generated image.
| Dimensions | Description |
| -----------| ----- |
| { "width": 1024, "height": 1024} | Square (1:1) |
| { "width": 1408, "height": 1024 } | Landscape (4:3) |
| { "width": 1024, "height": 1408 } | Portrait (3:4) |
| { "width": 1792, "height": 1024 } | Widescreen (16:9) |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `height` | `number` |
| `width` | `number` |

___

### PhotoSettings

Ƭ **PhotoSettings**: `Object`

Advanced settings that will be applied if the specified or detected contentClass is photo

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `aperture?` | `number` | Aperture |
| `fieldOfView?` | `number` | Field of view (millimeters) |
| `shutterSpeed?` | `number` | Shutter speed (seconds) |

___

### Styles

Ƭ **Styles**: `Object`

Additional styles and reference image to be applied when generating variations.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `presets?` | `string`[] | List of style presets (See "Image Model Styles" under "Getting Started" guides) that are applied to generated content |
| `referenceImage?` | [`UploadedResource`](index.md#uploadedresource) | Firefly will detect the style in the image and apply the same style in the generated image |
| `strength?` | `number` | Sets the intensity at which to apply the styles |

___

### UploadResponse

Ƭ **UploadResponse**: `Object`

Upload response

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `images?` | [`UploadedResource`](index.md#uploadedresource)[] | Array of objects containing asset ID |

___

### UploadedResource

Ƭ **UploadedResource**: `Object`

Uploaded Image Details

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID associated with the asset (generate this ID using the upload API). Pre-signed URLs will be supported in the future. |
