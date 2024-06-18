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
import type { PublicBinaryInput } from "./PublicBinaryInput";
export type ObjectCompositeInputImage = {
    /**
     * An image of an object that needs to be rendered on a scene.
     */
    source: PublicBinaryInput;
    /**
     * Provide a mask that hides part of the object like the background.
     */
    mask?: PublicBinaryInput;
};
