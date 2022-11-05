# Theme Switcher
> **Warning**:  
> This documentation is for version 2 of Theme Switcher. If you are still using Theme switcher version 1, then refer to [this](readme_v1.md).

## What does it do?
As the name suggests, it allows you to add vPanel themes, with an option for your user to switch between different ones.

## Features
- Set a default theme
- Use custom domain or our CDN for themes (Supports Normal, Special & Lite Themes)
- Display in one of the two places (Footer OR User navbar)
- Uses cookies to keep the user choice saved

## What Normal, Special & Lite Types Mean?
**Normal themes** in our themes repository have two stylesheets `styles.css` & `icon_spritemap.css`

**Lite & Special themes** have only one file. For **lite themes** the name of file is `styles.css` and for **Special themes** the name of file is `panel.css`

## How to install?
First load the script in the footer advert area.

You can use one of the two options for installing this script on your vPanel.

### Our CDN
```javascript
<script src="https://vpc.cdn.wybenetwork.com/theme-switcher/theme-switcher.min.js" type="text/javascript"></script>
```

### Manual
Download the latest available version of this script and put it on your website.
E.g., I place `theme-switcher.min.js` file in my root folder, then I'll add it like this:
```javascript
<script src="https://example.tld/theme-switcher.min.js" type="text/javascript"></script>
```

After that we must setup the script. 

Now, we will need to make an object named `wnThemeSwitcher`.

Let's say I want `dark-discord` theme as default theme and allow users to switch between themes which are `gradient-blue (Normal Theme), light-lite (Lite Theme), lightspace-blue (Special Theme)`. You can check the type of any theme in our documentation at https://docs.wybenetwork.com/vistapanel-themes/#/themes-name

Example Configuration:
```javascript
<script type="text/javascript">
    // object must be created with this name
    const wnThemeSwitcher = new ThemeSwitcher(
        [
            // Add theme folder name, name and type
            {
                dir: 'gradient-blue', // must be folder name of theme
                title: 'Gradient Blue', // any name you want to show on user end
                type: 'normal' // type of theme
            },
            {
                dir: 'light-lite',
                title: 'Light Theme',
                type: 'lite'
            },
            {
                dir: 'lightspace-blue',
                title: 'Lightspace Blue',
                type: 'special'
            }
        ],
        { // set options for themes
            baseURL: 'https://example.tld/', // optional, default is https://vpt.cdn.wybenetwork.com/
            position: 'usernav', // optional, default is bottom (footer area)
            default: { // optional, use to setup the default theme
                dir: 'dark-discord', // must be folder name of theme
                type: 'normal' // type of theme
            }
        }
    )
</script>
```

## Options
| Properties  	 | Priority 	 | Values 	                                                                                                                                                                                                                                                                                                                                    |
|---------------|------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| themeList 	   | required   | [<br/>&nbsp;&nbsp;&nbsp;&nbsp;{<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;dir: 'theme-dirname', <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;title: 'Theme Name',<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;type: 'theme type'<br/>&nbsp;&nbsp;&nbsp;&nbsp;}<br/>]                                              |
| options	      | optional	  | {<br/>&nbsp;&nbsp;&nbsp;&nbsp;baseURL: 'https://example.tld/' <br/>&nbsp;&nbsp;&nbsp;&nbsp;position: 'bottom' <br/> &nbsp;&nbsp;&nbsp;&nbsp;default: {<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;dir: 'theme-dirname'<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;type: 'theme type'<br/>&nbsp;&nbsp;&nbsp;&nbsp;}<br/>}	 |                

## Properties
### themeList `(array), Required`

check https://docs.wybenetwork.com/vistapanel-themes/#/themes-name for theme directory names and their types.

#### dir `(Object)`
Directory name of theme you want to add in theme selector options. 

#### title `(string)`
Title can be any name you want to show to user on frontend. 

#### type `(string)`
Type must be the type of the theme you are allowing user to choose.
List of themes categorized into different types can be found at https://docs.wybenetwork.com/vistapanel-themes/#/themes-name

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
Only two properties should be provided for this object to set the default theme.

##### dir `(String)`
Directory name of the theme you want to set as default.

##### type `(String)`
The value set for this option should be the type of the theme.

## Changelog
```html
Version 2.0.3 | October 16th, 2022
- Bugs Fixes
- Code Improved
- Switched from Cookies to Local Storage
- Added option for switching back to default theme
```
```html
Version 2.0.2 | October 15th, 2022
- Code Optimization (Thanks to PlanetCloud for Suggestions)
- Bugs Fixes
```
```html
Version 2.0.1 | October 15th, 2022
- Code Optimization (Thanks to PlanetCloud for Suggestions)
```
```html
Version 2.0.0 | October 14th, 2022
- Complete Re-write by AA22Dev
- Added support for multiple positions
- Improved support for themes
- Added support for default theme.
```

```html
Version 1.0.1 | June 23rd, 2021
- Bugs fixes by AA22Dev
```

```html
Version 1.0.0 | December 29th, 2018
- Initial release by RanaKHAS
```