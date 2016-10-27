///<amd-module name='Notification/NotificationPosition'/>
define("Notification/NotificationPosition", ["require", "exports"], function (require, exports) {
    "use strict";
    /**
     * Represents the position of a notification.
     */
    var NotificationPosition;
    (function (NotificationPosition) {
        NotificationPosition[NotificationPosition["TopRight"] = 0] = "TopRight";
        NotificationPosition[NotificationPosition["BottomRight"] = 1] = "BottomRight";
        NotificationPosition[NotificationPosition["BottomLeft"] = 2] = "BottomLeft";
        NotificationPosition[NotificationPosition["TopLeft"] = 3] = "TopLeft";
        NotificationPosition[NotificationPosition["TopFullWidth"] = 4] = "TopFullWidth";
        NotificationPosition[NotificationPosition["BottomFullWidth"] = 5] = "BottomFullWidth";
        NotificationPosition[NotificationPosition["TopCenter"] = 6] = "TopCenter";
        NotificationPosition[NotificationPosition["BottomCenter"] = 7] = "BottomCenter";
    })(NotificationPosition || (NotificationPosition = {}));
    return NotificationPosition;
});
