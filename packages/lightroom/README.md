# @adobe/lightroom-apis

[![Version](https://img.shields.io/npm/v/@adobe/lightroom-apis.svg)](https://npmjs.org/package/@adobe/lightroom-apis)
[![Downloads/week](https://img.shields.io/npm/dw/@adobe/lightroom-apis.svg)](https://npmjs.org/package/@adobe/lightroom-apis)

## Description

This repository is home to the Firefly Services SDK for JavaScript, designed for Node.js and web environments. It features libraries for various Firefly services, including product libraries for accessing specific product services like **Firefly**, **Lightroom**, and **Photoshop**, and a **common** **library** for shared functionalities. 

**[@adobe/lightroom-apis](https://www.npmjs.com/package/@adobe/lightroom-apis)** specifically is the Lightroom package for accessing the [Lightroom product services](https://developer.adobe.com/firefly-services/docs/lightroom/).

You can refer to [Firefly Services Homepage](https://github.com/Firefly-Services/firefly-services-sdk-js/blob/main/README.md) for getting started guides, details about adding these packages to your project and code samples.

- [Lightroom package API Reference](https://github.com/Firefly-Services/firefly-services-sdk-js/blob/main/docs/lightroom/index.md)
- [Lightroom package Change Log](https://github.com/Firefly-Services/firefly-services-sdk-js/blob/main/packages/lighroom/CHANGELOG.md)

Table below shows details on various API service endpoints and the corresponding SDK APIs

## SDK to API Reference Mapping

| Lightroom API Endpoint | SDK API Name | Description  |
|:----------|:----------|:----------|
| [/lrService/presets](https://developer.adobe.com/firefly-services/docs/lightroom/api/lightroom_applyPresets/) |[applyPreset](https://github.com/Firefly-Services/firefly-services-sdk-js/blob/main/docs/lightroom/classes/LightroomClient.md#applypreset) |Apply one or more XMP Lightroom presets to the given image, by using the given preset XMP file(s). |
| [/lrService/xmp](https://developer.adobe.com/firefly-services/docs/lightroom/api/lightroom_applyXMP/) |[applyPresetFromXmpContent](https://github.com/Firefly-Services/firefly-services-sdk-js/blob/main/docs/lightroom/classes/LightroomClient.md#applypresetfromxmpcontent) |Apply XMP based Lightroom preset to an image. XMP content is passed inline to the api. |
| [/lrService/autoTone](https://developer.adobe.com/firefly-services/docs/lightroom/api/lightroom_autoTone/) |[applyAutoTone](https://github.com/Firefly-Services/firefly-services-sdk-js/blob/main/docs/lightroom/classes/LightroomClient.md#applyautotone) |Automatically correct exposure, contrast, sharpness, saturation on an image. |
| [/lrService/edit](https://developer.adobe.com/firefly-services/docs/lightroom/api/lightroom_edits/) |[applyEdits](https://github.com/Firefly-Services/firefly-services-sdk-js/blob/main/docs/lightroom/classes/LightroomClient.md#applyedits) |Apply one or more Lightroom edits ( exposure, contrast, sharpness, saturation ) to an image. |
| [/autoStraighten](https://developer.adobe.com/firefly-services/docs/lightroom/api/lightroom_autoStraighten/) |[autoStraightenImage](https://github.com/Firefly-Services/firefly-services-sdk-js/blob/main/docs/lightroom/classes/LightroomClient.md#autostraightenimage) |Auto Straighten an image. Applies the Auto Upright transformation on an image. |
