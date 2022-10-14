# Theme Switcher

## What does it do?
As the name suggests, it allows you to add no. of themes with an option for your user to switch between different vPanel themes.

## Features
- Set Default Theme
- Use custom domain or our CDN for themes (Supports Normal, Special & Lite Themes)
- Display in one of the two places (Footer OR User nav bar)
- Uses Cookies to keep the user choice saved

## How to install?
First load the script in footer advert area.

You can use one of the two options for installing this script on your vPanel.

### Our CDN
```javascript
<script src="https://vpc.cdn.wybenetwork.com/theme-switcher/theme-switcher.min.js" type="text/javascript"></script>
```

### Manual
Download the latest available version of this script and put it on your website.
E.g., I place `theme-switcher.min.js` file in my root folder, then I'll add it like,
```javascript
<script src="https://example.tld/theme-switcher.min.js" type="text/javascript"></script>
```

After that we must setup the script. 

Now, we will make an object with name `wnThemeSwitcher`.

Let's say I want `dark-discord` theme as default theme and allow users to switch between themes which are `gradient-blue (Normal Theme), light (Normal Theme), lightspace-blue (Special Theme)`. You can check the type of any theme in our documentation at https://docs.wybenetwork.com/vistapanel-themes/#/themes-name

Example Configuration:
```javascript
<script type="text/javascript">
    // object must be created with this name
    const wnThemeSwitcher = new ThemeSwitcher({
        // Add theme folder name, name and type
        'gradient-blue': { // must be folder name
            title: 'Gradient Blue', // any name you want to show on user end
            type: 'Normal' // type of theme
        },
        'light': {
            title: 'Light Theme',
            type: 'Normal'
        },
        'lightspace-blue': {
            title: 'Lightspace Blue',
            type: 'Special'
        },
        }, { // set options for themes
        baseURL: 'https://example.tld/', // optional, default is https://vpt.cdn.wybenetwork.com/
        position: 'usernav', // optional, default is bottom (footer area)
        default: { // optional, use to setup the default theme
            'dark-discord': 'Normal' // 'theme-dirname': 'type of theme' 
        }
    })
</script>
```

## Options
| Properties  	 | Priority 	 | Values 	                                                                                                     |
|---------------|------------|--------------------------------------------------------------------------------------------------------------|
| themeList 	   | required   | {<br/>'theme-dirname': {<br/> title: 'Any Name for Theme'<br/>type: 'Theme Type'<br/>}<br/>}                 |
| options	      | optional	  | {<br/>baseURL: 'https://example.tld/' <br/>position: 'bottom' <br/> default: {<br/>'theme-dirname': 'type'<br/>}<br/>}	 |                

## Properties
### themeList `(Object), Required`

check https://docs.wybenetwork.com/vistapanel-themes/#/themes-name for theme directory names and their types.

#### theme-directory-name `(Object)`
It can have two properties title & type. 

##### title `(string)`
Title can be any name you want to show to user on frontend. 

##### type `(string)`
Type must be the type of the theme you are allowing user to choose.

### options `(Object), Optional`
These options are optional, if you don't set them then default one will be used.

#### baseURL `(String)`
By default it is pointing towards our CDN. You can use this option to serve themes from your custom domain.

#### position `(String)`
By default it is set to `bottom`. You can use this option to change the location of theme switcher. Only two values are supported
`usernav` & `bottom`.

- `usernav`, if position option is set to this value then theme switcher will be shown in user nav menu.
- `bottom`, if position option is set to this value then theme switcher will be shown in footer area.

#### default `(Object)`
Only one property should be provided for this object to set the default theme.

##### theme-directory-name `(String)`
The value set for this option should be the type of the theme.

In properties `theme-directory-name` or `theme-dirname` should be replaced with the name of the theme directory which you want to set.

## Changelog
```html
Version 2.0.0 | October 14th, 2022
- Complete Re-write by AADev
- Added support for multiple positions
- Improved support for themes
- Added support for default theme.
```

```html
Version 1.0.1 | June 23rd, 2021
- Bugs fixes by AADev
```

```html
Version 1.0.0 | December 29th, 2018
- Initial release by RanaKHAS
```