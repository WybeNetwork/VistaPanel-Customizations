# "Change Language" Link & Text Changer  

## What does it do?  
Basically, it does what the title says!  
It changes the link and text of the "Change Language" button, allowing you to add your own function there.

## Where should I put it?  
Put it in the Footer Advert Area (Recommended)  

## How can I install it?  

Put the following code in the Footer Advert Area from MyOwnFreeHost admin panel.  

Before you do that, make sure to replace `your_website_url` in the code with your website URL and replace `your_text` with the text you want to be shown there.  

The `var change_language_link = "your_website_url"` variable will replace the "Change Language" URL from vPanel and the `var change_language_text = "your_text"` variable will replace the "Change Language" text with whatever you enter as text.


### Content-Type Errors
The RAW option on GitHub can return an incorrect Content-Type header which makes the code not load at all.  
To solve this, we need an external service which adds the correct type, like jsDelivr.

The full code, using jsDelivr:

```
<script type="text/javascript">  
    var change_language_link = "your_website_url",
	change_language_text = "your_text";
</script>  
<script src="https://cdn.jsdelivr.net/gh/VPTOfficial/VistaPanel-Customizations/change-language-link-text-changer/change-language-link-text-changer.js" type="text/javascript"></script>  
```


## Can I remove credits?
No. The license mentions it.  

You can request credit removal at our [support forums](https://vpthemes.win) or on our [Discord Server](https://discord.gg/FTyFXsU).
