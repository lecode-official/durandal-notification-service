
///<amd-module name='durandal-notification-service/NotificationKind'/>

/**
 * Represents the type of a notification.
 */
enum NotificationKind {

    /**
     * A success notification.
     */
    Success,

    /**
     * An informational notification.
     */
    Info,

    /**
     * A warning noticiaton.
     */
    Warning,

    /**
     * An error notification.
     */
    Error
}

// Exports the module, so that it can be loaded by Require
export = NotificationKind;