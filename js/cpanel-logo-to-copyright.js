document.addEventListener("DOMContentLoaded", function() {

	/* cPanel Logo to Copyright */

	if(typeof VPT.companyLogo !== 'undefined' && typeof VPT.companyName !== 'undefined' && typeof VPT.companyStarted !== 'undefined'){

		var VPT_TEMP.cpLogoA = document.getElementById("lnkPoweredByCpanel");
		var VPT_TEMP.cpLogoS = document.getElementById("txtCpanelVersion");

		var VPT_TEMP.cpDate = new Date();
		var VPT_TEMP.cpYear = cpDate.getFullYear();

		VPT.companyStarted = Number(VPT.companyStarted);

		VPT_TEMP.cpLogoA.href = primarySite;
		VPT_TEMP.cpLogoA.target = '_blank';
		VPT_TEMP.cpLogoA.title = VPT.companyName;

		VPT_TEMP.cpLogoA.innerHTML = '<img id="imgPoweredByCpanel" width="200px" src="'+VPT.companyLogo+'" alt="'+VPT.companyName+'" style="display: inline-block; z-index: 999;">';

		if(VPT.companyStarted < cpYear){
			VPT_TEMP.cpLogoS.innerHTML = '© '+VPT.companyStarted+'-'+cpYear+' '+VPT.companyName+'.';
		}else{
			VPT_TEMP.cpLogoS.innerHTML = '© '+cpYear+' '+VPT.companyName+'.';
		}

	}

	/* 
	 *	Created at 10 July 2018 by PlanetCloud
	 *	DO NOT REMOVE CREDITS!
	 *	Created for: VPT (VistaPanel Theme Project)
	 *	Design & Script by : PlanetCloud
	 *
	 */

});