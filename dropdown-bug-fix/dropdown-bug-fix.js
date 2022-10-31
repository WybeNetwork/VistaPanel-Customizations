/*! @preserve
*  Created at 06 August 2022 by Anyx.
*  DO NOT REMOVE CREDITS!
*  Created for: Wybe Network.
*/
check = document.getElementById("main");
if (check == null) {
	dropdown = document.getElementById("btnUserPref");
	dropdown.onclick = function() {
		if (dropdown.parentElement.classList.contains("open")) {
			dropdown.parentElement.classList.remove("open");
		} else {
			dropdown.parentElement.classList.add("open");
		}
	}
}