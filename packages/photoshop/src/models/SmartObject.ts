/*************************************************************************
 * ADOBE CONFIDENTIAL
 * ___________________
 *
 * Copyright 2024 Adobe Inc.
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
 * An object describing the attributes specific to creating or editing a smartObject.
 * SmartObject properties need the input smart object file to operate on, which can be obtained from Input block. Currently we support Embedded Smart Object only.So this block is optional. If you are creating a Linked Smart Object, this is a required block.
 */
export type SmartObject = {
    /**
     * Indicates if this Smart Object is linked. Currently we support Embedded Smart Object only which means "linked = false".
     */
    linked?: boolean;
};
