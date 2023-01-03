# AlterVP  

## Haven't I heard of this?
You may have, indeed! It was a [tool created by xpde/woxly](https://www.byet.net/index.php?/topic/2705-altervp/), that unfortunately disappeared.
There was no archive of it available, so I [(Anyx)](https://github.com/4yx) recreated it from scratch.

## What does it do?  
It has the following features:
* Change the Title
* Change the Protocol
* Change the Logo
* Change the Theme
* Add your own Credits
* Organized Code
* Clean Setup usage

## Where should I put it?  
Put it in the Footer Advert Area.

## How can I install it?   
Apply this code anywhere, within a script tag:
```js
const AlterVP = {
    title: "AlterVP - vPanel",
    logo: "logo.png",
    protocol: "https",
    theme: "dark",
    category: "normal", // normal, lite, lightspace
    credits: {
    	desc: "AlterVP",
    	logo: "small-logo.png"
    }
};
```
Replace the values inside with the ones you want for your panel. You can comment out the lines of the features you do not wish to use.

Afterwards, create a script tag with `src` pointing to `altervp.js` or `altervp.min.js` for the minified version.

We have also provided a ready code below, along with an explanation as to why GitHub's RAW file output cannot be used.

###  Content-Type Header Errors
The RAW option on GitHub can return an incorrect Content-Type header which makes the code not load at all.  
To solve this, we need an external service which adds the correct type, like jsDelivr, or our CDN.

The full code, using jsDelivr:
```html
<script type="text/javascript">
const AlterVP = {
    title: "AlterVP - vPanel",
    logo: "logo.png",
    protocol: "https",
    theme: "dark",
    category: "normal", // normal, lite, lightspace
    credits: {
    	desc: "AlterVP",
    	logo: "small-logo.png"
    }
};
</script>
<script src="https://cdn.jsdelivr.net/gh/WybeNetwork/VistaPanel-Customizations@2.3.1/altervp/altervp.js" type="text/javascript"></script>
```
Alternatively, you can use our CDN:
```html
<script type="text/javascript">
const AlterVP = {
    title: "AlterVP - vPanel",
    logo: "logo.png",
    protocol: "https",
    theme: "dark",
    category: "normal", // normal, lite, lightspace
    credits: {
    	desc: "AlterVP",
    	logo: "small-logo.png"
    }
};
</script>
<script src="https://vpc.cdn.wybenetwork.com/altervp/altervp.js" type="text/javascript"></script>
```
Feel free to remove the comment line symbol (``//``) that explains the type of theme categories you can have.

## Changelog
* Created on 14 September 2018 by [woxly](https://github.com/woxly)  
* Modified on 14 September 2018 by [woxly](https://github.com/woxly) 
* Lost in time
* Recreated on 30 August and modified on 03 September 2022 by [Anyx](https://github.com/4yx)
* Last modified on 13 September 2022 by [Anyx](https://github.com/4yx)