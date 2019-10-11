// JavaScript Document

$(document).on('ready', function() {
    "use strict";
    if ($(window).width() >= "768") {
        $(".header, .header-2").sticky({ topSpacing: 0 });
    }

});
$(document).on('ready', function() {
    "use strict";
    if ($(window).width() >= "768") {
        $("#sub-nav").sticky({ topSpacing: 100 });
    }

});
