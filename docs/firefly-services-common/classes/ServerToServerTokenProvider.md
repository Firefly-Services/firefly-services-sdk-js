[Firefly Services: Common APIs SDK Reference](../index.md) / ServerToServerTokenProvider

# Class: ServerToServerTokenProvider

ServerToServerTokenProvider Implements TokenProvider.
It generates Access Token using server to server authentication credentials. [More details](https://developer.adobe.com/developer-console/docs/guides/authentication/ServerToServerAuthentication/)

## Implements

- [`TokenProvider`](../interfaces/CoreTypes.TokenProvider.md)

## Table of contents

### Constructors

- [constructor](ServerToServerTokenProvider.md#constructor)

### Methods

- [authenticate](ServerToServerTokenProvider.md#authenticate)
- [getToken](ServerToServerTokenProvider.md#gettoken)

## Constructors

### constructor

• **new ServerToServerTokenProvider**(`details`, `options?`): [`ServerToServerTokenProvider`](ServerToServerTokenProvider.md)

ServerToServerTokenProvider

#### Parameters

| Name | Type |
| :------ | :------ |
| `details` | [`ServerToServerAuthDetails`](../interfaces/ServerToServerAuthDetails.md) |
| `options` | [`ServerToServerAuthOptions`](../interfaces/ServerToServerAuthOptions.md) |

#### Returns

[`ServerToServerTokenProvider`](ServerToServerTokenProvider.md)

## Methods

### authenticate

▸ **authenticate**(`env?`): `Promise`\<`string`\>

Authenticates the provided credentials and caches the generated token.
If autoRefresh option is set to true, the token will be automatically refreshed.
If autoRefresh is set to false, this method needs to be called manually before making API calls, and the user should handle token refresh themselves.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `env` | `string` | `"production"` | [experimental] : environment to get the token from, default is production |

#### Returns

`Promise`\<`string`\>

access token

___

### getToken

▸ **getToken**(`env?`): `Promise`\<`string`\>

Returns the cached valid access token if available.
If the token is not available and the autoRefresh option is set to true, this method performs authentication and then returns the token.
If no token is available and autoRefresh is false, it throws an Error.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `env` | `string` | `"production"` | [experimental] : environment to get the token from, default is production |

#### Returns

`Promise`\<`string`\>

access token

#### Implementation of

[TokenProvider](../interfaces/CoreTypes.TokenProvider.md).[getToken](../interfaces/CoreTypes.TokenProvider.md#gettoken)
