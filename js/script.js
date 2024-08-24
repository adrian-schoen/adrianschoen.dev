$(document).ready(function() {
    // Prevent manual scrolling
    $(window).on('wheel touchmove', function(e) {
        e.preventDefault();
    });

    $('#scrollDown').click(function() {
        // Allow scrolling
        $('html, body').css('overflow', 'auto');
        // Animate scroll to the main content
        $('html, body').animate({
            scrollTop: $('main').offset().top
        }, 1000);
    });
});