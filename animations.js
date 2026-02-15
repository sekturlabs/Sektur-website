// SEKTUR Website - Scroll Animations & Interactions

// ============================================
// INTERSECTION OBSERVER - Scroll-Triggered Animations
// ============================================

const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
};

const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');

            // If it's an ecosystem section, animate cards with stagger
            if (entry.target.classList.contains('ecosystem-section')) {
                const cards = entry.target.querySelectorAll('.app-card');
                cards.forEach((card, index) => {
                    setTimeout(() => {
                        card.classList.add('visible');
                    }, index * 100);
                });
            }
        }
    });
}, observerOptions);

// Observe all sections
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('[data-scroll-section]');
    sections.forEach(section => {
        fadeInObserver.observe(section);
    });

    // Hero section should be visible immediately
    const heroSection = document.querySelector('.hero.section');
    if (heroSection) {
        heroSection.classList.add('visible');
    }

    // Also observe within snap containers (IntersectionObserver needs the snap-container as root)
    const snapContainer = document.querySelector('.snap-container');
    if (snapContainer) {
        const snapObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');

                    if (entry.target.classList.contains('ecosystem-section')) {
                        const cards = entry.target.querySelectorAll('.app-card');
                        cards.forEach((card, index) => {
                            setTimeout(() => {
                                card.classList.add('visible');
                            }, index * 100);
                        });
                    }
                }
            });
        }, { threshold: 0.2, root: snapContainer });

        sections.forEach(section => {
            snapObserver.observe(section);
        });
    }
});

// ============================================
// PARALLAX EFFECT - Background Orb
// ============================================

let ticking = false;

function updateParallax() {
    const parallaxOrb = document.querySelector('.parallax-orb');
    if (!parallaxOrb) return;

    const snapContainer = document.querySelector('.snap-container');
    const scrolled = snapContainer ? snapContainer.scrollTop : window.pageYOffset;
    const missionSection = document.querySelector('.mission-section');

    if (missionSection) {
        const sectionTop = missionSection.offsetTop;
        const sectionHeight = missionSection.offsetHeight;
        const scrollProgress = (scrolled - sectionTop + window.innerHeight) / (sectionHeight + window.innerHeight);

        const translateY = (scrollProgress - 0.5) * 200;
        parallaxOrb.style.transform = `translate(-50%, calc(-50% + ${translateY}px))`;
    }

    ticking = false;
}

function requestParallaxUpdate() {
    if (!ticking) {
        window.requestAnimationFrame(updateParallax);
        ticking = true;
    }
}

// Listen for scroll on both window and snap container
window.addEventListener('scroll', requestParallaxUpdate, { passive: true });
document.addEventListener('DOMContentLoaded', () => {
    const snapContainer = document.querySelector('.snap-container');
    if (snapContainer) {
        snapContainer.addEventListener('scroll', requestParallaxUpdate, { passive: true });
    }
});

// ============================================
// SMOOTH SCROLL - Navigation Links
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Handle anchor clicks - skip CTA links (they use hash navigation for pages)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');

            // If it's an app-card CTA link, let the hash change handle it
            if (this.classList.contains('app-card-cta')) {
                // Don't prevent default — let the hash change trigger navigateToPage
                return;
            }

            e.preventDefault();
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// ============================================
// REDUCED MOTION SUPPORT
// ============================================

if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.documentElement.style.setProperty('--animation-duration', '0.01ms');
    document.documentElement.style.setProperty('--transition-duration', '0.01ms');
}
