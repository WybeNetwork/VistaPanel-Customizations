# Responsive Domain Search  

## What does it do?  
It makes the VistaPanel search form responsive, so that it does not break the vP theme(s).

## Where should I put it?  
Put it in the Header Advert Area (IMPORTANT). 
Due to [this issue](https://github.com/VPTOfficial/VistaPanel-Customizations/issues/4) reported by [AA22Dev](https://github.com/aa22dev), the code doesn't seem to run properly if you put it elsewhere. Thanks for reporting it.  

## How can I install it?   
Create a script tag with `src` pointing to `responsive-domain-search.js` or `responsive-domain-search.min.js` for the minified version.  

In case you do not know how to do that or are too lazy to do it, we have provided a ready code below.

### How to initialize an affiliate code into the search form?   
A variable "affiliate code" can be defined to put your own affiliate code on the domain search, but, according to iFastNet, this will not give you any money.  

Variable:   
	* affCode -> 5 digit affiliate code.  

**If the variable is not declared, an affiliate code for my account (PlanetCloud) will be used.**  
**In case this method does actually pay money, the money will go into my account and I will appreciate it as a donation :)**  

###  Content-Type Header Errors
The RAW option on GitHub can return an incorrect Content-Type header which makes the code not load at all.  
To solve this, we need an external service which adds the correct type, like jsDelivr, or our CDN.

The full code, using jsDelivr:
```html
<script type="text/javascript">
	/* OPTIONAL
	 affCode = "AFFILIATE_CODE_HERE";
	*/
</script>
<script src="https://cdn.jsdelivr.net/gh/WybeNetwork/VistaPanel-Customizations@2.3.1/responsive-domain-search/responsive-domain-search.js" type="text/javascript"></script>
```
Alternatively, you can use our CDN:
```html
<script type="text/javascript">
	/* OPTIONAL
	 affCode = "AFFILIATE_CODE_HERE";
	*/
</script>
<script src="https://vpc.cdn.wybenetwork.com/responsive-domain-search/responsive-domain-search.js" type="text/javascript"></script>
```
Do not forget to remove the comment lines symbols (``/* OPTIONAL``and ``*/``) if you want your affiliate code to work.
## Changelog
* Created on 10 July 2018 by [PlanetCloud](https://github.com/PlanetTheCloud)  
* Modified on 27 July 2018 by Christine (Cyrl)  
* Modified on 25 August 2018 by [Anyx](https://github.com/4yx)
* Modified on 28 September 2018 by [AA22Dev](https://github.com/aa22dev) and [Anyx](https://github.com/4yx)
* Modified on 30 September 2018 by [PlanetCloud](https://github.com/PlanetTheCloud)  
* Modified on 22 November 2018 by [Anyx](https://github.com/4yx)
* Last modified on 06 August 2022 by [Anyx](https://github.com/4yx)