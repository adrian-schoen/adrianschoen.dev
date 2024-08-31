// Function to scroll to a specific container with an offset of 100 pixels above the target container
function scrollToContainer(containerId) {
    const container = document.getElementById(containerId);
    if (container) {
        window.scrollTo({
            top: container.offsetTop - 100,
            behavior: 'smooth'
        });
    }
}

$(document).ready(function() {
    // Check if the current page is index.html
    const currentPage = window.location.href.split('/').pop();
    if (currentPage === '' || currentPage === 'index.html') { // on cloudflare deployment its adrianschoen.dev/, on local its .../index.html
        const headerHeight = $('#header').outerHeight();
        const $scrollTo = $('main');
        let hasScrolled = false;

        function scrollToMain() {
            hasScrolled = true; // Set the flag to true

            $('html, body').animate({
                scrollTop: $scrollTo.offset().top - 100
            }, 1000); 

            $('#header').addClass('fading-header visible');
            $('footer').addClass('fading-footer visible');

            // Remove the scroll wheel event listener after the animation is triggered
            $(window).off('wheel');
        }

        function showHeaderFooter() {
            if (!hasScrolled) {
                $('#header').addClass('fading-header visible');
                $('footer').addClass('fading-footer visible');
                hasScrolled = true;
            }
        }

        $('#scrollDown').click(function() {
            scrollToMain();
        });

        // Show header and footer immediately on first scroll
        $(window).on('wheel', function(event) {
            showHeaderFooter();
        });
    }

    // Bind navbar links to scrollToContainer function
    $('#nav-my-projects').click(function() {
        scrollToContainer('projects-title');
    });

    $('#nav-about-me').click(function() {
        scrollToContainer('about-about-me');
    });

    $('#nav-cv').click(function() {
        scrollToContainer('cv-cv');
    });
});