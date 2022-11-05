# Menu Item Changer
This script enables you to add, modify and delete items in user navigation dropdown menu. This script make use of default styling so it is compatible with all the themes you can found at [VistaPanel Themes](https://github.com/WybeNetwork/VistaPanel-Themes). Currently, this script only supports removing and modification of default menu items.

## Features
- Add new menu item with icon, title and link
- Modify default menu items icon, title or link
- Remove default menu items
- Compatible with all themes available at [VistaPanel Themes](https://github.com/WybeNetwork/VistaPanel-Themes)
- Default Icons (Added by default [Font Awesome](https://fontawesome.com/v4/icons/))

## How to Install?
Add this code in the footer advert area to load the script,

You can use one of the two options to load script

### Our CDN
```html
<script src="https://vpc.cdn.wybenetwork.com/menu-item-changer/menu-item-changer.min.js" type="text/javascript"></script>
```

### Manual
Download the latest available version of this script and place it on your website in your desired directory.

In this code example, I have added the script to the root directory of my website.
```html
<script src="https://example.tld/menu-item-changer.min.js" type="text/javascript"></script>
```

Now instantiate an object with options to add, modify or remove a menu item.

Example configuration
```html
<script type="text/javascript">
    // creating object
    const wnMenuItemChanger = new MenuitemChanger(
            [
                // remove item
                {
                    name: 'Change Password', // name of item as shown in user nav e.g. Change Password, Change Language, Update Contact Email or Reset Page Settings
                    action: 'remove' // action to perform
                },
                // modify item
                {
                    name: 'Change Language',
                    newName: 'Any New Name', // Optional: Replace default name of item with this name
                    url: 'https://new-link.tld', // Optional: Replace default link with this link
                    icon: 'f1f2', // Optional: Replace default icon with this icon (Icon unicode can be obtained from fontawesome)
                    action: 'modify' // Action to perform
                    // One of the option must be specified to modify the default item
                },
                // add item
                {
                    name: 'Item Name', // Required: Name of item you are adding to menu
                    url: 'https://example.tld/item', // Required: URL to which that item links.
                    icon: 'f1f2', // Required: Icon for that new item (must be a unicode from fontawesome)
                    order: 2, // Optional: Item will be added after 2nd Item in menu. 0 can be used to add item in start and it can be left to add item at last.
                    action: 'add' // action to perform
                }
            ]
    );
</script>
```

You can add new fontawesome icons by loading the stylesheet of fontawesome new version through their CDN and then you can use the unicode of new icons.

## Items `array`
Array of objects with different properties

### Add Item `Object`
| Properties      | Priority | Values                         |
|-----------------|----------|--------------------------------|
| name `string`   | required | 'New Item'                     |
| url `string`    | required | 'https://example.tld/new-item' |
| icon `string`   | required | 'f1f2'                         |
| order `int`     | optional | 0                              |
| action `string` | required | 'add'                          |


The value for **order** property specifies where that item should be added. If it is not specified then by default the item will be added at the end.
If **0** is specified then element will be added at first position and If **n** (n is any integer) is specified than it will be added after the element at nth position.

### Modify Item `Object`
| Properties       | Priority | Values                         |
|------------------|----------|--------------------------------|
| name `string`    | required | 'Change Password'              |
| newName `string` | Optional | 'New Item Name'                |
| url `string`     | Optional | 'https://example.tld/new' |
| icon `string`    | Optional | 'f1f2'                         |
| action `string`  | required | 'modify'                       |

To modify an item at least one of the three options must be modified.

### Remove Item `Object`
| Properties       | Priority | Values            |
|------------------|----------|-------------------|
| name `string`    | Optional | 'Change Password' |
| action `string`  | required | 'remove'          |

## Changelog
```html
Version 1.0.0 | October 19th, 2020
- Initial Release
- Modify default menu items icon, title or link
- Remove default menu items
- Compatible with all themes available at https://github.com/WybeNetwork/VistaPanel-Themes
- Default Icons (available at https://fontawesome.com/v4/icons/)
```

