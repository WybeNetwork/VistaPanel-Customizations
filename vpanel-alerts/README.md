# vPanel Alerts
Alert system for MyOwnFreeHost users to send notifications or alerts with clickable action to users who are logged into the vPanel. This system is compatible with all of the [vPanel Themes](https://github.com/WybeNetwork/VistaPanel-Themes) and also adds some extra css.

## Features
- Send alerts to logged-in users
- Set delay in milliseconds to display alert after that delay
- Set interval in milliseconds to automatically close alert after that interval
- Display only once to each user
- Display to limited number of users (by list of username)
- Set custom icon, title and description for alert
- Close button to close the alert

## How to Install?
Add this code in the footer advert area to load the script,

You can use one of the two options to load script

#### Our CDN
```js
<script src="https://vpc.cdn.wybenetwork.com/vpanel-alerts/vpanel-alerts.min.js" type="text/javascript"></script>
```
#### Manual
Download the latest available version of this script and place it on your website in your desired directory.

In this code example, I have added the script to the root directory of my website.
```js
<script src="https://example.tld/vpanel-alerts.min.js" type="text/javascript"></script>
```
Now instantiate an object as `wnAlerts` with options to generate an alert.

Example configuration
```html
<script type="text/javascript">
    // creating object
    const wnAlerts = new vPanelAlerts([
        {
            id: '1', // must be unique (not used before with old alerts)
            title: 'test', // title for your alert (required)
            icon: 'https://svgshare.com/i/njE.svg', // icon link of your alert (required)
            desc: 'this is a test', // content of your alert (required)
            delay: 1000, // set delay in ms to show alert after that time (optional)
            interval: 5000, // set interval in ms to close alert after that time (optional)
            user: ['prefx_xxxxxxxx', 'prefx_xxxxxxx2'], // set list of users to show alert to only those users (optional)
            url: 'https://wybenetwork.com' // set link to open when alert is clicked (optional)
        },
        {
            id: '2', // must be unique (not used before with old alerts)
            title: 'test', // title for your alert (required)
            icon: 'https://svgshare.com/i/njE.svg', // icon link of your alert (required)
            desc: 'this is a test', // content of your alert (required)
        }, // multiple alerts can be setup but id should be unique not used before with any alert
    ]);
</script>
```
### Options `(Object)`
| Properties 	    | Priority 	 | Values 	                                                      |
|-----------------|------------|---------------------------------------------------------------|
| id `string`     | optional   | id: '123' <br>`(by default 0 is used)`                        |
| title `string`	 | required	  | title: 'alert title'	                                         |
| icon `string`	  | required	  | icon: 'https://example.tld/alert-icon.png'	                   |
| desc	 `string`  | required	  | desc: 'alert content'	                                        |
| url `string`	   | optional	  | url: 'https://example.tld/action-on-alert-click'	             |
| user `array`	   | optional	  | user: ['prefx_xxxxxx', 'prefx_xxxxx2'] <br> `default is none`	 |
| delay `int`	    | optional	  | delay: 1000 <br> ```Delay in ms (default is 0)```	            |
| interval `int`	 | optional	  | interval: 3000 <br> ```Interval in ms (default is none)``` 	  |

> **NOTE: You must use different id for different notifications generated**

## Changelog
```html
Version 1.0.1 | October 28th, 2022
- Complete Re-write of Old Version
- Removed Usage of Web Notification API and Shifted to Alerts system
- Send alerts to logged-in users
- Set delay in milliseconds to display alert after that delay
- Set interval in milliseconds to automatically close alert after that interval
- Display only once to each user
- Display to limited number of users (by list of username)
- Set custom icon, title and description for alert
- Close button to close the alert
```
```html
Version 1.0.0 | October 16th, 2022
- Initial Release
- Push notifications to logged-in users
- Set interval to automatically close notification
- Show new notification for only once to each logged-in user
```