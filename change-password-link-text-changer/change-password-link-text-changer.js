/*
 *	VistaPanel Add-on
 *	Script Name: "Change Password" Link and Text Changer
 *	Author: MAHOfficial & Wybe Network
 *	Author URL: https://mahofficial.wybenetwork.com
 *	Version: 1.0
 *	Github Project URL: https://github.com/WybeNetwork/VistaPanel-Customizations
 *	Official Website URL: https://wybenetwork.com
 *	This file is licensed under MIT Attribution
 *
 *	Modified at 2 November 2018 by PlanetCloud
 */
var n = document.getElementById("lnkUserPrefChangePwd");
n.setAttribute("href", change_password_link);
n.innerHTML = change_password_text;
