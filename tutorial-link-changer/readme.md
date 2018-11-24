# Tutorials Link Changer

## What does it do?  
Basically what the title says! It changes the "Tutorials" link on VistaPanel with your own Knowledge Base link.  

## Where should I put it?  
You can put it anywhere, although we recommend to put it on Footer Advert Area.  

## How can I install it?   
Create a script tag with `src` pointing to `tutorial-link-changer.js` or `tutorial-link-changer.min.js` for minified version.  

In case you do not know how to do that or are too lazy to do it, we have provided a ready code below.  

### How to initialize it?
An object called "b" (lowercase) must be initialized with the following variables:  

    * tutorial -> URL of your tutorials with HTTP Protocol.  

Example :  
    ```
    var b = {  
        tutorial : "http://pch.com/help/",    
    }  
    ```
#### Note: It can be combined with the b variable on cpanel-logo-to-copyright and any other scripts using it.  


###  Content-Type Header Errors
The RAW option on GitHub can return an incorrect Content-Type header which makes the code not load at all.  
To solve this, we need an external service which adds the correct type, like jsDelivr.

The full code, using jsDelivr:

```
<script type="text/javascript">  

    var b = {  
        tutorial : "YOUR TUTORIAL LINK WITH HTTP PROTOCOL",   
    }  

</script>  
<script src="https://cdn.jsdelivr.net/gh/VPTOfficial/VistaPanel-Customizations/tutorial-link-changer/tutorial-link-changer.js" type="text/javascript"></script>  
```
