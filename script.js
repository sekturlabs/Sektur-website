// SEKTUR COMMAND CENTER - SIMPLIFIED NAVIGATION

document.addEventListener('DOMContentLoaded', function () {
    // Get all pages
    const pages = document.querySelectorAll('.page');

    // Navigation function for standalone pages
    function navigateToPage(pageName) {
        // Remove active state from all pages
        pages.forEach(page => {
            page.classList.remove('active');
        });

        // Show corresponding page with transition
        const targetPage = document.getElementById(pageName);
        if (targetPage) {
            setTimeout(() => {
                targetPage.classList.add('active');
            }, 50);

            // Scroll to top of snap container or window
            const snapContainer = document.querySelector('.snap-container');
            if (snapContainer && pageName === 'home') {
                snapContainer.scrollTop = 0;
            }
            window.scrollTo({ top: 0, behavior: 'instant' });
        }
    }

    // Make navigateToPage globally accessible for animations.js
    window.navigateToPage = navigateToPage;

    // Handle browser back/forward buttons
    window.addEventListener('popstate', function (event) {
        const hash = window.location.hash.substring(1);
        if (hash && document.getElementById(hash)) {
            navigateToPage(hash);
        } else {
            navigateToPage('home');
        }
    });

    // Listen for hashchange events (from CTA clicks)
    window.addEventListener('hashchange', function () {
        const hash = window.location.hash.substring(1);
        if (hash && document.getElementById(hash)) {
            navigateToPage(hash);
        }
    });

    // Handle direct navigation via URL hash on page load
    function handleInitialHash() {
        const hash = window.location.hash.substring(1);
        if (hash && document.getElementById(hash)) {
            navigateToPage(hash);
        }
    }

    handleInitialHash();

    // Scroll arrow click handlers — advance to next snap section
    const scrollArrows = document.querySelectorAll('.scroll-arrow');
    scrollArrows.forEach(arrow => {
        arrow.addEventListener('click', function () {
            const currentSection = this.closest('.snap-section');
            const nextSection = currentSection.nextElementSibling;
            if (nextSection && nextSection.classList.contains('snap-section')) {
                nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            } else {
                // If there's no next snap-section, try scrolling to the next sibling
                const container = currentSection.parentElement;
                const allSections = container.querySelectorAll('.snap-section');
                const currentIndex = Array.from(allSections).indexOf(currentSection);
                if (currentIndex < allSections.length - 1) {
                    allSections[currentIndex + 1].scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });
    });

    // Console easter egg
    console.log(`
    ███████╗███████╗██╗  ██╗████████╗██╗   ██╗██████╗ 
    ██╔════╝██╔════╝██║ ██╔╝╚══██╔══╝██║   ██║██╔══██╗
    ███████╗█████╗  █████╔╝    ██║   ██║   ██║██████╔╝
    ╚════██║██╔══╝  ██╔═██╗    ██║   ██║   ██║██╔══██╗
    ███████║███████╗██║  ██╗   ██║   ╚██████╔╝██║  ██║
    ╚══════╝╚══════╝╚═╝  ╚═╝   ╚═╝    ╚═════╝ ╚═╝  ╚═╝
    
    [ SYSTEM_INTENT: ENGAGED ]
    Balance the Chaos.
    
    Built with discipline. © 2026 SEKTUR
    `);
});
