# Sidebar Bug Fix  

## What does it do?  
It makes the sidebar work in all pages!
The sidebar wasn't being loaded correctly in other pages on mobile, which this script now fixes.

## Where should I put it?  
Put it in the Footer Advert Area (Bottom advert).  
The code will not run if you put it elsewhere. It may run in the left advert area, but it will break the sidebar.

## How can I install it?   
Create a script tag with `src` pointing to `sidebar-bug-fix.js` or `sidebar-bug-fix.min.js` for the minified version.  

In case you do not know how to do that or prefer to use a ready code, we have provided it below.

###  Content-Type Header Errors
The RAW option on GitHub can return an incorrect Content-Type header which makes the code not load at all.  
To solve this, we need an external service which adds the correct type, like jsDelivr, or our CDN.

The full code, using jsDelivr:
```html
<script src="https://cdn.jsdelivr.net/gh/WybeNetwork/VistaPanel-Customizations@2.3.0/sidebar-bug-fix/sidebar-bug-fix.js" type="text/javascript"></script>
```
Alternatively, you can use our CDN:
```html
<script src="https://vpc.cdn.wybenetwork.com/sidebar-bug-fix/sidebar-bug-fix.js" type="text/javascript"></script>
```
## Changelog
* Created on 15 August 2022 by [Anyx](https://github.com/4yx)