# @adobe/photoshop-apis

[![Version](https://img.shields.io/npm/v/@adobe/photoshop-apis.svg)](https://npmjs.org/package/@adobe/photoshop-apis)
[![Downloads/week](https://img.shields.io/npm/dw/@adobe/photoshop-apis.svg)](https://npmjs.org/package/@adobe/photoshop-apis)

## Description

This repository is home to the Firefly Services SDK for JavaScript, designed for Node.js and web environments. It features libraries for various Firefly services, including product libraries for accessing specific product services like **Firefly**, **Lightroom**, and **Photoshop**, and a **common** **library** for shared functionalities. 

**[@adobe/photoshop-apis](https://www.npmjs.com/package/@adobe/photoshop-apis)** specifically is the Firefly package for accessing the [Photoshop product services](https://developer.adobe.com/firefly-services/docs/photoshop/).

You can refer to [Firefly Services Homepage](https://github.com/Firefly-Services/firefly-services-sdk-js/blob/main/README.md) for getting started guides, details about adding these packages to your project and code samples.

- [Photoshop package API Reference](https://github.com/Firefly-Services/firefly-services-sdk-js/blob/main/docs/photoshop/index.md)
- [Photoshop package Change Log](https://github.com/Firefly-Services/firefly-services-sdk-js/blob/main/packages/photoshop/CHANGELOG.md)

Table below shows details on various API service endpoints and the corresponding SDK APIs


## SDK to API Reference Mapping

| Photoshop API Endpoint | SDK API Name | Description  |
|:----------|:----------|:----------|
| [/pie/psdService/photoshopActions](https://developer.adobe.com/firefly-services/docs/photoshop/api/#tag/Photoshop/operation/photoshopActions) |[playPhotoshopActions](https://github.com/Firefly-Services/firefly-services-sdk-js/blob/main/docs/photoshop/classes/PhotoshopClient.md#playphotoshopactions) |Executes Photoshop Action file against a PSD, JPEG, PNG, or TIFF  |
| [/pie/psdService/actionJSON](https://developer.adobe.com/firefly-services/docs/photoshop/api/#tag/Photoshop/operation/actionJSON) |[playPhotoshopActionsJson](https://github.com/Firefly-Services/firefly-services-sdk-js/blob/main/docs/photoshop/classes/PhotoshopClient.md#playphotoshopactionsjson) |Execute a Photoshop Action with actionJSON format  
| [/sensei/cutout](https://developer.adobe.com/firefly-services/docs/photoshop/api/#tag/Photoshop/operation/cutout) |[removeBackground](https://github.com/Firefly-Services/firefly-services-sdk-js/blob/main/docs/photoshop/classes/PhotoshopClient.md#removebackground) |Isolate subject of interested in an image and remove background  |
| [/pie/psdService/documentCreate](https://developer.adobe.com/firefly-services/docs/photoshop/api/#tag/Photoshop/operation/documentCreate) |[createDocument](https://github.com/Firefly-Services/firefly-services-sdk-js/blob/main/docs/photoshop/classes/PhotoshopClient.md#createdocument) |Create new PSD with layers  |
| [/sensei/mask](https://developer.adobe.com/firefly-services/docs/photoshop/api/#tag/Photoshop/operation/mask) |[createMask](https://github.com/Firefly-Services/firefly-services-sdk-js/blob/main/docs/photoshop/classes/PhotoshopClient.md#createmask) |Isolate a subject of interest in an image (people, objects, etc) and generate an image mask  |
| [/pie/psdService/renditionCreate](https://developer.adobe.com/firefly-services/docs/photoshop/api/#tag/Photoshop/operation/renditionCreate) |[createRendition](https://github.com/Firefly-Services/firefly-services-sdk-js/blob/main/docs/photoshop/classes/PhotoshopClient.md#createrendition) |Create flat image representations of a PSD in multiple formats |
| [/pie/psdService/documentManifest](https://developer.adobe.com/firefly-services/docs/photoshop/api/#tag/Photoshop/operation/documentManifest) |[getDocumentManifest](https://github.com/Firefly-Services/firefly-services-sdk-js/blob/main/docs/photoshop/classes/PhotoshopClient.md#getdocumentmanifest) |Extract metadata from PSD document, including general file and layer information.  |
| [/pie/psdService/documentOperations](https://developer.adobe.com/firefly-services/docs/photoshop/api/#tag/Photoshop/operation/documentOperations) |[modifyDocument](https://github.com/Firefly-Services/firefly-services-sdk-js/blob/main/docs/photoshop/classes/PhotoshopClient.md#modifydocument) |Apply basic layer edits (name, state, etc), add/edit adjustment, pixel, and shape layers  |
| [/pie/psdService/smartObject](https://developer.adobe.com/firefly-services/docs/photoshop/api/#tag/Photoshop/operation/smartObject) |[replaceSmartObject](https://github.com/Firefly-Services/firefly-services-sdk-js/blob/main/docs/photoshop/classes/PhotoshopClient.md#replacesmartobject) |Replace Smart Object in a PSD  |
| [/pie/psdService/actionJsonCreate](https://developer.adobe.com/firefly-services/docs/photoshop/api/#tag/Photoshop/operation/actionJsonCreate) |[convertToActionsJson](https://github.com/Firefly-Services/firefly-services-sdk-js/blob/main/docs/photoshop/classes/PhotoshopClient.md#converttoactionsjson) |Convert .atn file to an actionJSON format  |
| [/pie/psdService/artboardCreate](https://developer.adobe.com/firefly-services/docs/photoshop/api/#tag/Photoshop/operation/artboardCreate) |[createArtboard](https://github.com/Firefly-Services/firefly-services-sdk-js/blob/main/docs/photoshop/classes/PhotoshopClient.md#createartboard) |Create artboards from multiple PSD inputs  |
| [/pie/psdService/depthBlur](https://developer.adobe.com/firefly-services/docs/photoshop/api/#tag/Photoshop/operation/depthBlur) |[applyDepthBlur](https://github.com/Firefly-Services/firefly-services-sdk-js/blob/main/docs/photoshop/classes/PhotoshopClient.md#applydepthblur) |Apply depth blur to an image input  |
| [/pie/psdService/productCrop](https://developer.adobe.com/firefly-services/docs/photoshop/api/#tag/Photoshop/operation/productCrop) |[applyAutoCrop](https://github.com/Firefly-Services/firefly-services-sdk-js/blob/main/docs/photoshop/classes/PhotoshopClient.md#applyautocrop) |Smart crop an image keeping the subject of interest in view  |
| [/pie/psdService/text](https://developer.adobe.com/firefly-services/docs/photoshop/api/#tag/Photoshop/operation/text) |[editTextLayer](https://github.com/Firefly-Services/firefly-services-sdk-js/blob/main/docs/photoshop/classes/PhotoshopClient.md#edittextlayer) |Change the contents of a text layer in a PSD, eg for localization  |
