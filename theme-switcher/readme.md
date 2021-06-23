# Theme Switcher

## What is going on? Why does my dropdown not work?
While the script is complete, its state is not, as there are some issues with how we recommended its implementation.  
The README will be updated soon to reflect the new changes. The dropdown should work in all pages now, although to change the theme you will need to be at the main page. We're currently looking to see if that can change.

## What does it do?
Read Title Again! Now You know what it does. It will add an option in VistaPanel so user can switch Themes desgined by VPTOfficial.

## Where should I put it?
On Space, or even on Mars will work. But I think you should put part of it on the right side bar, and part of it on the footer (will explain below).

## How can I install (use) it?
It is not an application to install... But to use it, you can do that by adding this code in the footer area:
```
<link rel="stylesheet" type="text/css" href="https://vpt.cdn.wybenetwork.com/light-lite/styles.css" title="lightlite" />
<link rel="stylesheet" type="text/css" href="https://vpt.cdn.wybenetwork.com/gradient-blue-lite/styles.css" title="gradientbluelite" />
<link rel="stylesheet" type="text/css" href="https://vpt.cdn.wybenetwork.com/dark-lite/styles.css" title="draklight" />
<script type="text/javascript" src="https://vpc.cdn.wybenetwork.com/theme-switcher/switcher.js"></script>
```
and this code in the right side bar:
```
<button data-toggle="dropdown" class="btn dropdown-toggle user-preferences-btn">
<span>Theme Options</span>
</button>
<ul class="dropdown-menu dropdown-menu-right">
<li>
<a href="#" onclick="setActiveStyleSheet('lightlite'); return false;">Light Lite</a>
</li>
<li>
<a href="#" onclick="setActiveStyleSheet('gradientbluelite'); return false;">Gradient Blue Lite</a>
</li>
<li>
<a href="#" onclick="setActiveStyleSheet('draklight'); return false;">Dark Light</a>
</li>
</ul>
 ```
  Above is just a demo. You can add more Themes as much as you wish.
  
  ## Final notes
  You can also host the script on your server!
  ## I need Customization in Drop Down Menu
  Do yourself! or wait for me.
