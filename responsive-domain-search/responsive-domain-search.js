document.addEventListener("DOMContentLoaded", function() {
    if ("undefined" == typeof affCode) var affCode = "25147";
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
    
    /* 
     *  Created at 10 July 2018 by PlanetCloud.
     *  Modified at 02 November 2018 by PlanetCloud.
     *  Last modified at 16 March 2019 by Dog2puppy.
     *  DO NOT REMOVE CREDITS!
     *  Created for: VPT (VistaPanel Team).
     */
});
