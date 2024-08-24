var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.6.3.min.js'; // Check https://jquery.com/ for the current version
document.getElementsByTagName('head')[0].appendChild(script);
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