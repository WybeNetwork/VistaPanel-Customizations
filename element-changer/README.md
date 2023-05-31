# Element Changer  

## What does it do?  
As the name might suggest, it allows you to modify any VistaPanel widget element! _(Well, aside from the right sidebar ones.)_  
You are able to add, change and remove elements.

## Where should I put it?  
You can put it anywhere! We recommend avoiding the left advert area, as it will break the sidebar.

## How can I install it?   
You'll first need to declare an array with the name ``changeElements`` within a script tag.  

To add an element, you will need to create an object with the following properties that we'll analyze afterwards:
```js
{action: "add", name: "Element name", group: "Group name", link: "#link", icon: "URL to icon", search_text: "words for the search bar divided with spaces"}
```
To change an element, you will need to create an object with the following properties that we'll analyze afterwards:
```js
{action: "modify", name: "Element identifier", attr: "attribute", value: "new value"}
```
To remove an element, the object will be structured like this:
```js
{action: "remove", name: "Element identifier"}
```

### Properties

#### Common Properties
The action you wish to perform will be defined in ``action``. There are three actions supported, ``add``, ``modify`` and ``remove``.  
If you declare no action in your object the script will assume ``modify`` to be the intended action.

#### Adding Elements
In ``name``, you'll assign a value that corresponds with the name of the element exactly as you want it to appear on the panel.

In ``group``, you'll need to enter the name of the group in which you desire to add the new element in.  
The names might be different than the ones appearing on the panel, so we are listing them below:

|How they appear on the panel| What you'll need to enter  |
|----------------------------|----------------------------|
| Preferences                | preferences                |
| Files                      | files                      |
| Databases                  | databases                  |
| Domains                    | domains                    |
| Email                      | email                      |
| Metrics                    | metrics                    |
| Security                   | security                   |
| Software                   | software                   |
| Advanced                   | advanced                   |
| Softaculous Apps Installer | soft_div                   |
| Support                    | support                    |

``link`` contains the URL you wish for your new element to have. 

``icon`` holds the full URL to the image you wish your new element to have as an icon. 

Finally, you can enter any text in ``search_text`` that will be used for the search utility the panel offers (to locate your element). Words are divided by spaces.

#### Changing Elements
In `name`, you'll assign an identifier that corresponds with the table below.
Look up the name of the item you want to change _as it appears on the panel_, then assign the **identifier** of said item name to the `name` property.

| Group       | Item name                  | Identifier                |
|-------------|----------------------------|---------------------------|
| preferences | Change Password            | change_password           |
| preferences | Change Language            | change_language           |
| preferences | Update Contact Email       | contact_information       |
| preferences | Getting Started            | backup_wizard             |
| preferences | Account Upgrades           | two_factor_authentication |
| preferences | Account Settings           | user_manager              |
| files       | Online File Manager        | file_manager              |
| files       | Directory Privacy          | directory_privacy         |
| files       | Disk Usage                 | disk_usage                |
| files       | FTP Accounts               | ftp_accounts              |
| files       | Free FTP Software          | ftp_connections           |
| files       | Backups                    | backup                    |
| databases   | phpMyAdmin                 | php_my_admin              |
| databases   | MySQL Databases            | mysql_databases           |
| databases   | Remote MySQL               | remote_mysql              |
| databases   | PostgreSQL Databases       | postgresql_databases      |
| domains     | Addon Domains              | addon_domains             |
| domains     | Sub Domains                | subdomains                |
| domains     | Aliases (Parked Domains)   | aliases                   |
| domains     | Redirects                  | redirects                 |
| email       | Email Accounts             | accounts                  |
| email       | Forwarders                 | forwarders                |
| email       | MX Entry                   | mx_entry                  |
| email       | SPF Records                | advanced_zone_editor      |
| email       | Webmail                    | email_filters             |
| metrics     | Account Statistics         | awstats                   |
| metrics     | Error Logs                 | errors                    |
| metrics     | General PHP Info           | php                       |
| metrics     | Access Logs                | raw_access                |
| security    | IP Blocker                 | ip_blocker                |
| security    | SSL/TLS                    | ssl_tls                   |
| software    | SiteBuilder                | sitereptile               |
| software    | Softaculous Apps Installer | softaculous               |
| software    | SEO Tools                  | attracta_seotips          |
| software    | Alter PHP Config           | multiphp_configuration    |
| software    | Select PHP Version         | lvephpsel                 |
| advanced    | Cron Jobs                  | cron_jobs                 |
| advanced    | CNAME Records              | simple_zone_editor        |
| advanced    | Error Pages                | error_pages               |
| soft_div    | Softaculous Apps Installer | soft_div_icons            |
| support     | Domain Types               | cloudflare_performance    |
| support     | Tutorials                  | cloudflare_analytics      |
| support     | Support Forum              | attracta_seotools         |
| support     | Create New Ticket          | createticket              |
| support     | Open Support Tickets       | ShowTickets               |
| support     | Closed Support Tickets     | api_shell                 |

##### Modifying Elements
``attr`` is the attribute you wish to modify. There are two main attributes:
``itemdesc`` and ``url``. 
The first defines the name the element will have on the panel, while the second, as you can tell by the name, defines the URL for it.

