$(document).ready(function() {
    $('#scrollDown').click(function() {
        var headerHeight = $('#header').outerHeight();
        var $scrollTo = $('main');

        $('html, body').animate({
            scrollTop: $scrollTo.offset().top - headerHeight
        }, 1000); 

        $('#header').addClass('fading-header visible');
        $('footer').addClass('fading-footer visible');
    });
});
