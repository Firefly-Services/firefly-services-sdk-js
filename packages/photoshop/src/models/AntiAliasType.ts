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
 * The text's aliasing type which determines the smoothness of the jagged edges of the text.
 */
export enum AntiAliasType {
    ANTI_ALIAS_NONE = "antiAliasNone",
    ANTI_ALIAS_SHARP = "antiAliasSharp",
    ANTI_ALIAS_CRISP = "antiAliasCrisp",
    ANTI_ALIAS_STRONG = "antiAliasStrong",
    ANTI_ALIAS_SMOOTH = "antiAliasSmooth",
    ANTI_ALIAS_PLATFORM_LCD = "antiAliasPlatformLCD",
    ANTI_ALIAS_PLATFORM_GRAY = "antiAliasPlatformGray"
}
