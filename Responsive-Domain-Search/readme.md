Responsive Domain Search  

Used for :  
Making the VistaPanel search form responsive, so that it does not break the theme.

Where to put?  
Anywhere in control panel ads, preferably in footer section.

Installation :   
Create a script tag with src pointing to responsive-domain-search.js or responsive-domain-search.min.js for minified version.  

Initialization :   
A variable "affiliate code" can be defined to put your own affiliate code on the domain search but according to iFastNet, this will not give you any money.  

Variable :   
	* affCode -> 5 digit affiliate code.  

If the variable is not declared, an affiliate code for my account (PlanetCloud) will be used.  
In case this does actually pay money, the money will go into my account and I will appreciate it as a donation :).  

#NOTE : USE GITHACK OR GITCDN TO MAKE SURE THE CONTENT-TYPE HEADER IS SET CORRECTLY.  
The RAW option on GitHub can return an incorrect Content-Type header which can make the code not load at all.  
* GitHack : https://raw.githack.com/  
* GitCDN : http://gitcdn.link/  

The full code, using Githack :

```
<script type="text/javascript">
	/* OPTIONAL
	var affCode = 'AFFLIATE_CODE_HERE';
	*/
</script>
<script src="https://raw.githack.com/VPTOfficial/VistaPanel-Customizations/master/Responsive-Domain-Search/responsive-domain-search.js" type="text/javascript"></script>
```

Created on 10 July 2018 by PlanetCloud  
Modified at 27 July 2018 By Christine (Cyrl)
Last modified on 25 August by PCTipsGR
