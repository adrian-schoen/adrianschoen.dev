$(document).ready(function() {
    // Check if the current page is index.html
    const currentPage = window.location.href.split('/').pop();
    if (currentPage === '' || currentPage ==='index.html') { // on cloudflare deployment its adrianschoen.dev/, on local its .../index.html
        const headerHeight = $('#header').outerHeight();
        const $scrollTo = $('main');
        let hasScrolled = false;

        function scrollToMain() {
            hasScrolled = true; // Set the flag to true

            $('html, body').animate({
                scrollTop: $scrollTo.offset().top - headerHeight
            }, 1000); 

            $('#header').addClass('fading-header visible');
            $('footer').addClass('fading-footer visible');

            // Remove the scroll wheel event listener after the animation is triggered
            $(window).off('wheel');
        }

        $('#scrollDown').click(function() {
            scrollToMain();
        });

        // Can trigger only on first scroll, then listener removed
        $(window).on('wheel', function(event) {
            scrollToMain();
        });
    }
});
