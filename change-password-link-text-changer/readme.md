# Tutorials Link Changer

Where to put?  
In the footer advert area of vPanel  

### NOTE : USE GITHACK OR GITCDN TO MAKE SURE THE CONTENT-TYPE HEADER IS SET CORRECTLY.  
The RAW option on GitHub can return an incorrect Content-Type header which can makes thing goes not the way it supposed to be.  
* GitHack : https://raw.githack.com/   
* GitCDN : http://gitcdn.link/    
* RawGit : http://rawgit.com/   

Installation :   

Put the following code in the Fotter Advert Area (Recommended) of your hosting vPanel from MyOwnFreeHost admin area and replace `https://vpthemes.win` with your website url and replace `VPThemes` with any Name or text.
`var change_password_link = "your_website_url"` will replace the `Change Password` url in vPanel and `var change_password_text = "Your_Text"` will replace the `Change Password` text from `Change Password` to whatever you enter as text at the place of `Your_Text`

```
<script type="text/javascript">  
    var change_password_link = "https://vpthemes.win"
	var change_password_text = "VPThemes"
</script>  
<script src="https://rawgit.com/VPTOfficial/VistaPanel-Customizations/master/change-password-link-text-changer/change-password-link-text-changer.js" type="text/javascript"></script>  
```

### NOTE: YOU ARE NOT ALLOWED TO REMOVE CREDITS FROM JS FILE. YOU CAN REQUEST CREDIT REMOVAL AT OUR SUPPORT FORUMS https://vpthemes.win
