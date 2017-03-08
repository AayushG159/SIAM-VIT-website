/*$(document).ready(function() {
    if (window.matchMedia("(max-width: 930px)").matches) {
        $('#nav ul li:not(:first-child)').hide();
        $('.nav-icon').click(function() {
            $('.nav-icon').toggleClass('icon-change');
            $('#nav ul li:not(:first-child)').slideToggle();
        });
        $('#nav ul li:not(:first-child)').click(function() {
            $('#nav ul li:not(:first-child)').slideUp();
            $('.nav-icon').toggleClass('icon-change');
        });
        $('[class^="mob-ev-content-"]').hide();
        $('.ev-header-1').click(function() {
            $('[class^="mob-ev-content-"]:not(.mob-ev-content-1)').slideUp(); // Put except ev-content-1 condition here
            $('.mob-ev-content-1').slideToggle();
        });
        $('.ev-header-2').click(function() {
            $('[class^="mob-ev-content-"]:not(.mob-ev-content-2)').slideUp();
            $('.mob-ev-content-2').slideToggle();
        });
        $('.ev-header-3').click(function() {
            $('[class^="mob-ev-content-"]:not(.mob-ev-content-3)').slideUp();
            $('.mob-ev-content-3').slideToggle();
        });
    } else {
        $('[class^="desk-ev-content-"]').hide();
        $('.desk-ev-content-1').show();
        $('.ev-header-1').click(function() {
            $('[class^="desk-ev-content-"]').hide();
            $('.desk-ev-content-1').fadeIn();
        });
        $('.ev-header-2').click(function() {
            $('[class^="desk-ev-content-"]').hide();
            $('.desk-ev-content-2').fadeIn();
        });
        $('.ev-header-3').click(function() {
            $('[class^="desk-ev-content-"]').hide();
            $('.desk-ev-content-3').fadeIn();
        });
    }
}); */
$(document).ready(function() {
    if (window.innerWidth >= 930) {
        $('#nav ul li:not(:first-child)').show();
    } else {
        $('#nav ul li:not(:first-child)').hide();
    }
    $('.nav-icon').click(function() {
        $('.nav-icon').toggleClass('icon-change');
        $('#nav ul li:not(:first-child)').slideDown();
        $('#nav ul li:not(:first-child)').click(function() {
            if (window.innerWidth < 930) {
                $('#nav ul li:not(:first-child)').slideUp();
            }
            $('.nav-icon').removeClass('icon-change');
        });
    });
    $(window).resize(function() {
        if (window.innerWidth >= 930) {
            $('#nav ul li:not(:first-child)').show();
        } else {
            $('#nav ul li:not(:first-child)').hide();
            $('.nav-icon').removeClass('icon-change');
        }
    });
});
