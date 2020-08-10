/* 	**************************************************************************
    	*
	*   VistaPanel Add-on
	*   Script Name: "Change Password" Link and Text Changer
	*   Author: MAHOfficial & VPT (VistaPanel Team)
	*   Author URL: https://mahofficial.win
	*   Version: 1.0
	*   Github Project URL: https://github.com/VPTOfficial/VistaPanel-Customizations
	*   Official Website URL: https://vpthemes.win
	*   This file is licensed under MIT Attribution
	*   Last Updated on 8th August 2020 by MAHOfficial
	*
	************************************************************************** */
var t = ["item_", "icon-"];
for (n=0; n<=1; n++)
{
document.getElementById(`${t[n]}change_language`).setAttribute("href", change_language_link)
document.getElementById(`${t[n]}change_language`).innerHTML=change_language_text;
}
