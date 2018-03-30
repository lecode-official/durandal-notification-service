
///<amd-module name='durandal-notification-service/Notification'/>

// #region Import Directives

/// <reference types="durandal-globalization" />

import NotificationKind = require("durandal-notification-service/NotificationKind");
import TimeSpan = require("durandal-globalization/TimeSpan");
import toastr = require("toastr");

// #endregion

/**
 * Represents a notification that can be shown by the notification service.
 */
class Notification {

    // #region Constructors

    constructor(kind: NotificationKind, title: string, message: string) {

        // Sets the provided values
        this.kind = kind;
        this.title = title;
        this.message = message;

        // Gets the default configuration from the notification service.
        this.click
    }

    // #endregion

    // #region Private Fields

    /**
     * Contains the toast that has been created by toastr.
     */
    private toast: any;

    // #endregion

    // #region Public Properties

    /**
     * Gets or sets the kind of the notification.
     */
    public kind: NotificationKind;

    /**
     * Gets or sets the title of the notification.
     */
    public title: string;
    
    /**
     * Gets or sets the message of the notification.
     */
    public message: string;
    
    /**
     * Gets or sets action that is executed when the notification is clicked.
     */
    public click: (notification: Notification) => void;

    /**
     * Gets or sets the duration that the notification should be displayed. Set to zero time span if the notification should not hide automatically.
     */
    public duration: TimeSpan;

    // #endregion

    // #region Public Methods
    
    /**
     * Shows the notification.
     */
    public show() {

        // Creates the toastr options
        var toastrOptions: ToastrOptions = {};
        if (!!this.duration) {
            toastrOptions.timeOut = this.duration.totalMilliseconds;
        }
        if (!!this.click) {
            toastrOptions.onclick = () => this.click(this);
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
    }

    /**
     * Hides the notification.
     */
    public hide() {
        if (!!this.toast) {
            toastr.clear(this.toast);
        }
    }

    // #endregion

}

// Exports the module, so that it can be loaded by Require
export = Notification;