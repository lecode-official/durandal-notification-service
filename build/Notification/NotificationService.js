///<amd-module name='Notification/NotificationService'/>
define("Notification/NotificationService", ["require", "exports", "Notification/NotificationPosition", "Globalization/TimeSpan", "toastr"], function (require, exports, NotificationPosition, TimeSpan, toastr) {
    "use strict";
    // #endregion
    /**
     * Represents a service that can be used to show notifications and queue them.
     */
    var NotificationService = (function () {
        function NotificationService() {
        }
        Object.defineProperty(NotificationService, "isCloseButtonEnabled", {
            // #region Public Static Properties
            /**
             * Gets a value that determines whether the close button is shown.
             */
            get: function () {
                if (!toastr.options.closeButton)
                    return false;
                return toastr.options.closeButton;
            },
            /**
             * Sets a value that determines whether the close button is shown.
             * @param {boolean} value The new value.
             */
            set: function (value) {
                toastr.options.closeButton = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NotificationService, "isNewestNotificationOnTop", {
            /**
             * Gets a value that determines whether the newest notification is on top.
             */
            get: function () {
                if (!toastr.options.newestOnTop)
                    return false;
                return toastr.options.newestOnTop;
            },
            /**
             * Sets a value that determines whether the newest notification is on top.
             * @param {boolean} value The new value.
             */
            set: function (value) {
                toastr.options.newestOnTop = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NotificationService, "isProgressBarEnabled", {
            /**
             * Gets a value that determines whether the progress bar is shown.
             */
            get: function () {
                if (!toastr.options.progressBar)
                    return false;
                return toastr.options.progressBar;
            },
            /**
             * Sets a value that determines whether the progress bar is shown.
             * @param {boolean} value The new value.
             */
            set: function (value) {
                toastr.options.progressBar = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NotificationService, "duration", {
            /**
             * Gets the duration that the notification is shown until it is hidden.
             */
            get: function () {
                if (!toastr.options.timeOut)
                    return TimeSpan.fromMilliseconds(0);
                return TimeSpan.fromMilliseconds(toastr.options.timeOut);
            },
            /**
             * Sets the duration that the notification is shown until it is hidden.
             * @param {TimeSpan} value The new value.
             */
            set: function (value) {
                toastr.options.timeOut = value.totalMilliseconds;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NotificationService, "position", {
            /**
             * Gets the position that the notifications are shown.
             */
            get: function () {
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
            },
            /**
             * Sets the position that the notifications are shown.
             * @param {NotificationPosition} value The new value.
             */
            set: function (value) {
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
            },
            enumerable: true,
            configurable: true
        });
        // #endregion
        // #region Public Static Methods
        /**
         * Configures the notification service with default values.
         */
        NotificationService.use = function () {
            // Sets the default values for toastr
            toastr.options.closeButton = true;
            toastr.options.newestOnTop = true;
            toastr.options.positionClass = "toast-bottom-right";
            toastr.options.progressBar = true;
            toastr.options.timeOut = 6000;
        };
        return NotificationService;
    }());
    return NotificationService;
});
