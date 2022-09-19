# Element Changer  

## What does it do?  
As the name might suggest, it allows you to modify any VistaPanel widget element! (Well, aside from the right sidebar ones.)
You are currently able to change and remove elements.

## Where should I put it?  
You can put it anywhere! We recommend avoiding the left advert area, as it will break the sidebar.

## How can I install it?   
You'll first need to declare an array with the name ``changeElements`` within a script tag.  

To change an element, you will need to create an object with the following properties that we'll analyze afterwards:
```js
{name: "Element name", action: "modify", attr: "attribute", value: "new value"}
```
To remove an element, the object will be structured like this:
```js
{name: "Element name", action: "remove"}
```

### Properties

In ``name``, you'll assign a value that corresponds with the name of the element exactly as it appears on the panel. For instance ``"Change Password"`` is what you'll need to enter to modify the Change Password element.

The action you wish to perform will be defined in ``action``. Currently, there are two actions supported, ``modify`` and ``remove``. Ensuring backwards compatibility, if you declare no action in your object the script will assume ``modify `` to be the intended action.

``attr`` is the attribute you wish to modify. There are two main attributes:
``itemdesc`` and ``url``. 
The first defines the name the element will have on the panel, while the second, as you can tell by the name, defines the URL for it.

Finally, ``value`` holds the new value of the element you'll be changing, for example if your ``attr`` is ``url``, it would probably contain a value of ``"https://yourdomain.com"``.

An example of the code modifying the name and URL of ``Change Password`` to ``Your Domain`` and ``https://yourdomain.com`` respectively can be seen below:
```js
changeElements = [
    {name: "Change Password", action: "modify", attr: "itemdesc", value: "Your Domain"},
    {name: "Change Password", action: "modify", attr: "url", value: "https://yourdomain.com"}
];
```
Likewise, an example of removing ``CNAME Records`` and ``MX Entry`` is provided here:
```js
changeElements = [
    {name: "MX Entry", action: "remove"},
    {name: "CNAME Records", action: "remove"}
];
```
Objects are separated by commas, so don't forget to include them when adding a new one.

### What is all of this? Where is my ready-to-use code?
Please read the Properties section before attempting to make your own modifications.

We'll provide a ready code for modifying the names and URLs of ``SiteBuilder`` and ``Softaculous Apps Installer``, and removing ``Access Logs`` and ``Remote MySQL``. Try it out in your panel (with the script, of course) to be able to better understand the process in adding your own objects.
```html
<script type="text/javascript">
changeElements = [
    {name: "SiteBuilder", action: "modify", attr: "itemdesc", value: "VistaPanel Themes"},
    {name: "SiteBuilder", action: "modify", attr: "url", value: "https://vpt.cdn.wybenetwork.com"},
    {name: "Softaculous Apps Installer", action: "modify", attr: "itemdesc", value: "VistaPanel Customizations"},
    {name: "Softaculous Apps Installer", action: "modify", attr: "url", value: "https://vpc.cdn.wybenetwork.com"},
    {name: "Access Logs", action: "remove"},
    {name: "Remote MySQL", action: "remove"}
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
<script src="https://cdn.jsdelivr.net/gh/WybeNetwork/VistaPanel-Customizations@2.3.0-pre/element-changer/element-changer.js" type="text/javascript"></script>
```
Alternatively, you can use our CDN:
```html
<script src="https://vpc.cdn.wybenetwork.com/element-changer/element-changer.js" type="text/javascript"></script>
```
A full code utilizing our example and our CDN:
```html
<script type="text/javascript">
changeElements = [
    {name: "SiteBuilder", action: "modify", attr: "itemdesc", value: "VistaPanel Themes"},
    {name: "SiteBuilder", action: "modify", attr: "url", value: "https://vpt.cdn.wybenetwork.com"},
    {name: "Softaculous Apps Installer", action: "modify", attr: "itemdesc", value: "VistaPanel Customizations"},
    {name: "Softaculous Apps Installer", action: "modify", attr: "url", value: "https://vpc.cdn.wybenetwork.com"},
    {name: "Access Logs", action: "remove"},
    {name: "Remote MySQL", action: "remove"}
];
</script>
<script src="https://vpc.cdn.wybenetwork.com/element-changer/element-changer.js" type="text/javascript"></script>
```
## Changelog
* Created on 15 September 2022 by [Anyx](https://github.com/4yx)
* Modified on 15 September 2022 by [PlanetCloud](https://github.com/PlanetTheCloud)
* Last modified on 19 September 2022 by [PlanetCloud](https://github.com/PlanetTheCloud)