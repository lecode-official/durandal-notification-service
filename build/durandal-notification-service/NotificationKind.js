///<amd-module name='durandal-notification-service/NotificationKind'/>
define("durandal-notification-service/NotificationKind", ["require", "exports"], function (require, exports) {
    "use strict";
    /**
     * Represents the type of a notification.
     */
    var NotificationKind;
    (function (NotificationKind) {
        /**
         * A success notification.
         */
        NotificationKind[NotificationKind["Success"] = 0] = "Success";
        /**
         * An informational notification.
         */
        NotificationKind[NotificationKind["Info"] = 1] = "Info";
        /**
         * A warning noticiaton.
         */
        NotificationKind[NotificationKind["Warning"] = 2] = "Warning";
        /**
         * An error notification.
         */
        NotificationKind[NotificationKind["Error"] = 3] = "Error";
    })(NotificationKind || (NotificationKind = {}));
    return NotificationKind;
});
