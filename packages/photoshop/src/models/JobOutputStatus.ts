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
 * the child job status
 * * pending - request has been accepted and is waiting to start
 * * running - the child job is running
 * * uploading - files have been generated and are uploading to destination
 * * succeeded - the child job has succeeded
 * * failed - the child job has failed
 */
export enum JobOutputStatus {
    PENDING = "pending",
    RUNNING = "running",
    UPLOADING = "uploading",
    SUCCEEDED = "succeeded",
    FAILED = "failed"
}
