# vPanel Notifications
> :warning: Browser support is limited. For complete details of browser support check [Notification Web API Docs](https://developer.mozilla.org/en-US/docs/Web/API/notification#see_also)

Push notification system for MyOwnFreeHost users to send notifications with clickable action to users who are logged into the vPanel. This system is based on the [Notification Web API](https://developer.mozilla.org/en-US/docs/Web/API/notification) of JavaScript.

## Features
- Send Push Notifications to Logged-in Users
- Set Interval to automatically close notification after that interval
- Unique identifier to show notification only once to each user.

## How to Install?
Add this code in the footer advert area to load the script,

You can use one of the two options to load script

#### Our CDN
```html
<script src="https://vpc.cdn.wybenetwork.com/vPanel-notifications/vpanel-notifications.min.js" type="text/javascript"></script>
```

#### Manual
Download the latest available version of this script and place it on your website in your desired directory.

In this code example, I have added the script to the root directory of my website.
```html
<script src="https://example.tld/vpanel-notifications.min.js" type="text/javascript"></script>
```

Now instantiate an object with options to generate a notification.

Example configuration
```html
<script type="text/javascript">
    // creating object
    const wnNotif = new vPanelNotifications({
       id: '1', // must be unique (not used before with old notification) 
       title: 'Notification Title', // title for your notification (required)
       icon: 'https://example.tld/notification-icon.png', // icon link of your notification (required)
       desc: 'Content of Notification', // content of your notification (required)
       action: 'https://example.tld/action-on-link-click' // link to goto when user clicks on the notification (optional)
    });
</script>
```

### Options `(Object)`
| Properties 	     | Priority 	 | Values 	                                            |
|------------------|------------|-----------------------------------------------------|
| id `string`       | required   | id: '123'                                           |
| title `string`	  | required	  | title: 'notification title'	                        |
| icon `string`	   | required	  | icon: 'https://example.tld/notification-icon.png'	  |
| desc	 `string`   | required	  | desc: 'notification content'	                       |
| action `string`	 | optional	  | action: 'https://example.tld/action-on-link-click'	 |
| lang `string`	   | optional	  | lang: 'en-US'	                                      |
| dir `string`	    | optional	  | dir: 'ltr' <br> ```values can be 'ltr' or 'rtl'```	 |
| interval `int`	  | optional	  | interval: 1000 <br> ```Interval in ms``` 	          |

> **NOTE: You must use different id for different notifications generated**

You can generate new notification by changing the value of old notification and assigning new id to it.

## Changelog
```html
Version 1.0.0 | October 16th, 2022
- Initial Release
- Push notifications to logged-in users
- Set interval to automatically close notification
- Show new notification for only once to each logged-in user
```