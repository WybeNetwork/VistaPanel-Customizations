document.addEventListener("DOMContentLoaded", function() {

	/* cPanel Logo to Copyright */	

	if(typeof companyLogo !== 'undefined' && typeof companyName !== 'undefined' && typeof companyStarted !== 'undefined'){

		var cpLogoA = document.getElementById("lnkPoweredByCpanel");
		var cpLogoS = document.getElementById("txtCpanelVersion");

		var cpDate = new Date();
		var cpYear = cpDate.getFullYear();

		companyStarted = Number(companyStarted);

		cpLogoA.href = primarySite;
		cpLogoA.target = '_blank';
		cpLogoA.title = companyName;

		cpLogoA.innerHTML = '<img id="imgPoweredByCpanel" width="200px" src="'+companyLogo+'" alt="'+companyName+'" style="display: inline-block; z-index: 999;">';

		if(companyStarted < cpYear){
			cpLogoS.innerHTML = '© '+companyStarted+'-'+cpYear+' '+companyName+'.';
		}else{
			cpLogoS.innerHTML = '© '+cpYear+' '+companyName+'.';
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