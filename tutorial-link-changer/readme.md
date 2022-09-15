# Tutorials Link Changer

## What does it do?  
Basically what the title says! It changes the "Tutorials" link on VistaPanel with your own Knowledge Base link.  

## Where should I put it?  
You can put it anywhere!

Our pick: Top advert area, so that it gets loaded on the main page only. The Right advert area is also a good choice for the same reason.  
Avoid: Left advert area. It breaks the sidebar.

## How can I install it?   
### How to initialize it?
An object called "b" (lowercase) must be initialized with the following variables:  

    * tutorial -> URL of your tutorials with HTTP(S) PROTOCOL 

Example :  
    ```
    var b = {  
        tutorial : "https://pch.com/help/",    
    }  
    ```
> Note: It can be combined with the b variable on cpanel-logo-to-copyright and any other scripts using it.  

After initializing, create a script tag that adds `tutorial-link-changer.js` or `tutorial-link-changer.min.js` (for minified version) to the body element.

In case you do not know how to do that or are too lazy to do it, we have provided a ready code below.  


###  Content-Type Header Errors
The RAW option on GitHub can return an incorrect Content-Type header which makes the code not load at all.  
To solve this, we need an external service which adds the correct type, like jsDelivr, or our CDN.

The full code, using jsDelivr:

```html
<script type="text/javascript">  
    var b = {  
        tutorial : "YOUR TUTORIAL LINK WITH HTTP(S) PROTOCOL",   
    }  
</script>  
<script src="https://cdn.jsdelivr.net/gh/WybeNetwork/VistaPanel-Customizations@2.2.0/tutorial-link-changer/tutorial-link-changer.js" type="text/javascript"></script> 
```
Alternatively, you can use our CDN:
```html
<script type="text/javascript">  
    var b = {  
        tutorial : "YOUR TUTORIAL LINK WITH HTTP(S) PROTOCOL",   
    }  
</script>  
<script src="https://vpc.cdn.wybenetwork.com/tutorial-link-changer/tutorial-link-changer.js" type="text/javascript"></script> 
```
## Changelog
* Created on 02 September 2018 by [PlanetCloud](https://github.com/PlanetTheCloud)  
* Modified on 06 August 2020 by [PlanetCloud](https://github.com/PlanetTheCloud) 
* Modified on 30 August and 02 September 2022 by [Anyx](https://github.com/4yx)
* Last modified on 13 September 2022 by [Anyx](https://github.com/4yx)
