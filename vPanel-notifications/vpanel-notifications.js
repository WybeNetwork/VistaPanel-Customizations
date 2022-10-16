/*!
* Project: VistaPanel Notifications
* Version: 1.0.0
* Description: Allows you to send push notifications to user who is logged in to vPanel
* Author: Wybe Network (https://wybenetwork.com/)
* Created: AADev (October 16th, 2022)
* Updated: AADev (October 16th, 2022)
* Docs: https://docs.wybenetwork.com/
*
* DO NOT REMOVE CREDITS
* */

class vPanelNotifications {
    #id;
    #title;
    #icon;
    #desc;
    #lang;
    #dir;
    #action;
    #interval;

    constructor(args={}) {
        this.#id = args.id;
        this.#title = args.title;
        this.#icon = args.icon;
        this.#desc = args.desc;
        this.#action = args.action;
        this.#lang = args.lang;
        this.#dir = args.dir;
        this.#interval = args.interval;

        if (!this.#title || !this.#desc || !this.#id) throw "Missing Required Options";

        this.#getPerms();
    }

    #showNotification() {
        const options = {
            body: this.#desc,
            icon: this.#icon,
            vibrate: true
        };
        if (this.#lang) options.lang = this.#lang;
        if (this.#dir) options.dir = this.#dir;

        const notif = new Notification(this.#title, options);

        if (this.#action) {
            notif.addEventListener('click', () => {
                window.open(this.#action, '_blank');
            });
        }

        localStorage.setItem('wnNotification', this.#id);

        setTimeout(() => {
            notif.close();
        }, (this.#interval) ?? 10000);
    }

    #getPerms() {
        const id = localStorage.getItem('wnNotification');
        if (id !== this.#id) {
            if (!("Notification" in window)) {
                throw "Browser Doesn't Support Notifications";
            } else if (Notification.permission === "granted") {
                this.#showNotification();
            } else if (Notification.permission !== "denied") {
                Notification.requestPermission().then((permission) => {
                    if (permission === "granted") this.#showNotification();
                });
            } else {
                throw "Permissions denied for notifications";
            }
        }
    }
}