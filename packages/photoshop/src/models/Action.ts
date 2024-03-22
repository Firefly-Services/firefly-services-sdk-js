/*************************************************************************
 * ADOBE CONFIDENTIAL
 * ___________________
 *
 * Copyright 2024 Adobe
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

import type { StorageType } from "./StorageType";
/**
 * An object describing the input Photoshop Actions to play.
 */
export type Action = {
    storage?: StorageType;
    /**
     * Presigned GET URL
     */
    href?: string;
    /**
     * If you only want to execute a particular action, you may specify which action to play from the ActionSet
     */
    actionName?: string;
};
