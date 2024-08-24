$(document).ready(function() {
    // Prevent manual scrolling
    $(window).on('wheel touchmove', function(e) {
        e.preventDefault();
    });

    $('#scrollDown').click(function() {
        // // Allow scrolling
        // $('html, body').css('overflow', 'auto');
        
        // Get the height of the header
        var headerHeight = $('#header').outerHeight();

        // Correctly select the arrow and main elements
        var $scrollTo = $('main');
        
        // Animate the scrolling to the main section
        $('html, body').animate({
            scrollTop: $scrollTo.offset().top - headerHeight
        }, 800); // You can adjust the duration of the animation here

        $('#header').addClass('fading-header visible');
        $('footer').addClass('fading-footer visible');
    });
});
