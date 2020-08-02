/* global $, jquery, alert, var*/
$(document).ready(function () {
    "use strict";
    $(".carousel").carousel({
        interval: 6000
    });
    $("html").niceScroll({
        cursorcolor:"#444",
        cursorwidth:"16px"
    });
    // Show Color Option When Clicking Gear
    $(".gear-check").click(function () {
        "use strict";
        $(".color-option").fadeToggle();
    });

    // Change Theme Color On Click
    var colorLi = $(".color-option ul li");

    colorLi
        .eq(0).css("backgroundColor", "#E41B17").end()
        .eq(1).css("backgroundColor", "#E426D5").end()
        .eq(2).css("backgroundColor", "#009AFF").end()
        .eq(3).css("backgroundColor", "#FFD500");

    colorLi.click(function () {
        "use strict";

      $("link[href*='theme']").attr("href", $(this).attr("data-value") );

        // console.log($(this).attr("data-value"))
    });

    // Caching the scroll top element

    var scrollButton = $("#scroll-top");

    $(window).scroll(function () {
        $(this).scrollTop() >= 700 ? scrollButton.show() :  scrollButton.hide();
    });

    // Click On Button To scroll Top
    scrollButton.click(function () {
        $("html,body").animate({scrollTop : 0}, 600);
    });
});

// Loading screen

$(window).load(function () {
    "use strict"
    // Loading elements
    $(".loading-overlay .sk-chase").fadeOut(2000, function () {
            $("body").css("overflow", "auto");
            $(this).parent().fadeOut(2000, function () {
                    $(this).remove();
                });
        });
});




