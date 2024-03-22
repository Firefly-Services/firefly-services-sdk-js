[Firefly Services: Photoshop SDK Reference](../index.md) / ImageFormatType

# Enumeration: ImageFormatType

desired image format

* image/vnd.adobe.photoshop - Create a new PSD file
* image/jpeg, image/png, image/tiff - Create a new jpeg, png or tiff rendition

Image mode conversions:

Certain image modes (rgb, cmyk, greyscale, etc) must be converted to another image mode before a rendition can be created:

* Tiff Requested: Multichannel and Duotone will convert to RGB
* PNG Requested: CMYK, HSL, HSB, Multichannel, Duotone, Lab and XYZ will convert to RGB

## Table of contents

### Enumeration Members

- [IMAGE\_JPEG](ImageFormatType.md#image_jpeg)
- [IMAGE\_PNG](ImageFormatType.md#image_png)
- [IMAGE\_TIFF](ImageFormatType.md#image_tiff)
- [IMAGE\_VND\_ADOBE\_PHOTOSHOP](ImageFormatType.md#image_vnd_adobe_photoshop)
- [VND\_ADOBE\_PHOTOSHOP](ImageFormatType.md#vnd_adobe_photoshop)

## Enumeration Members

### IMAGE\_JPEG

• **IMAGE\_JPEG** = ``"image/jpeg"``

___

### IMAGE\_PNG

• **IMAGE\_PNG** = ``"image/png"``

___

### IMAGE\_TIFF

• **IMAGE\_TIFF** = ``"image/tiff"``

___

### IMAGE\_VND\_ADOBE\_PHOTOSHOP

• **IMAGE\_VND\_ADOBE\_PHOTOSHOP** = ``"image/vnd.adobe.photoshop"``

___

### VND\_ADOBE\_PHOTOSHOP

• **VND\_ADOBE\_PHOTOSHOP** = ``"vnd.adobe.photoshop"``
