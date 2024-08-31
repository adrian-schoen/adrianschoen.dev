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
    const currentPage = window.location.href.split('/').pop();
    if (currentPage === '' || currentPage === 'index.html') {
        const headerHeight = $('#header').outerHeight();
        const $scrollTo = $('main');
        let hasScrolled = false;

        function scrollToMain() {
            hasScrolled = true;
            $('html, body').animate({
                scrollTop: $scrollTo.offset().top - 100
            }, 1000); 
            $('#header').addClass('fading-header visible');
            $('footer').addClass('fading-footer visible');
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

        $(window).on('wheel', function(event) {
            showHeaderFooter();
        });
    }

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

function copyToClipboard(text) {
    // Create a temporary textarea element
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    
    // Select the text
    textarea.select();
    textarea.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text to the clipboard
    document.execCommand('copy');
    
    // Remove the temporary textarea element
    document.body.removeChild(textarea);
}

// Initialize Bootstrap tooltips
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip(); 
});