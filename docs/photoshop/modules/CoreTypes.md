[Firefly Services: Photoshop SDK Reference](../index.md) / CoreTypes

# Namespace: CoreTypes

## Table of contents

### Classes

- [ApiError](../classes/CoreTypes.ApiError.md)

### Interfaces

- [ApiOptions](../interfaces/CoreTypes.ApiOptions.md)
- [ClientConfig](../interfaces/CoreTypes.ClientConfig.md)
- [ClientCredentials](../interfaces/CoreTypes.ClientCredentials.md)
- [TokenProvider](../interfaces/CoreTypes.TokenProvider.md)

### Type Aliases

- [ApiResponse](CoreTypes.md#apiresponse)

## Type Aliases

### ApiResponse

Ƭ **ApiResponse**\<`T`\>: `Object`

Response of the API call

#### Type parameters

| Name |
| :------ |
| `T` |

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `headers` | `Headers` | Headers of the response |
| `result` | `T` | The result of the API call |
