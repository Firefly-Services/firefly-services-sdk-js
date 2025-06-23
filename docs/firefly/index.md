Firefly Services: Firefly SDK Reference

# Firefly Services: Firefly SDK Reference

## Table of contents

### Namespaces

- [CoreTypes](modules/CoreTypes.md)

### Enumerations

- [AlignmentHorizontal](enums/AlignmentHorizontal.md)
- [AlignmentVertical](enums/AlignmentVertical.md)
- [CameraMotion](enums/CameraMotion.md)
- [ContentClass](enums/ContentClass.md)
- [ErrorCode](enums/ErrorCode.md)
- [ShotAngle](enums/ShotAngle.md)
- [ShotSize](enums/ShotSize.md)
- [VideoPromptStyle](enums/VideoPromptStyle.md)

### Classes

- [FireflyClient](classes/FireflyClient.md)

### Type Aliases

- [ApiError](index.md#apierror)
- [AsyncResponseV3](index.md#asyncresponsev3)
- [AsyncResult](index.md#asyncresult)
- [BaseInputImage](index.md#baseinputimage)
- [ClinetoSize](index.md#clinetosize)
- [ClipRange](index.md#cliprange)
- [ExpandImageRequest](index.md#expandimagerequest)
- [ExpandImageResponse](index.md#expandimageresponse)
- [ExpandInputImage](index.md#expandinputimage)
- [FillImageRequest](index.md#fillimagerequest)
- [FillImageResponse](index.md#fillimageresponse)
- [GenerateImagesRequest](index.md#generateimagesrequest)
- [GenerateImagesResponse](index.md#generateimagesresponse)
- [GenerateObjectCompositeRequest](index.md#generateobjectcompositerequest)
- [GenerateObjectCompositeResponse](index.md#generateobjectcompositeresponse)
- [GenerateSimilarImagesRequest](index.md#generatesimilarimagesrequest)
- [GenerateSimilarImagesResponse](index.md#generatesimilarimagesresponse)
- [GenerateVideoRequestV3](index.md#generatevideorequestv3)
- [ImageConditionV3](index.md#imageconditionv3)
- [InputImage](index.md#inputimage)
- [InputImageV3](index.md#inputimagev3)
- [ObjectCompositeInputImage](index.md#objectcompositeinputimage)
- [OutputImage](index.md#outputimage)
- [Placement](index.md#placement)
- [PlacementAlignment](index.md#placementalignment)
- [PlacementInset](index.md#placementinset)
- [PlacementStart](index.md#placementstart)
- [PublicBinaryInput](index.md#publicbinaryinput)
- [PublicBinaryInputV3](index.md#publicbinaryinputv3)
- [PublicBinaryOutput](index.md#publicbinaryoutput)
- [Size](index.md#size)
- [StructureImageReference](index.md#structureimagereference)
- [StructureReference](index.md#structurereference)
- [Styles](index.md#styles)
- [StylesImageReference](index.md#stylesimagereference)
- [UploadResponse](index.md#uploadresponse)
- [UploadedResource](index.md#uploadedresource)
- [ValidationErrorMessage](index.md#validationerrormessage)
- [VideoApiError](index.md#videoapierror)
- [VideoOutput](index.md#videooutput)
- [VideoPlacement](index.md#videoplacement)
- [VideoResult](index.md#videoresult)
- [VideoSettingsV3](index.md#videosettingsv3)
- [VideoValidationErrorMessage](index.md#videovalidationerrormessage)

## Type Aliases

### ApiError

Ƭ **ApiError**: `Object`

The error within the error response.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `error_code` | [`ErrorCode`](enums/ErrorCode.md) |
| `message?` | `string` |
| `validation_errors?` | [`ValidationErrorMessage`](index.md#validationerrormessage)[] |

___

### AsyncResponseV3

Ƭ **AsyncResponseV3**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `cancelUrl?` | `any` | A URL to cancel the job. |
| `jobId` | `any` | The ID for the asyncronous job. |
| `progress?` | `number` | The progress of the running job. The value is the percentage of the job that has been completed. |
| `result?` | [`AsyncResult`](index.md#asyncresult) | The result of the completed job. |
| `status?` | `any` | The status of the job. |
| `statusUrl?` | `any` | A URL to show the status of the current job. |

___

### AsyncResult

Ƭ **AsyncResult**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `outputs` | [`VideoOutput`](index.md#videooutput)[] | Array of generated video outputs. |
| `size` | [`ClinetoSize`](index.md#clinetosize) | - |

___

### BaseInputImage

Ƭ **BaseInputImage**: `Object`

Source image which will be used to generate similar images

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | [`PublicBinaryInput`](index.md#publicbinaryinput) | Source of the reference image used to generate similar images. You can either use a <code>url</code> or an <code>uploadId</code> as the source for the uploaded image. <strong>Note</strong>: Only allow listed domains are allowed to be accepted as input URL in the request. The allow-listed domains are as follows: <ul><li><code>amazonaws.com</code></li><li><code>windows.net</code></li><li><code>dropboxusercontent.com</code></li></ul> |

___

### ClinetoSize

Ƭ **ClinetoSize**: `Object`

**********************************************************************
ADOBE CONFIDENTIAL
___________________

Copyright 2025 Adobe
All Rights Reserved.

NOTICE: All information contained herein is, and remains
the property of Adobe and its suppliers, if any. The intellectual
and technical concepts contained herein are proprietary to Adobe
and its suppliers and are protected by all applicable intellectual
property laws, including trade secret and copyright laws.
Dissemination of this information or reproduction of this material
is strictly forbidden unless prior written permission is obtained
from Adobe.

************************************************************************

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `height` | `number` | The height of the output image. |
| `width` | `number` | The width of the output image. |

___

### ClipRange

Ƭ **ClipRange**: `Object`

**********************************************************************
ADOBE CONFIDENTIAL
___________________

Copyright 2025 Adobe
All Rights Reserved.

NOTICE: All information contained herein is, and remains
the property of Adobe and its suppliers, if any. The intellectual
and technical concepts contained herein are proprietary to Adobe
and its suppliers and are protected by all applicable intellectual
property laws, including trade secret and copyright laws.
Dissemination of this information or reproduction of this material
is strictly forbidden unless prior written permission is obtained
from Adobe.

************************************************************************

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `end?` | `number` | The time stamp of a clip end position, in seconds |
| `start?` | `number` | The time stamp of a clip start position, in seconds |

___

### ExpandImageRequest

Ƭ **ExpandImageRequest**: `Object`

Images expand payload

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `image` | [`ExpandInputImage`](index.md#expandinputimage) | The image to be expanded. You can either use a <code>url</code> or an <code>uploadId</code> as the source for the uploaded image. <strong>Note</strong>: Only allow listed domains are allowed to be accepted as input URL in the request. The allow-listed domains are as follows: <ul><li><code>amazonaws.com</code></li><li><code>windows.net</code></li><li><code>dropboxusercontent.com</code></li></ul> |
| `numVariations?` | `number` | The number of variations to generate. numVariations will default to the number of seeds, or to 1 if seeds is not specified. |
| `placement?` | [`Placement`](index.md#placement) | Specifies how the source image will be positioned and sized in the final generation. The value should describe the placement and dimensions of the image within the output. <p><strong>Note:</strong> Placement for source images cannot be used when a mask image is being applied.</p> |
| `prompt?` | `string` | The prompt used to generate the image. The longer the prompt - the better |
| `seeds?` | `number`[] | Array of seed(s) that ensure consistent image generation across multiple API calls. For example, you can use the same seed to generate a similar image with different styles. If specified alongside with numVariations, the number of seeds must be the equal to numVariations |
| `size?` | [`Size`](index.md#size) | Specifies the desired width and height for the final, expanded image. |

___

### ExpandImageResponse

Ƭ **ExpandImageResponse**: `Object`

Images expand response

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `outputs` | [`OutputImage`](index.md#outputimage)[] | Each image will have a storage item. |
| `size` | [`Size`](index.md#size) | If size was passed as input, this value should be the same as the one passed as input. |

___

### ExpandInputImage

Ƭ **ExpandInputImage**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `mask?` | [`PublicBinaryInput`](index.md#publicbinaryinput) | Defines the expanding area where the source image should expand towards. Mask has to be larger than the source image, and the target size has to match the size of the mask, or it will be inferred from the mask. |
| `source` | [`PublicBinaryInput`](index.md#publicbinaryinput) | Source of the image to be expanded. |

___

### FillImageRequest

Ƭ **FillImageRequest**: `Object`

Fill images payload

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `image` | [`InputImage`](index.md#inputimage) | Input image to fill with generative content. You can either use a <code>url</code> or an <code>uploadId</code> as the source for the uploaded image. <strong>Note</strong>: Only allow listed domains are allowed to be accepted as input URL in the request. The allow-listed domains are as follows: <ul><li><code>amazonaws.com</code></li><li><code>windows.net</code></li><li><code>dropboxusercontent.com</code></li></ul> |
| `negativePrompt?` | `string` | Inference will try to generate against this prompt |
| `numVariations?` | `number` | The number of variations to generate. numVariations will default to the number of seeds, or to 1 if seeds is not specified. |
| `prompt?` | `string` | The prompt used to generate the image. The longer the prompt - the better |
| `promptBiasingLocaleCode?` | `string` | A hyphen-separated string combining the ISO 639-1 language code and the ISO 3166-1 region, such as "en-US". When a locale is set, the prompt will be biased to generate more relevant content for that region. The locale will be auto-detected if not specified based on the user's profile and Accept-Language header. |
| `seeds?` | `number`[] | Array of seed(s) that ensure consistent image generation across multiple API calls. For example, you can use the same seed to generate a similar image with different styles. If specified alongside with numVariations, the number of seeds must be the equal to numVariations |

___

### FillImageResponse

Ƭ **FillImageResponse**: `Object`

Fill images response.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `outputs` | [`OutputImage`](index.md#outputimage)[] | Each image will have a storage item. |
| `size` | [`Size`](index.md#size) | If size was passed as input, this value should be the same as the one passed as input. |

___

### GenerateImagesRequest

Ƭ **GenerateImagesRequest**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `contentClass?` | [`ContentClass`](enums/ContentClass.md) | Will guide the generation to being more photographic or more like art. |
| `negativePrompt?` | `string` | Inference will try to generate against this prompt. |
| `numVariations?` | `number` | The number of variations to generate. numVariations will default to the number of seeds, or to 1 if seeds is not specified. |
| `prompt` | `string` | The prompt used to generate the image. The longer the prompt - the better. |
| `promptBiasingLocaleCode?` | `string` | A hyphen-separated string combining the ISO 639-1 language code and the ISO 3166-1 region, such as "en-US". When a locale is set, the prompt will be biased to generate more relevant content for that region. The locale will be auto-detected if not specified based on the user's profile and Accept-Language header. |
| `seeds?` | `number`[] | Array of seed(s) that ensure consistent image generation across multiple API calls. For example, you can use the same seed to generate a similar image with different styles. If specified alongside with numVariations, the number of seeds must be the equal to numVariations. |
| `size?` | [`Size`](index.md#size) | The size of the requested generations. The supported dimensions for image generations are: \| Dimensions \| Description \| \| -----------\| ----- \| \| { "width": 2048, "height": 2048} \| Square (1:1) \| \| { "width": 2304, "height": 1792 } \| Landscape (4:3) \| \| { "width": 1792, "height": 2304 } \| Portrait (3:4) \| \| { "width": 2688, "height": 1536 } \| Widescreen (16:9) \| \| { "width": 1344, "height": 768 } \|(7:4) \| \|{ "width": 1152, "height": 896 } \|(9:7) \| \|{ "width": 896, "height": 1152 } \|(7:9) \| \| { "width": 1024, "height": 1024} \| Square (1:1) \| |
| `structure?` | [`StructureReference`](index.md#structurereference) | Use structure to ensure the generated image maintains a similar layout and organization as the reference image, providing a cohesive and visually balanced result. |
| `style?` | [`Styles`](index.md#styles) | You can specify a preset, a reference image or both. |
| `tileable?` | `boolean` | An image is tileable if it can be repeated infinitely in any direction without showing visible seams or edges. |
| `visualIntensity?` | `number` | Adjusts the overall intensity of your photo's existing visual characteristics. |

___

### GenerateImagesResponse

Ƭ **GenerateImagesResponse**: `Object`

text-to-image response

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `contentClass?` | [`ContentClass`](enums/ContentClass.md) | Will be same as input, if input was specified |
| `outputs` | [`OutputImage`](index.md#outputimage)[] | Each image will have a storage item. |
| `promptHasBlockedArtists?` | `boolean` | The user may see that the generation does not comply to its full prompt |
| `promptHasDeniedWords?` | `boolean` | The user may see that the generation does not comply to its full prompt |
| `size` | [`Size`](index.md#size) | If size was passed as input, this value should be the same as the one passed as input. |

___

### GenerateObjectCompositeRequest

Ƭ **GenerateObjectCompositeRequest**: `Object`

Generating object composite from prompt

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `contentClass?` | [`ContentClass`](enums/ContentClass.md) | Will guide the generation to being more photographic or more like art |
| `image` | [`ObjectCompositeInputImage`](index.md#objectcompositeinputimage) | An image of an object that needs to be rendered on a scene. You can either use a <code>url</code> or an <code>uploadId</code> as the source for the uploaded image. <strong>Note</strong>: Only allow listed domains are allowed to be accepted as input URL in the request. The allow-listed domains are as follows: <ul><li><code>amazonaws.com</code></li><li><code>windows.net</code></li><li><code>dropboxusercontent.com</code></li></ul> |
| `numVariations?` | `number` | The number of variations to generate. numVariations will default to the number of seeds, or to 1 if seeds is not specified. |
| `placement?` | [`Placement`](index.md#placement) | Specifies how the image will be positioned and sized in the final generation. You can specify both inset and alignment, only inset, only alignment or none of them. |
| `prompt` | `string` | The prompt used to generate the image. The longer the prompt - the better |
| `seeds?` | `number`[] | Array of seed(s) that ensure consistent image generation across multiple API calls. For example, you can use the same seed to generate a similar image with different styles. If specified alongside with numVariations, the number of seeds must be the equal to numVariations |
| `size?` | [`Size`](index.md#size) | The size of the requested generations. The supported dimensions for image generations are: \| Dimensions \| Description \| \| -----------\| ----- \| \| { "width": 2048, "height": 2048} \| Square (1:1) \| \| { "width": 2304, "height": 1792 } \| Landscape (4:3) \| \| { "width": 1792, "height": 2304 } \| Portrait (3:4) \| \| { "width": 2688, "height": 1536 } \| Widescreen (16:9) \| \| { "width": 1344, "height": 768 } \|(7:4) \| \|{ "width": 1152, "height": 896 } \|(9:7) \| \|{ "width": 896, "height": 1152 } \|(7:9) \| \| { "width": 1024, "height": 1024} \| Square (1:1) \| |
| `style?` | [`Styles`](index.md#styles) | You can specify a preset, a reference image or both |

___

### GenerateObjectCompositeResponse

Ƭ **GenerateObjectCompositeResponse**: `Object`

Generating object composite from prompt response

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `contentClass?` | [`ContentClass`](enums/ContentClass.md) | Will be same as input, if input was specified |
| `outputs` | [`OutputImage`](index.md#outputimage)[] | Each image will have a storage item. |
| `size` | [`Size`](index.md#size) | If size was passed as input, this value should be the same as the one passed as input. |

___

### GenerateSimilarImagesRequest

Ƭ **GenerateSimilarImagesRequest**: `Object`

Generating similar images from a reference image

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `image` | [`BaseInputImage`](index.md#baseinputimage) | Firefly will generate similar variations based on the reference input image. |
| `numVariations?` | `number` | The number of variations to generate. numVariations will default to the number of seeds, or to 1 if seeds is not specified. |
| `seeds?` | `number`[] | Array of seed(s) that ensure consistent image generation across multiple API calls. For example, you can use the same seed to generate a similar image with different styles. If specified alongside with numVariations, the number of seeds must be the equal to numVariations |
| `size?` | [`Size`](index.md#size) | The size of the requested generations. The supported dimensions for image generations are: \| Dimensions \| Description \| \| -----------\| ----- \| \| { "width": 2048, "height": 2048} \| Square (1:1) \| \| { "width": 2304, "height": 1792 } \| Landscape (4:3) \| \| { "width": 1792, "height": 2304 } \| Portrait (3:4) \| \| { "width": 2688, "height": 1536 } \| Widescreen (16:9) \| \| { "width": 1344, "height": 768 } \|(7:4) \| \|{ "width": 1152, "height": 896 } \|(9:7) \| \|{ "width": 896, "height": 1152 } \|(7:9) \| \| { "width": 1024, "height": 1024} \| Square (1:1) \| |
| `tileable?` | `boolean` | An image is tileable if it can be repeated infinitely in any direction without showing visible seams or edges. |

___

### GenerateSimilarImagesResponse

Ƭ **GenerateSimilarImagesResponse**: `Object`

Generating similar images response

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `outputs` | [`OutputImage`](index.md#outputimage)[] | Each image will have a storage item. |
| `size` | [`Size`](index.md#size) | If size was passed as input, this value should be the same as the one passed as input. |

___

### GenerateVideoRequestV3

Ƭ **GenerateVideoRequestV3**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `bitRateFactor?` | `number` | The constant rate factor for encoding video. 0 indicates a lossless generation, with the highest quality and largest file size. 63 indicates the worst quality generation with the smallest file size. The suggested value range is 17-23. |
| `image?` | [`InputImageV3`](index.md#inputimagev3) | The details of the image used as a keyframe for the generated video. Provided images are used as a first frame or final frame to guide the video generation. |
| `negativePrompt?` | `string` | The API will try to generate against the characteristcs in this prompt. |
| `prompt?` | `string` | The prompt used to generate the image. The longer the prompt, the better. |
| `seeds?` | `number`[] | The seed reference value. Currently only 1 seed is supported. |
| `sizes?` | [`ClinetoSize`](index.md#clinetosize)[] | The dimensions of the generated video. Review the usage notes for [supported aspect ratios](../getting_started/usage_notes/) and the sizes associated with them. |
| `videoSettings?` | [`VideoSettingsV3`](index.md#videosettingsv3) | The camera and shot control settings. |

___

### ImageConditionV3

Ƭ **ImageConditionV3**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `placement` | [`PlacementStart`](index.md#placementstart) | Details about the timeline placement of the image. |
| `source` | [`PublicBinaryInputV3`](index.md#publicbinaryinputv3) | The source details of the image. |

___

### InputImage

Ƭ **InputImage**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `mask` | [`PublicBinaryInput`](index.md#publicbinaryinput) | Mask image which will be used replace the background of the image.<br><strong>Note:</strong> The minimum accepted size for the larger side of the image is 600 px. |
| `source` | [`PublicBinaryInput`](index.md#publicbinaryinput) | Upload an image you want to fill. |

___

### InputImageV3

Ƭ **InputImageV3**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `conditions?` | [`ImageConditionV3`](index.md#imageconditionv3)[] | The details about the keyframe images used for the video generation. |

___

### ObjectCompositeInputImage

Ƭ **ObjectCompositeInputImage**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `mask?` | [`PublicBinaryInput`](index.md#publicbinaryinput) | Provide a mask that hides part of the object like the background. |
| `source` | [`PublicBinaryInput`](index.md#publicbinaryinput) | An image of an object that needs to be rendered on a scene. |

___

### OutputImage

Ƭ **OutputImage**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `image` | [`PublicBinaryOutput`](index.md#publicbinaryoutput) | A valid storage item containing a pre-signed URL. The pre-signed URL will expire in one hour. |
| `seed` | `number` | Identifier used to customize image generation processes. |

___

### Placement

Ƭ **Placement**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `alignment?` | [`PlacementAlignment`](index.md#placementalignment) | Specifies how the image will be anchored within the available space for each direction. For horizontal, (0,1,2)=(center, left, right). For vertical, (0,1,2)=(center, top, bottom). |
| `inset?` | [`PlacementInset`](index.md#placementinset) | Defines the inward displacement applied to the image's edges. This parameter specifies the distance by which each edge of the image will be pushed inward, thereby reducing the visible area by the specified amount on all sides. |

___

### PlacementAlignment

Ƭ **PlacementAlignment**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `horizontal?` | [`AlignmentHorizontal`](enums/AlignmentHorizontal.md) |
| `vertical?` | [`AlignmentVertical`](enums/AlignmentVertical.md) |

___

### PlacementInset

Ƭ **PlacementInset**: `Object`

Margin values in target size

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `bottom?` | `number` | The space between bottom edge of the result image and bottom edge of the placed object image. |
| `left?` | `number` | The space between left edge of the result image and left edge of the placed object image. |
| `right?` | `number` | The space between right edge of the result image and right edge of the placed object image. |
| `top?` | `number` | The space between top edge of the result image and top edge of the placed object image. |

___

### PlacementStart

Ƭ **PlacementStart**: `Object`

**********************************************************************
ADOBE CONFIDENTIAL
___________________

Copyright 2025 Adobe
All Rights Reserved.

NOTICE: All information contained herein is, and remains
the property of Adobe and its suppliers, if any. The intellectual
and technical concepts contained herein are proprietary to Adobe
and its suppliers and are protected by all applicable intellectual
property laws, including trade secret and copyright laws.
Dissemination of this information or reproduction of this material
is strictly forbidden unless prior written permission is obtained
from Adobe.

************************************************************************

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `position` | `number` | The position of the image on the timeline for the generated video, 0 being the first frame and 1 being the last frame. |

___

### PublicBinaryInput

Ƭ **PublicBinaryInput**: `Object`

You can either use a <code>url</code> or an <code>uploadId</code> as the source for the uploaded image.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `uploadId?` | `string` | UUID of the uploaded object |
| `url?` | `string` | This URL of an uploaded image. |

___

### PublicBinaryInputV3

Ƭ **PublicBinaryInputV3**: `Object`

**********************************************************************
ADOBE CONFIDENTIAL
___________________

Copyright 2025 Adobe
All Rights Reserved.

NOTICE: All information contained herein is, and remains
the property of Adobe and its suppliers, if any. The intellectual
and technical concepts contained herein are proprietary to Adobe
and its suppliers and are protected by all applicable intellectual
property laws, including trade secret and copyright laws.
Dissemination of this information or reproduction of this material
is strictly forbidden unless prior written permission is obtained
from Adobe.

************************************************************************

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `creativeCloudFileId?` | `string` | The ID of the file in Adobe Creative Cloud. Has to be a Creative Cloud file asset ID. |
| `uploadId?` | `string` | The internal ID for a storage item that is coming from other outputs. |
| `url?` | `string` | The pre-signed URL for the input file. |

___

### PublicBinaryOutput

Ƭ **PublicBinaryOutput**: `Object`

A valid storage item containing a pre-signed URL. The pre-signed URL will expire in one hour.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `url?` | `string` | The reference to signed url of the image. |

___

### Size

Ƭ **Size**: `Object`

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

### StructureImageReference

Ƭ **StructureImageReference**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `source?` | [`PublicBinaryInput`](index.md#publicbinaryinput) |

___

### StructureReference

Ƭ **StructureReference**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `imageReference?` | [`StructureImageReference`](index.md#structureimagereference) | An image with a structure you want to use as a reference for generating image variations. <strong>Note</strong>: Only allow listed domains are allowed to be accepted as input URL in the request. The allow-listed domains are as follows: <ul><li><code>amazonaws.com</code></li><li><code>windows.net</code></li><li><code>dropboxusercontent.com</code></li></ul> |
| `strength?` | `number` | Control the amount of adherence to the reference image when generating the image variations. 0 means no adherence. 100 means full adherence. |

___

### Styles

Ƭ **Styles**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `imageReference?` | [`StylesImageReference`](index.md#stylesimagereference) | Firefly will detect the style in the image and apply the same style in the generated image. <strong>Note</strong>: Only allow listed domains are allowed to be accepted as input URL in the request. The allow-listed domains are as follows: <ul><li><code>amazonaws.com</code></li><li><code>windows.net</code></li><li><code>dropboxusercontent.com</code></li></ul> |
| `presets?` | `string`[] | You can specify a preset ID for a style. Refer to Image Model Styles under Concepts for the list of supported <code>Preset IDs</code>. |
| `strength?` | `number` | The strength of the style to be applied. |

___

### StylesImageReference

Ƭ **StylesImageReference**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `source?` | [`PublicBinaryInput`](index.md#publicbinaryinput) |

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

Uploaded Media Details

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID associated with the asset (generate this ID using the upload API). |

___

### ValidationErrorMessage

Ƭ **ValidationErrorMessage**: `Object`

Validation error message

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ctx?` | `Record`\<`string`, `any`\> |
| `loc` | `number` \| `string`[] |
| `msg` | `string` |
| `type` | `string` |

___

### VideoApiError

Ƭ **VideoApiError**: `Object`

The error details within the error response for video operations.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `error_code` | `string` | Indicates the type of error that occurred. |
| `message?` | `string` | A human-readable error message. |
| `stack_trace?` | `string`[] | Stack trace of the error for debugging purposes. |
| `validation_errors?` | [`VideoValidationErrorMessage`](index.md#videovalidationerrormessage)[] | Detailed validation error messages. |

___

### VideoOutput

Ƭ **VideoOutput**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `seed` | `number` | The seed value used for generating this video output. |
| `video` | [`VideoResult`](index.md#videoresult) | - |

___

### VideoPlacement

Ƭ **VideoPlacement**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `inset?` | [`ClipRange`](index.md#cliprange) \| ``null`` | the position of generated clip |
| `reference?` | [`ClipRange`](index.md#cliprange) \| ``null`` | the clip used as condition |

___

### VideoResult

Ƭ **VideoResult**: `Object`

**********************************************************************
ADOBE CONFIDENTIAL
___________________

Copyright 2025 Adobe
All Rights Reserved.

NOTICE: All information contained herein is, and remains
the property of Adobe and its suppliers, if any. The intellectual
and technical concepts contained herein are proprietary to Adobe
and its suppliers and are protected by all applicable intellectual
property laws, including trade secret and copyright laws.
Dissemination of this information or reproduction of this material
is strictly forbidden unless prior written permission is obtained
from Adobe.

************************************************************************

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | The pre-signed URL for the generated video file. |

___

### VideoSettingsV3

Ƭ **VideoSettingsV3**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `cameraMotion?` | [`CameraMotion`](enums/CameraMotion.md) | The camera motion control. |
| `promptStyle?` | [`VideoPromptStyle`](enums/VideoPromptStyle.md) | The style of the generated video. |
| `shotAngle?` | [`ShotAngle`](enums/ShotAngle.md) | The shot angle control. |
| `shotSize?` | [`ShotSize`](enums/ShotSize.md) | The shot size control. |

___

### VideoValidationErrorMessage

Ƭ **VideoValidationErrorMessage**: `Object`

**********************************************************************
ADOBE CONFIDENTIAL
___________________

Copyright 2025 Adobe
All Rights Reserved.

NOTICE: All information contained herein is, and remains
the property of Adobe and its suppliers, if any. The intellectual
and technical concepts contained herein are proprietary to Adobe
and its suppliers and are protected by all applicable intellectual
property laws, including trade secret and copyright laws.
Dissemination of this information or reproduction of this material
is strictly forbidden unless prior written permission is obtained
from Adobe.

************************************************************************

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx?` | `Record`\<`string`, `any`\> | Additional context for the validation error. |
| `loc` | `number` \| `string`[] | Location of the validation error in the request. |
| `msg` | `string` | Validation error message. |
| `type` | `string` | Type of validation error. |
