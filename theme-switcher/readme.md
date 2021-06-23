# Theme Switcher

## What does it do?
It will add an option in VistaPanel so user can switch Themes desgined by Wybe Network (Previously VPTOfficial).

## Where should I put it?
Add the code given below in the bottom advertisement area.

## How can I install (use) it?
It is not an application to install... But to use it, you can do that by adding this code in Right Side Bar
```
<link rel="stylesheet" type="text/css" href="https://vpt.cdn.wybenetwork.com/light-lite/styles.css" title="lightlite" />
<link rel="stylesheet" type="text/css" href="https://vpt.cdn.wybenetwork.com/gradient-blue-lite/styles.css" title="gradientbluelite" />
<link rel="stylesheet" type="text/css" href="https://vpt.cdn.wybenetwork.com/dark-lite/styles.css" title="draklite" />
<script type="text/javascript" src="https://vpc.cdn.wybenetwork.com/theme-switcher/switcher.js"></script>

<div class="wn-ts-dropup">
  <button class="wn-ts-dropbtn">Theme Switcher</button>
  <div class="wn-ts-dropup-content">
    <a href="#" onclick="setActiveStyleSheet('lightlite'); return false;">Light Lite</a>
    <a href="#" onclick="setActiveStyleSheet('gradientbluelite'); return false;">Gradient Blue Lite</a>
    <a href="#" onclick="setActiveStyleSheet('draklight'); return false;">Dark Lite</a>
  </div>
</div>
 ```
  Above is just a demo. You can add more Themes as much as you wish.
  
  ## Final notes
  You can also host ```https://vpc.cdn.wybenetwork.com/theme-switcher/switcher.js``` on your server!
  ## I need Customization in Drop Down Menu
  Do yourself! or wait for me.