Finally, ``value`` holds the new value of the element you'll be changing, for example if your ``attr`` is ``url``, it would probably contain a value of ``"https://yourdomain.com"``.

### Examples
#### Adding Elements
An example that adds an element named ``Custom`` in ``Databases`` linking to ``https://yourdomain.com`` with an image and ``custom`` as its search text can be seen below:
```js
var changeElements = [
    {name: "Custom", action: "add", group: "databases", link: "https://yourdomain.com", icon: "https://seekicon.com/free-icon-download/database-cloud_1.png", search_text: "custom"}
];
```

#### Modifying Elements
An example of the code modifying the name and URL of ``Change Password`` to ``Your Domain`` and ``https://yourdomain.com`` respectively can be seen below:
```js
var changeElements = [
    {name: "change_password", action: "modify", attr: "itemdesc", value: "Your Domain"},
    {name: "change_password", action: "modify", attr: "url", value: "https://yourdomain.com"}
];

```
#### Removing Elements
Likewise, an example of removing ``MX Entry`` and ``CNAME Records`` is provided here:
```js
var changeElements = [
    {name: "mx_entry", action: "remove"}, // Removes "MX Entry"
    {name: "simple_zone_editor", action: "remove"} // Removes "CNAME Records
];
```

> **Note**  
> Objects are separated by commas, so don't forget to include them when adding a new one.

### What is all of this? Where is my ready-to-use code?
Please read the Properties section before attempting to make your own modifications.

We'll provide a ready code for adding our custom element from above, modifying the names and URLs of ``SiteBuilder`` and ``Softaculous Apps Installer``, and removing ``Access Logs`` and ``Remote MySQL``. Try it out in your panel (with the script, of course) to be able to better understand the process in adding your own objects.
```html
<script type="text/javascript">
var changeElements = [
    {name: "Custom", action: "add", group: "databases", link: "https://yourdomain.com", icon: "https://seekicon.com/free-icon-download/database-cloud_1.png", search_text: "custom"},
    {name: "sitereptile", action: "modify", attr: "itemdesc", value: "VistaPanel Themes"},
    {name: "sitereptile", action: "modify", attr: "url", value: "https://vpt.cdn.wybenetwork.com"},
    {name: "softaculous", action: "modify", attr: "itemdesc", value: "VistaPanel Customizations"},
    {name: "softaculous", action: "modify", attr: "url", value: "https://vpc.cdn.wybenetwork.com"},
    {name: "soft_div_icons", action: "modify", attr: "itemdesc", value: "VistaPanel Customizations"},
    {name: "soft_div_icons", action: "modify", attr: "url", value: "https://vpc.cdn.wybenetwork.com"},
    {name: "raw_access", action: "remove"},
    {name: "remote_mysql", action: "remove"}
];
</script>
```

### So where's that script, anyway?
Create a script tag with `src` pointing to `element-changer.js` or ``element-changer.min.js`` for the minified version.  

In case you do not know how to do that or prefer to use a ready code, we have provided it below, along with an explanation as to the reason why GitHub's RAW file output cannot be used.

###  Content-Type Header Errors
The RAW option on GitHub can return an incorrect Content-Type header which makes the code not load at all.  
To solve this, we need an external service which adds the correct type, like jsDelivr, or our CDN.

The code, using jsDelivr:
```html
<script src="https://cdn.jsdelivr.net/gh/WybeNetwork/VistaPanel-Customizations@2.3.2/element-changer/element-changer.js" type="text/javascript"></script>
```

Alternatively, you can use our CDN:
```html
<script src="https://vpc.cdn.wybenetwork.com/element-changer/element-changer.js" type="text/javascript"></script>
```

A full code utilizing our example and our CDN:
```html
<script type="text/javascript">
var changeElements = [
    {name: "Custom", action: "add", group: "databases", link: "https://yourdomain.com", icon: "https://seekicon.com/free-icon-download/database-cloud_1.png", search_text: "custom"},
    {name: "sitereptile", action: "modify", attr: "itemdesc", value: "VistaPanel Themes"},
    {name: "sitereptile", action: "modify", attr: "url", value: "https://vpt.cdn.wybenetwork.com"},
    {name: "softaculous", action: "modify", attr: "itemdesc", value: "VistaPanel Customizations"},
    {name: "softaculous", action: "modify", attr: "url", value: "https://vpc.cdn.wybenetwork.com"},
    {name: "soft_div_icons", action: "modify", attr: "itemdesc", value: "VistaPanel Customizations"},
    {name: "soft_div_icons", action: "modify", attr: "url", value: "https://vpc.cdn.wybenetwork.com"},
    {name: "raw_access", action: "remove"},
    {name: "remote_mysql", action: "remove"}
];
</script>
<script src="https://vpc.cdn.wybenetwork.com/element-changer/element-changer.js" type="text/javascript"></script>
```

## Changelog
* Created on 15th September 2022 by [Anyx](https://github.com/4yx)
* Modified on 15th September 2022 by [PlanetCloud](https://github.com/PlanetTheCloud)
* Modified on 19th September 2022 by [PlanetCloud](https://github.com/PlanetTheCloud)
* Last modified on 1st May 2022 by [PlanetCloud](https://github.com/PlanetTheCloud)