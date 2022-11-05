# Theme Switcher
> :warning: This documentation is for version 1.0 of Theme Switcher. We recommend you to update to version 2.0.3, for v2 refer to these [Docs](README.md)

## What does it do?
It will add an option in VistaPanel so users can switch between themes designed by Wybe Network (and their own, if they have).

## Where should I put it?
Add the code given below in the bottom (footer) advertisement area.

## How can I install (use) it?
It is not an application to install... But to use it, you can add this code in the footer advert area:
```html
<link rel="stylesheet" type="text/css" href="https://vpt.cdn.wybenetwork.com/light-lite/styles.css" title="lightlite" />
<link rel="stylesheet" type="text/css" href="https://vpt.cdn.wybenetwork.com/gradient-blue-lite/styles.css" title="gradientbluelite" />
<link rel="stylesheet" type="text/css" href="https://vpt.cdn.wybenetwork.com/dark-lite/styles.css" title="darklite" />
<script type="text/javascript" src="https://vpc.cdn.wybenetwork.com/theme-switcher/switcher.js"></script>

<div class="wn-ts-dropup">
  <button class="wn-ts-dropbtn">Theme Switcher</button>
  <div class="wn-ts-dropup-content">
    <a href="#" onclick="setActiveStyleSheet('lightlite'); return false;">Light Lite</a>
    <a href="#" onclick="setActiveStyleSheet('gradientbluelite'); return false;">Gradient Blue Lite</a>
    <a href="#" onclick="setActiveStyleSheet('darklite'); return false;">Dark Lite</a>
  </div>
</div>
```
Above is just a demo. You can add as much themes as you wish.
  
## Final notes
You can also host the script on your server, or use a service like jsDelivr!  
You'll have to replace ``vpc.cdn.wybenetwork.com`` with your URL. You can do the same with ``vpt.cdn.wybenetwork.com``, either replacing it with a jsDelivr link or your own server's one.
