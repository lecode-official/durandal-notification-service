
///<amd-module name='durandal-notification-service/NotificationService'/>

// #region Import Directives

/// <reference types="durandal-globalization" />

import NotificationPosition = require("durandal-notification-service/NotificationPosition");
import TimeSpan = require("durandal-globalization/TimeSpan");
import toastr = require("toastr");

// #endregion

/**
 * Represents a service that can be used to show notifications and queue them.
 */
class NotificationService {

    // #region Public Static Properties

    /**
     * Gets a value that determines whether the close button is shown.
     */
    public static get isCloseButtonEnabled(): boolean {
        if (!toastr.options.closeButton)
            return false;
        return toastr.options.closeButton;
    }
    
    /**
     * Sets a value that determines whether the close button is shown.
     * @param {boolean} value The new value. 
     */
    public static set isCloseButtonEnabled(value: boolean) {
        toastr.options.closeButton = value;
    }
    
    /**
     * Gets a value that determines whether the newest notification is on top.
     */
    public static get isNewestNotificationOnTop(): boolean {
        if (!toastr.options.newestOnTop)
            return false;
        return toastr.options.newestOnTop;
    }
    
    /**
     * Sets a value that determines whether the newest notification is on top.
     * @param {boolean} value The new value. 
     */
    public static set isNewestNotificationOnTop(value: boolean) {
        toastr.options.newestOnTop = value;
    }
    
    /**
     * Gets a value that determines whether the progress bar is shown.
     */
    public static get isProgressBarEnabled(): boolean {
        if (!toastr.options.progressBar)
            return false;
        return toastr.options.progressBar;
    }
    
    /**
     * Sets a value that determines whether the progress bar is shown.
     * @param {boolean} value The new value. 
     */
    public static set isProgressBarEnabled(value: boolean) {
        toastr.options.progressBar = value;
    }

    /**
     * Gets the duration that the notification is shown until it is hidden.
     */
    public static get duration(): TimeSpan {
        if (!toastr.options.timeOut)
            return TimeSpan.fromMilliseconds(0);
        return TimeSpan.fromMilliseconds(toastr.options.timeOut);
    }
    
    /**
     * Sets the duration that the notification is shown until it is hidden.
     * @param {TimeSpan} value The new value. 
     */
    public static set duration(value: TimeSpan) {
        toastr.options.timeOut = value.totalMilliseconds;
    }

    /**
     * Gets the position that the notifications are shown.
     */
    public static get position(): NotificationPosition {
        switch (toastr.options.positionClass) {
            case "toast-top-right":
                return NotificationPosition.TopRight;
            case "toast-bottom-right":
                return NotificationPosition.BottomRight;
            case "toast-bottom-left":
                return NotificationPosition.BottomLeft;
            case "toast-top-left":
                return NotificationPosition.TopLeft;
            case "toast-top-full-width":
                return NotificationPosition.TopFullWidth;
            case "toast-bottom-full-width":
                return NotificationPosition.BottomFullWidth;
            case "toast-top-center":
                return NotificationPosition.TopCenter;
            default:
                return NotificationPosition.BottomCenter;
        }
    }
    
    /**
     * Sets the position that the notifications are shown.
     * @param {NotificationPosition} value The new value. 
     */
    public static set position(value: NotificationPosition) {
        switch (value) {
            case NotificationPosition.TopRight:
                toastr.options.positionClass = "toast-top-right";
            case NotificationPosition.BottomRight:
                toastr.options.positionClass = "toast-bottom-right";
            case NotificationPosition.BottomLeft:
                toastr.options.positionClass = "toast-bottom-left";
            case NotificationPosition.TopLeft:
                toastr.options.positionClass = "toast-top-left";
            case NotificationPosition.TopFullWidth:
                toastr.options.positionClass = "toast-top-full-width";
            case NotificationPosition.BottomFullWidth:
                toastr.options.positionClass = "toast-bottom-full-width";
            case NotificationPosition.TopCenter:
                toastr.options.positionClass = "toast-top-center";
            default:
                toastr.options.positionClass = "toast-bottom-center";
        }
    }

    // #endregion

    // #region Public Static Methods
    
    /**
     * Configures the notification service with default values.
     */
    public static use() {

        // Sets the default values for toastr
        toastr.options.closeButton = true;
        toastr.options.newestOnTop = true;
        toastr.options.positionClass = "toast-bottom-right";
        toastr.options.progressBar = true;
        toastr.options.timeOut = 6000;
    }

    // #endregion
}

// Exports the module, so that it can be loaded by Require
export = NotificationService;