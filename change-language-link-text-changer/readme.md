# "Change Language" Link & Text Changer

Where to put?  
In the footer advert area of vPanel  

### NOTE : USE GITHACK OR GITCDN TO MAKE SURE THE CONTENT-TYPE HEADER IS SET CORRECTLY.  
The RAW option on GitHub can return an incorrect Content-Type header which can makes thing goes not the way it supposed to be.  
* GitHack : https://raw.githack.com/   
* GitCDN : http://gitcdn.link/    
* RawGit : http://rawgit.com/   

Installation :   

Put the following code in the Footer Advert Area (Recommended) of your hosting vPanel from MyOwnFreeHost admin area and replace `https://vpthemes.win` with your website url and replace `VPThemes` with any Name or text.
`var change_language_link = "your_website_url"` will replace the `Change Language` url from vPanel and `var change_language_text = "Your_Text"` will replace the `Change Language` text from `Change Language` to whatever you enter as text at the place of `Your_Text`

```
<script type="text/javascript">  
    var change_language_link = "https://vpthemes.win"
	var change_language_text = "VPThemes"
</script>  
<script src="https://rawgit.com/VPTOfficial/VistaPanel-Customizations/master/change-language-link-text-changer/change-language-link-text-changer.js" type="text/javascript"></script>  
```

###NOTE: YOU ARE NOT ALLOWED TO REMOVE CREDITS FROM JS FILE. YOU CAN REQUEST CREDIT REMOVAL AT OUR SUPPORT FORUMS https://vpthemes.win
