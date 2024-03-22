[Firefly Services: Photoshop SDK Reference](../index.md) / ManageMissingFonts

# Enumeration: ManageMissingFonts

action to take if there are one or more missing fonts in the document

* fail - The job will not succeed and the status will be set to "failed", with the details of the error provided in the "details" section in the status
* useDefault - The job will succeed, however, by default all the missing fonts will be replaced with this font: ArialMT

## Table of contents

### Enumeration Members

- [FAIL](ManageMissingFonts.md#fail)
- [USE\_DEFAULT](ManageMissingFonts.md#use_default)

## Enumeration Members

### FAIL

• **FAIL** = ``"fail"``

___

### USE\_DEFAULT

• **USE\_DEFAULT** = ``"useDefault"``
