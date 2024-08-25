$(document).ready(function() {
    // Check if the current page is index.html
    if (window.location.pathname.endsWith('index.html')) {
        // Prevent manual scrolling
        $(window).on('wheel touchmove', function(e) {
            e.preventDefault();
        });
    }

    $('#scrollDown').click(function() {
        // Get the height of the header
        var headerHeight = $('#header').outerHeight();

        // Correctly select the arrow and main elements
        var $scrollTo = $('main');
        
        // Animate the scrolling to the main section
        $('html, body').animate({
            scrollTop: $scrollTo.offset().top - headerHeight // Adjusted to account for header height
        }, 800); // You can adjust the duration of the animation here

        $('#header').addClass('fading-header visible');
        $('footer').addClass('fading-footer visible');
    });
});
