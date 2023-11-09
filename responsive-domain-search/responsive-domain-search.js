/*! @preserve
*  Created at 10 July and modified at 02 November 2018 by PlanetCloud.
*  Modified at 16 March 2019 by Dog2puppy.
*  Last modified at 06 August 2022 by Anyx.
*  DO NOT REMOVE CREDITS!
*  Created for: Wybe Network.
*/
document.addEventListener("DOMContentLoaded", function() {
    const urlParams_vpc_rds = new URLSearchParams(window.location.search);
    const option_vpc_rds = urlParams_vpc_rds.get('option') || 'home';
    if (option_vpc_rds == "home") {
    if ("undefined" == typeof affCode) affCode = "25147";
    (function(b, a) {
        for (var c = 0; c < b.length; c++) a(b[c])
    })(document.querySelectorAll('form[action^="https://ifastnet.com/portal/domainchecker.php"]'), function(b) {
        widget = b.parentElement;
        form = document.createElement("form");
        form.setAttribute("class", "form-inline");
        form.setAttribute("target", "_blank");
        form.setAttribute("action", "https://ifastnet.com/portal/domainchecker.php?aff=" + affCode);
        form.setAttribute("method", "post");
        form.innerHTML = '<input type="hidden" name="direct" value="true"><input type="hidden" name="aff" value="' + affCode + '"><div class="form-group" style="margin: 20px; 10px;"><input type="text" class="form-control" name="domain" size="54"></div><div class="form-group" style="margin: 20px; 10px;"><select name="ext" class="form-control"><option>.com</option><option>.net</option><option>.org</option><option>.info</option><option>.cc</option><option>.co.uk</option><option>.biz</option><option>.bz</option><option>.eu</option><option>.mobi</option><option>.us</option><option>.name</option></select></div><button class="btn btn-info">Check Now</button>';
        col = document.createElement("div");
        col.setAttribute("class", "col-sm-12");
        col.appendChild(form);
        row = document.createElement("div");
        row.setAttribute("class", "row");
        row.appendChild(col);
        widget.innerHTML = "";
        widget.appendChild(row)
    })
    }
});
