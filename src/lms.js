function loadScriptAfterJQueryReady(jsFile) {
    setTimeout(function () {
        var loadScript=true;
        if (typeof jQuery == 'undefined') {
            if (typeof window.jQuery == 'undefined') {
                /* jQuery is not loaded */
                loadScript=false;
                loadScriptAfterJQueryReady(jsFile);
            }else{
                /* jQuery is loaded */
            }
        } else {
            /* jQuery is loaded */
        }
        if(true==loadScript) jQuery.getScript(jsFile);
    }, 500);
}
loadScriptAfterJQueryReady("lms_colors.js");