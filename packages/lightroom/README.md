# @adobe/lightroom-apis

[![Version](https://img.shields.io/npm/v/@adobe/lightroom-apis.svg)](https://npmjs.org/package/@adobe/lightroom-apis)
[![Downloads/week](https://img.shields.io/npm/dw/@adobe/lightroom-apis.svg)](https://npmjs.org/package/@adobe/lightroom-apis)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/license/mit)

## Description

This repository is home to the Firefly Services SDK for JavaScript, designed for Node.js and web environments. It features libraries for various Firefly services, including product libraries for accessing specific product services like **Firefly**, **Lightroom**, and **Photoshop**, and a **common** **library** for shared functionalities. 

**[@adobe/lightroom-apis](https://www.npmjs.com/package/@adobe/lightroom-apis)** specifically is the Lightroom package for accessing the Lightroom product services.

You can refer to [Firefly Services Homepage](../../README.md) for getting started guides, details about adding these packages to your project and code samples.

- [Lightroom package API Reference](../../docs/lightroom/index.md)
- [Lightroom package Change Log](../../packages/lightroom/CHANGELOG.md)

Table below shows details on various API service endpoints and the corresponding SDK APIs

## SDK to API Reference Mapping

| Lightroom API Endpoint | SDK API Name | Description  |
|:----------|:----------|:----------|
| [/lrService/presets](https://developer.adobe.com/firefly-services/docs/lighroom/api/#tag/Lightroom/operation/presets) |[applyPreset](../../docs/lightroom/classes/LightroomClient.md#applypreset) |Apply one or more XMP Lightroom presets to the given image, by using the given preset XMP file(s). |
| [/lrService/xmp](https://developer.adobe.com/firefly-services/docs/lighroom/api/#tag/Lightroom/operation/xmp) |[applyPresetFromXmpContent](../../docs/lightroom/classes/LightroomClient.md#applypresetfromxmpcontent) |Apply XMP based Lightroom preset to an image. XMP content is passed inline to the api. |
| [/lrService/autoTone](https://developer.adobe.com/firefly-services/docs/lighroom/api/#tag/Lightroom/operation/autoTone) |[applyAutoTone](../../docs/lightroom/classes/LightroomClient.md#applyautotone) |Automatically correct exposure, contrast, sharpness, saturation on an image. |
| [/lrService/edit](https://developer.adobe.com/firefly-services/docs/lighroom/api/#tag/Lightroom/operation/edit) |[applyEdits](../../docs/lightroom/classes/LightroomClient.md#applyedits) |Apply one or more Lightroom edits ( exposure, contrast, sharpness, saturation ) to an image. |
| [/autoStraighten](https://developer.adobe.com/firefly-services/docs/lighroom/api/#tag/Lightroom/operation/autoStraighten) |[autoStraightenImage](../../docs/lightroom/classes/LightroomClient.md#autostraightenimage) |Auto Straighten an image. Applies the Auto Upright transformation on an image. |
