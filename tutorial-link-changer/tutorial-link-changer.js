document.addEventListener("DOMContentLoaded", function() {

    /* Tutorial Links Replacer by PlanetCloud for VPT */

    if(typeof b.tutorial !== 'undefined'){
        [].forEach.call(document.querySelectorAll('a[href^="http://tutorials.securesignup.net"]'), function(a){
            a.href = b.tutorial;
        });
    }

    /* 
     *  Created at 2 September 2018 by PlanetCloud
     *  Lase modified at 2 September 2018 by PlanetCloud
     *  DO NOT REMOVE CREDITS!
     *
     */

});