/* @preserve
*  Created at 15 August 2022 by Anyx.
*  DO NOT REMOVE CREDITS!
*  Created for: Wybe Network.
*/
check = document.getElementById("main");
if (check == null) {
	sidebar = document.getElementById("sidebar");
	sidebar.classList.add("ng-scope");
	button = document.getElementById("btnSideBarToggle")
	button.onclick = function() {
		if (sidebar.classList.contains("active")) {
			sidebar.classList.remove("active");
		} else {
			sidebar.classList.add("active");
		}
	}
}