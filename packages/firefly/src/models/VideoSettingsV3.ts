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
import type { CameraMotion } from "./CameraMotion";
import type { ShotAngle } from "./ShotAngle";
import type { ShotSize } from "./ShotSize";
import type { VideoPromptStyle } from "./VideoPromptStyle";
export type VideoSettingsV3 = {
    /**
     * The camera motion control.
     */
    cameraMotion?: CameraMotion;
    /**
     * The style of the generated video.
     */
    promptStyle?: VideoPromptStyle;
    /**
     * The shot angle control.
     */
    shotAngle?: ShotAngle;
    /**
     * The shot size control.
     */
    shotSize?: ShotSize;
};
