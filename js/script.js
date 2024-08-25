$(document).ready(function() {
    $('#scrollDown').click(function() {
        const headerHeight = $('#header').outerHeight();
        const $scrollTo = $('main');

        $('html, body').animate({
            scrollTop: $scrollTo.offset().top - headerHeight
        }, 1000); 

        $('#header').addClass('fading-header visible');
        $('footer').addClass('fading-footer visible');
    });
});
