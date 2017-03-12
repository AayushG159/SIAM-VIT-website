$(document).ready(function() {
    if (window.innerWidth >= 930) {
        $('#nav ul li:not(:first-child)').show();
    } else {
        $('#nav ul li:not(:first-child)').hide();
    }
    $('.nav-icon').click(function() {
        $('.nav-icon').toggleClass('icon-change');
        $('#nav ul li:not(:first-child)').slideToggle();
        $('#nav ul li:not(:first-child)').click(function() {
            if (window.innerWidth < 930) {
                $('#nav ul li:not(:first-child)').slideUp();
            }
            $('.nav-icon').removeClass('icon-change');
        });
    });
    events_sec();
    $(window).resize(function() {
        if (window.innerWidth >= 930) {
            $('#nav ul li:not(:first-child)').show();
        } else {
            $('#nav ul li:not(:first-child)').hide();
            $('.nav-icon').removeClass('icon-change');
        }
    });
    $(window).resize(function() {
        events_sec();
    });
});

function events_sec() {
    $('[class^="mob-ev-content-"]').hide();
    $('[class^="desk-ev-content-"]').hide();
    $('.ev-header-1').off('click');
    $('.ev-header-2').off('click');
    $('.ev-header-3').off('click');
    if (window.innerWidth < 930) {
        $('.ev-header-1').on('click', function() {
            $('[class^="desk-ev-content-"]').hide();
            $('[class^="mob-ev-content-"]:not(.mob-ev-content-1)').slideUp();
            $('.mob-ev-content-1').slideToggle();
        });
        $('.ev-header-2').on('click', function() {
            $('[class^="desk-ev-content-"]').hide();
            $('[class^="mob-ev-content-"]:not(.mob-ev-content-2)').slideUp();
            $('.mob-ev-content-2').slideToggle();
        });
        $('.ev-header-3').on('click', function() {
            $('[class^="desk-ev-content-"]').hide();
            $('[class^="mob-ev-content-"]:not(.mob-ev-content-3)').slideUp();
            $('.mob-ev-content-3').slideToggle();
        });
    } else {
        $('.desk-ev-content-1').show();
        $('.ev-header-1').on('click', function() {
            $('[class^="mob-ev-content-"]').hide();
            $('[class^="desk-ev-content-"]').hide();
            $('.desk-ev-content-1').show();
        });
        $('.ev-header-2').on('click', function() {
            $('[class^="mob-ev-content-"]').hide();
            $('[class^="desk-ev-content-"]').hide();
            $('.desk-ev-content-2').show();
        });
        $('.ev-header-3').on('click', function() {
            $('[class^="mob-ev-content-"]').hide();
            $('[class^="desk-ev-content-"]').hide();
            $('.desk-ev-content-3').show();
        });
    }
}