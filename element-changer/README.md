# Element Changer  

## What does it do?  
As the name might suggest, it allows you to modify any VistaPanel widget element! (Well, aside from the right sidebar ones.)

## Where should I put it?  
You can put it anywhere! We recommend avoiding the left advert area, as it will break the sidebar.

## How can I install it?   
You'll first need to declare an array with the name ``changeElements`` within a script tag.  
The elements in vPanel are categorized numerically in 11 groups, as shown in the table below:
| No. | Group Names                 | 
|-----|---------------------------- |
| 1   | Preferences                 |
| 2   | Files                       |
| 3   | Databases                   |
| 4   | Domains                     |
| 5   | Email                       |
| 6   | Metrics                     |
| 7   | Security                    |
| 8   | Software                    |
| 9   | Advanced                    |
| 10  | Softaculous Apps Installer  |
| 11  | Support                     | 

To change the elements of a group, you will need to declare an object named with the number of that group, which will contain a new array. For example, to modify an element belonging in "Preferences" your object will need to be named 1.
An example on how your code would look will be shown below:
```js
changeElements = [
    {1: [
        {contents here}
    ]}
```
Inside the new array, create an object with the following properties that we'll analyze afterwards:
```js
{item:, attr:, value:}
```
### Properties

In ``item``, you'll assign a numerical value that corresponds with the position of the element you want to modify. Elements are sorted from left to right, or in the order they appear on mobile view, for instance ``1`` is the value of ``Change Password`` in Preferences.

``attr`` is the attribute you wish to modify. There are two main attributes:
``itemdesc`` and ``url``. 
The first defines the name the element will have on the panel, while the second, as you can tell by the name, defines the URL for it.

Finally, ``value`` holds the new value of the element you'll be changing, for example if your ``attr`` is ``url``, it would probably contain a value of ``"https://yourdomain.com"``.

An example of the code modifying the name and URL of ``Change Password`` to ``Your Domain`` and ``https://yourdomain.com`` respectively can be seen below:
```js
changeElements = [
    {1: [
        {item: 1, attr: "itemdesc", value: "Your Domain"},
        {item: 1, attr: "url", value: "https://yourdomain.com"}
    ]}
```
Objects are separated by commas, so don't forget to include them when adding a new one.

### What is all of this? Where is my ready-to-use code?
If you skipped to this section, I apologise for the length of the previous ones. I tried to analyze the process in the best way I could.
Please read the Properties section before attempting to make your own modifications.

We'll provide a ready code for modifying the URLs of the first two elements of the ``Support`` and ``Email`` groups. Try it out in your panel (with the script, of course) to be able to better understand the process in adding your own objects.
```html
<script type="text/javascript">
changeElements = [
    {5: [
        {item: 1, attr: "url", value: "https://email.accounts"},
        {item: 2, attr: "url", value: "https://forwarde.rs"}
    ]},
    {11: [
        {item: 1, attr: "url", value: "https://domain.types"},
        {item: 2, attr: "url", value: "https://tutoria.ls"}
    ]}
]
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
<script src="https://cdn.jsdelivr.net/gh/WybeNetwork/VistaPanel-Customizations@2.1.0/element-changer/element-changer.js" type="text/javascript"></script>
```
Alternatively, you can use our CDN:
```html
<script src="https://vpc.cdn.wybenetwork.com/element-changer/element-changer.js" type="text/javascript"></script>
```
A full code utilizing our example and our CDN:
```html
<script type="text/javascript">
changeElements = [
    {5: [
        {item: 1, attr: "url", value: "https://email.accounts"},
        {item: 2, attr: "url", value: "https://forwarde.rs"}
    ]},
    {11: [
        {item: 1, attr: "url", value: "https://domain.types"},
        {item: 2, attr: "url", value: "https://tutoria.ls"}
    ]}
]
</script>
<script src="https://vpc.cdn.wybenetwork.com/element-changer/element-changer.js" type="text/javascript"></script>
```
## Frequently Asked Questions
### Doesn't counting start at 0?
In JavaScript arrays like the one the script is modifying, indeed it does! I have modified the script (subtracting 1) so that counting starts at one, so make sure you don't use 0!
### Why is this so long and complicated?
I wish there was a more simple way to implement it. I don't know, there might be, but this is the easiest one I was able to come up with.
### Won't this break if iFastNet changes the item list?
~~[@BastelPichi, is this you?](https://github.com/WybeNetwork/VistaPanel-Customizations/issues/18#issuecomment-1235768587)~~
Yes, it will, although if iFastNet changes the item list and I/someone in our team/the MOFH community have the time, we will update it.
## Changelog
* Created on 15 August 2022 by [Anyx](https://github.com/4yx)