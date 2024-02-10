(function($) {
    "use strict";
function onContentScroll() {
    if (window.pageYOffset > 93) {
        $('.pxp-header').addClass('pxp-is-sticky');
    } else {
        $('.pxp-header').removeClass('pxp-is-sticky');
    }
}
}