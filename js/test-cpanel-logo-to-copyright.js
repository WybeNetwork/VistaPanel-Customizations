document.addEventListener("DOMContentLoaded", function() {

	/* cPanel Logo to Copyright */	

	if(typeof PAGE.companyLogo !== 'undefined' && typeof PAGE.companyName !== 'undefined' && typeof PAGE.companyStarted !== 'undefined'){

		var cpLogoA = document.getElementById("lnkPoweredByCpanel");
		var cpLogoS = document.getElementById("txtCpanelVersion");

		var cpDate = new Date();
		var cpYear = cpDate.getFullYear();

		companyStarted = Number(PAGE.companyStarted);

		cpLogoA.href = PAGE.primarySite;
		cpLogoA.target = '_blank';
		cpLogoA.title = PAGE.companyName;

		cpLogoA.innerHTML = '<img id="imgPoweredByCpanel" width="200px" src="'+PAGE.companyLogo+'" alt="'+PAGE.companyName+'" style="display: inline-block; z-index: 999;">';

		if(companyStarted < cpYear){
			cpLogoS.innerHTML = '© '+PAGE.companyStarted+'-'+cpYear+' '+PAGE.companyName+'.';
		}else{
			cpLogoS.innerHTML = '© '+cpYear+' '+PAGE.companyName+'.';
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
