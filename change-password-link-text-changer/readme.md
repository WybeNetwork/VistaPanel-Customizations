# "Change Password" Link and Text Changer

## What does it do?  
Basically, it does what the title says!  
It changes the link and text of the "Change Password" button, allowing you to add your own function there.

## Where should I put it?  
Put it in the Footer Advert Area. 

## How can I install it?  

Put the following code in the Footer Advert Area on the MyOwnFreeHost admin panel.  

Before you do that, make sure to replace `your_website_url` in the code with your website URL and replace `your_text` with the text you want to be shown there.  

The `var change_password_link = "your_website_url"` variable will replace the "Change Password" URL on vPanel and the `var change_password_text = "your_text"` variable will replace the "Change Password" text with whatever you enter as text.

### Content-Type Errors
The RAW option on GitHub can return an incorrect Content-Type header which makes the code not load at all.  
To solve this, we need an external service which adds the correct type, like jsDelivr, or our CDN.

The full code, using jsDelivr:

```html
<script type="text/javascript">  
    var change_password_link = "your_website_url",
    change_password_text = "your_text";
</script>  
<script src="https://cdn.jsdelivr.net/gh/WybeNetwork/VistaPanel-Customizations@2.2.0/change-password-link-text-changer/change-password-link-text-changer.js" type="text/javascript"></script>  
```
Alternatively, you can use our CDN:
```html
<script type="text/javascript">  
    var change_password_link = "your_website_url",
    change_password_text = "your_text";
</script>  
<script src="https://vpc.cdn.wybenetwork.com/change-password-link-text-changer/change-password-link-text-changer.js" type="text/javascript"></script>
```

## Can I remove credits?
No. The license mentions it.  

You can request credit removal at our [support forums](https://wybenetwork.com) or on our [Discord Server](https://dsc.gg/ifastnet).