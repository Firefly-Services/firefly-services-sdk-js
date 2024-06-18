[Firefly Services: Common APIs SDK Reference](../index.md) / [CoreTypes](../modules/CoreTypes.md) / TokenProvider

# Interface: TokenProvider

[CoreTypes](../modules/CoreTypes.md).TokenProvider

A simple interface to provide the access token, this can be used to provide the access token from different sources.

## Implemented by

- [`ServerToServerTokenProvider`](../classes/ServerToServerTokenProvider.md)

## Table of contents

### Methods

- [getToken](CoreTypes.TokenProvider.md#gettoken)

## Methods

### getToken

▸ **getToken**(`env`): `Promise`\<`string`\>

returns the access token for the application to interact with the Firefly services.

#### Parameters

| Name | Type |
| :------ | :------ |
| `env` | `undefined` \| `string` |

#### Returns

`Promise`\<`string`\>

access token
