/*************************************************************************
 * ADOBE CONFIDENTIAL
 * ___________________
 *
 * Copyright 2025 Adobe
 * All Rights Reserved.
 *
 * NOTICE: All information contained herein is, and remains
 * the property of Adobe and its suppliers, if any. The intellectual
 * and technical concepts contained herein are proprietary to Adobe
 * and its suppliers and are protected by all applicable intellectual
 * property laws, including trade secret and copyright laws.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe.

 **************************************************************************/
/**
 * Smart object details
 */
export type SmartObjectDetails = {
    /**
     * Desired image format for the smart object
     */
    type?: string;
    /**
     * Indicates if this Smart Object is linked. Currently we support Embedded Smart Object only which means "linked = false"
     */
    linked?: boolean;
    /**
     * Name of the embedded or linked smart object. Currently we support Embedded Smart Object only
     */
    name?: string;
    /**
     * Attribute for only Linked Smart Object. Indicates the relative path for the Linked Smart Object
     */
    path?: string;
    /**
     * Attribute for only Embedded Smart Object. Indicates instance id of this embedded smart object. This id is unique for different smart object instances. InstanceId may have value as unknown, if the embedded smart object is generated using any other application than adobe applications like PS, Lr etc. We are deriving the value 'InstanceID' from the RAW Data of the document.
     */
    instanceId?: string;
};
