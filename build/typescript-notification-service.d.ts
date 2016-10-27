
/// <reference path="../../bower_components/DefinitelyTyped/toastr/toastr.d.ts" />
/// <reference path="../../bower_components/typescript-globalization/build/typescript-globalization.d.ts" />
declare module 'Notification/Notification' {
	/// <reference path="../Typings/References.d.ts" />
	import NotificationKind = require("Notification/NotificationKind");
	import TimeSpan = require("Globalization/TimeSpan"); class Notification {
	    constructor(kind: NotificationKind, title: string, message: string);
	    /**
	     * Contains the toast that has been created by toastr.
	     */
	    private toast;
	    /**
	     * Gets or sets the kind of the notification.
	     */
	    kind: NotificationKind;
	    /**
	     * Gets or sets the title of the notification.
	     */
	    title: string;
	    /**
	     * Gets or sets the message of the notification.
	     */
	    message: string;
	    /**
	     * Gets or sets action that is executed when the notification is clicked.
	     */
	    click: (notification: Notification) => void;
	    /**
	     * Gets or sets the duration that the notification should be displayed. Set to zero time span if the notification should not hide automatically.
	     */
	    duration: TimeSpan;
	    /**
	     * Shows the notification.
	     */
	    show(): void;
	    /**
	     * Hides the notification.
	     */
	    hide(): void;
	}
	export = Notification;

}
declare module 'Notification/NotificationKind' {
	 enum NotificationKind {
	    /**
	     * A success notification.
	     */
	    Success = 0,
	    /**
	     * An informational notification.
	     */
	    Info = 1,
	    /**
	     * A warning noticiaton.
	     */
	    Warning = 2,
	    /**
	     * An error notification.
	     */
	    Error = 3,
	}
	export = NotificationKind;

}
declare module 'Notification/NotificationPosition' {
	 enum NotificationPosition {
	    TopRight = 0,
	    BottomRight = 1,
	    BottomLeft = 2,
	    TopLeft = 3,
	    TopFullWidth = 4,
	    BottomFullWidth = 5,
	    TopCenter = 6,
	    BottomCenter = 7,
	}
	export = NotificationPosition;

}
declare module 'Notification/NotificationService' {
	/// <reference path="../Typings/References.d.ts" />
	import NotificationPosition = require("Notification/NotificationPosition");
	import TimeSpan = require("Globalization/TimeSpan"); class NotificationService {
	    /**
	     * Gets a value that determines whether the close button is shown.
	     */
	    /**
	     * Sets a value that determines whether the close button is shown.
	     * @param {boolean} value The new value.
	     */
	    static isCloseButtonEnabled: boolean;
	    /**
	     * Gets a value that determines whether the newest notification is on top.
	     */
	    /**
	     * Sets a value that determines whether the newest notification is on top.
	     * @param {boolean} value The new value.
	     */
	    static isNewestNotificationOnTop: boolean;
	    /**
	     * Gets a value that determines whether the progress bar is shown.
	     */
	    /**
	     * Sets a value that determines whether the progress bar is shown.
	     * @param {boolean} value The new value.
	     */
	    static isProgressBarEnabled: boolean;
	    /**
	     * Gets the duration that the notification is shown until it is hidden.
	     */
	    /**
	     * Sets the duration that the notification is shown until it is hidden.
	     * @param {TimeSpan} value The new value.
	     */
	    static duration: TimeSpan;
	    /**
	     * Gets the position that the notifications are shown.
	     */
	    /**
	     * Sets the position that the notifications are shown.
	     * @param {NotificationPosition} value The new value.
	     */
	    static position: NotificationPosition;
	    /**
	     * Configures the notification service with default values.
	     */
	    static use(): void;
	}
	export = NotificationService;

}
