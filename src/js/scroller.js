$(document).ready(function(){
 
    $(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
    $('.scrollup').fadeIn();
    } else {
    $('.scrollup').fadeOut();
    }
    });

    $(window).scroll(function(){
        if ($(this).scrollTop() > 3200) {
        $('.scrollup').addClass('scroller-lock');
        } else {
        $('.scrollup').removeClass('scroller-lock');
        }
        });
     
    $('.scrollup').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
    });
     
    });