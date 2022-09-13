# Dropdown Bug Fix  

## What does it do?  
It makes the user options dropdown work in all pages!

## Where should I put it?  
Put it in the Footer Advert Area (Bottom advert).  
The code will not run if you put it elsewhere. It may run in the left advert area, but it will break the sidebar.

## How can I install it?   
Create a script tag with `src` pointing to `dropdown-bug-fix.js`.  

In case you do not know how to do that or prefer to use a ready code, we have provided it below.

###  Content-Type Header Errors
The RAW option on GitHub can return an incorrect Content-Type header which makes the code not load at all.  
To solve this, we need an external service which adds the correct type, like jsDelivr, or our CDN.

The full code, using jsDelivr:
```html
<script src="https://cdn.jsdelivr.net/gh/WybeNetwork/VistaPanel-Customizations@2.0.3/dropdown-bug-fix/dropdown-bug-fix.js" type="text/javascript"></script>
```
Alternatively, you can use our CDN:
```html
<script src="https://vpc.cdn.wybenetwork.com/dropdown-bug-fix/dropdown-bug-fix.js" type="text/javascript"></script>
```
## Changelog
* Created on 06 August 2022 by [Anyx](https://github.com/4yx)