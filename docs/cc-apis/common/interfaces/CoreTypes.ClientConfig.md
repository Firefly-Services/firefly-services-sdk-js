[Firefly Services: Common APIs SDK Reference](../index.md) / [CoreTypes](../modules/CoreTypes.md) / ClientConfig

# Interface: ClientConfig

[CoreTypes](../modules/CoreTypes.md).ClientConfig

Common Client configuration to interact with the Service APIs.

## Table of contents

### Properties

- [clientId](CoreTypes.ClientConfig.md#clientid)
- [tokenProvider](CoreTypes.ClientConfig.md#tokenprovider)

## Properties

### clientId

• **clientId**: `string`

The value to be passed as x-api-key in headers for all requests

___

### tokenProvider

• **tokenProvider**: [`TokenProvider`](CoreTypes.TokenProvider.md)

Implementation of TokenProvider to get the access token
