[Firefly Services: Photoshop SDK Reference](../index.md) / [CoreTypes](../modules/CoreTypes.md) / ApiError

# Class: ApiError

[CoreTypes](../modules/CoreTypes.md).ApiError

Error thrown when an API request fails

## Hierarchy

- `Error`

  ↳ **`ApiError`**

## Table of contents

### Constructors

- [constructor](CoreTypes.ApiError.md#constructor)

### Properties

- [body](CoreTypes.ApiError.md#body)
- [message](CoreTypes.ApiError.md#message)
- [name](CoreTypes.ApiError.md#name)
- [request](CoreTypes.ApiError.md#request)
- [stack](CoreTypes.ApiError.md#stack)
- [status](CoreTypes.ApiError.md#status)
- [statusText](CoreTypes.ApiError.md#statustext)
- [url](CoreTypes.ApiError.md#url)

## Constructors

### constructor

• **new ApiError**(`request`, `response`, `message`): [`ApiError`](CoreTypes.ApiError.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | `ApiRequestOptions` |
| `response` | `ApiResult` |
| `message` | `string` |

#### Returns

[`ApiError`](CoreTypes.ApiError.md)

#### Overrides

Error.constructor

## Properties

### body

• `Readonly` **body**: `any`

The body of the response

___

### message

• **message**: `string`

#### Inherited from

Error.message

___

### name

• **name**: `string`

#### Inherited from

Error.name

___

### request

• `Readonly` **request**: `ApiRequestOptions`

The request options that were used

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

Error.stack

___

### status

• `Readonly` **status**: `number`

The HTTP status code of the response

___

### statusText

• `Readonly` **statusText**: `string`

The HTTP status text of the response

___

### url

• `Readonly` **url**: `string`

The URL of the request that failed
