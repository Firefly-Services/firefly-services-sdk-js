[Firefly Services: Common APIs SDK Reference](../index.md) / [CoreTypes](../modules/CoreTypes.md) / ClientCredentials

# Interface: ClientCredentials

[CoreTypes](../modules/CoreTypes.md).ClientCredentials

Common client options to create Client with Credentials

## Table of contents

### Properties

- [clientId](CoreTypes.ClientCredentials.md#clientid)
- [clientSecret](CoreTypes.ClientCredentials.md#clientsecret)
- [scopes](CoreTypes.ClientCredentials.md#scopes)
- [serviceEnvironment](CoreTypes.ClientCredentials.md#serviceenvironment)

## Properties

### clientId

• **clientId**: `string`

The value to be passed as x-api-key in headers for all requests

___

### clientSecret

• **clientSecret**: `string`

The value to be used in generating the token provider

___

### scopes

• `Optional` **scopes**: `string`

scopes based on the applications being used
Firefly: `firefly_api, ff_apis`
ContentTagging: `openid, AdobeID, session, additional_info`
Lightroom: `openid, AdobeID, read_organizations`
Photoshop: `openid, AdobeID, read_organizations`

___

### serviceEnvironment

• `Optional` **serviceEnvironment**: `string`

Method to switch between different environments i.e. beta, prod etc

**`Experimental`**
