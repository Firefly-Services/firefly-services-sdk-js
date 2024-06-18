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
/**
 * the layer type
 *
 * * layer - a pixel layer
 * * textLayer - a text layer
 * * adjustmentLayer - an adjustment layer
 * * layerSection - a grouping layer
 * * smartObject - a smart object
 * * backgroundLayer - a background layer
 * * fillLayer - a fill layer
 */
export enum LayerType {
    LAYER = "layer",
    TEXT_LAYER = "textLayer",
    ADJUSTMENT_LAYER = "adjustmentLayer",
    SMART_OBJECT = "smartObject",
    FILL_LAYER = "fillLayer",
    BACKGROUND_LAYER = "backgroundLayer",
    LAYER_SECTION = "layerSection"
}
