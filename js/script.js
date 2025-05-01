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
    const currentPage = window.location.pathname.split('/').pop();
    const $header = $('#header');
    const $footer = $('footer');
    const $scrollTo = $('main');
    let hasScrolled = false;

    // Function to scroll to the main content
    function scrollToMain() {
        hasScrolled = true;
        $('html, body').animate({
            scrollTop: $scrollTo.offset().top - 100
        }, 1000); 
        $header.addClass('fading-header visible');
        $footer.addClass('fading-footer visible');
        $(window).off('wheel');
    }

    // Function to show header and footer
    function showHeaderFooter() {
        if (!hasScrolled) {
            $header.addClass('fading-header visible');
            $footer.addClass('fading-footer visible');
            hasScrolled = true;
        }
    }

    // Scroll to main content on scroll down button click
    $('#scrollDown').click(scrollToMain);

    // Show header and footer on wheel event
    $(window).on('wheel', showHeaderFooter);

    // Scroll to specific sections on nav link click
    $('#nav-about-me').click(() => scrollToContainer('about-about-me'));
    $('#nav-cv').click(() => scrollToContainer('cv-cv'));

    // Initialize Bootstrap tooltips
    $('[data-toggle="tooltip"]').tooltip(); 

    // Collapse the navbar after clicking a link
    $('.navbar-nav>li>a').on('click', function(){
        $('.navbar-collapse').collapse('hide');
    });

    // Collapse the navbar after selecting a language
    $('#language-selector').next('.dropdown-menu').find('.dropdown-item').on('click', function(){
        $('.navbar-collapse').collapse('hide');
    });
});

// Function to copy text to clipboard
function copyToClipboard(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    textarea.setSelectionRange(0, 99999); // For mobile devices
    document.execCommand('copy');
    document.body.removeChild(textarea);
}