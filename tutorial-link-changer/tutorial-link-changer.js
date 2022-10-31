/*! @preserve
*  Created on 02 September 2018 by PlanetCloud
*  Modified on 06 August 2020 by PlanetCloud
*  Modified on 30 August 2022 and 02 September 2022 by Anyx
*  Last modified on 13 September 2022 by Anyx
*  DO NOT REMOVE CREDITS!
*  Created for: Wybe Network.
*/
PAGE.appGroups.forEach(function(index) { 
    index.items.forEach(function(element) { 
        if (element.url == "http://tutorials.securesignup.net/") {
            element.url = b.tutorial
        }
    });
});