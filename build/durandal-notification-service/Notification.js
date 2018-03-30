///<amd-module name='durandal-notification-service/Notification'/>
define("durandal-notification-service/Notification", ["require", "exports", "durandal-notification-service/NotificationKind", "toastr"], function (require, exports, NotificationKind, toastr) {
    "use strict";
    // #endregion
    /**
     * Represents a notification that can be shown by the notification service.
     */
    var Notification = /** @class */ (function () {
        // #region Constructors
        function Notification(kind, title, message) {
            // Sets the provided values
            this.kind = kind;
            this.title = title;
            this.message = message;
            // Gets the default configuration from the notification service.
            this.click;
        }
        // #endregion
        // #region Public Methods
        /**
         * Shows the notification.
         */
        Notification.prototype.show = function () {
            var _this = this;
            // Creates the toastr options
            var toastrOptions = {};
            if (!!this.duration) {
                toastrOptions.timeOut = this.duration.totalMilliseconds;
            }
            if (!!this.click) {
                toastrOptions.onclick = function () { return _this.click(_this); };
            }
            // Executes the toast method
            switch (this.kind) {
                case NotificationKind.Success:
                    this.toast = toastr.success(this.message, this.title, toastrOptions);
                    break;
                case NotificationKind.Info:
                    this.toast = toastr.info(this.message, this.title, toastrOptions);
                    break;
                case NotificationKind.Warning:
                    this.toast = toastr.warning(this.message, this.title, toastrOptions);
                    break;
                case NotificationKind.Error:
                    this.toast = toastr.error(this.message, this.title, toastrOptions);
                    break;
            }
        };
        /**
         * Hides the notification.
         */
        Notification.prototype.hide = function () {
            if (!!this.toast) {
                toastr.clear(this.toast);
            }
        };
        return Notification;
    }());
    return Notification;
});
