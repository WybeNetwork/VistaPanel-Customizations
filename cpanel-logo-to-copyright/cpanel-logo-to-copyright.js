document.addEventListener("DOMContentLoaded", function() {

	/* cPanel Logo to Copyright by PlanetCloud for VPT */
	
	if(typeof b !== 'undefined'){

		var a = document.getElementById("lnkPoweredByCpanel");
		var c = document.getElementById("txtCpanelVersion");
		var cdate = new Date();
		var cyear = cdate.getFullYear();

		b.company_started = Number(b.company_started);

		a.href = b.prm_site;
		a.target = '_blank';
		a.title = b.company_name;

		a.innerHTML = '<img id="imgPoweredByCpanel" src="/panel/pl-res/powered_by_cpanel.png" alt="cPanel, Inc." style="display:none;"><img id="imgPoweredByCpanel" src="'+b.company_logo+'" alt="'+b.company_name+'" style="display:inline-block; z-index:2147483647; visibility:visible;">';

		if(b.company_started < cyear){
			c.innerHTML = '© '+b.company_started+'-'+cyear+' '+b.company_name+'.';
		}else{
			c.innerHTML = '© '+cyear+' '+b.company_name+'.';
		}

	}

	/* 
	 *	Created at 10 July 2018 by PlanetCloud
	 *	Lase modified at 26 August 2018 by PlanetCloud
	 *	DO NOT REMOVE CREDITS!
	 *
	 */
});
