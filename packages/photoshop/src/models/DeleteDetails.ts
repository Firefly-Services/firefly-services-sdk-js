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
 * Indicates you want to delete the layer, identified by the id or name. Note the object is currently empty but leaves room for further enhancements
 */
export type DeleteDetails = {
    /**
     * Indicates that, while deleting a group layer also delete it's children.
     */
    includeChildren?: boolean;
    /**
     * The layer id
     */
    id?: number;
    /**
     * The layer name. You can identify a layer by id or name. That makes either id or name a required field.
     */
    name?: string;
};
