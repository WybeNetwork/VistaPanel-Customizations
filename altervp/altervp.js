/*
*  Created on 14 September 2018 by woxly
*  Recreated on 30 August 2022 by Anyx
*  DO NOT REMOVE CREDITS!
*/
document.addEventListener("DOMContentLoaded", function() {
    // Title
    document.title = AlterVP.title;
    // Protocol
    if (window.location.protocol.replace(/:/g,'') !== AlterVP.protocol) {
        location.protocol = AlterVP.protocol;
    }
    // Logo
    document.getElementById("imgLogo").src = AlterVP.logo;
    // Themes
    if (AlterVP.category !== "lightspace") {
        themeURL = ['https://vpt.cdn.wybenetwork.com', AlterVP.theme, 'styles.css'].join("/");
        if (AlterVP.category == "normal") {
            iconURL = ['https://vpt.cdn.wybenetwork.com', AlterVP.theme, 'icon_spritemap.css'].join("/");
            icon = document.createElement('link');
            icon.type = 'text/css';
            icon.rel = 'stylesheet';
            icon.href = iconURL;
            document.head.appendChild(icon);
        }
    } else {
        themeURL = ['https://vpt.cdn.wybenetwork.com', AlterVP.theme, 'panel.css'].join("/");
    }
    theme = document.createElement('link');
    theme.type = 'text/css';
    theme.rel = 'stylesheet';
    theme.href = themeURL;
    document.head.appendChild(theme);
    // Credits
    script = document.createElement('script')
    script.setAttribute('type', 'text/javascript')
    script.innerHTML = "window.addEventListener('load',function(){document.getElementById('imgPoweredByCpanel').src=AlterVP.credits.logo})"
    document.body.appendChild(script)
    document.getElementById("txtCpanelVersion").innerHTML = AlterVP.credits.desc;
});