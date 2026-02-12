// SEKTUR COMMAND CENTER - NAVIGATION SCRIPT

document.addEventListener(‘DOMContentLoaded’, function() {
// Get all orb containers and pages
const orbContainers = document.querySelectorAll(’.orb-container’);
const pages = document.querySelectorAll(’.page’);

```
// Set initial active state (home page)
const homeOrb = document.querySelector('[data-app="home"]').parentElement;
homeOrb.classList.add('active');

// Navigation function
function navigateToPage(appName) {
    // Remove active state from all orbs
    orbContainers.forEach(container => {
        container.classList.remove('active');
    });
    
    // Remove active state from all pages
    pages.forEach(page => {
        page.classList.remove('active');
    });
    
    // Add active state to clicked orb
    const clickedOrb = document.querySelector(`[data-app="${appName}"]`).parentElement;
    clickedOrb.classList.add('active');
    
    // Show corresponding page with transition
    const targetPage = document.getElementById(appName);
    setTimeout(() => {
        targetPage.classList.add('active');
    }, 50);
    
    // Scroll to top of content stage
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Update URL without page reload (optional - for clean URLs)
    if (history.pushState) {
        const newUrl = appName === 'home' ? '/' : `/#${appName}`;
        history.pushState({ page: appName }, '', newUrl);
    }
}

// Add click handlers to all orbs
orbContainers.forEach(container => {
    container.addEventListener('click', function() {
        const appName = this.querySelector('.orb').getAttribute('data-app');
        navigateToPage(appName);
    });
});

// Handle browser back/forward buttons
window.addEventListener('popstate', function(event) {
    if (event.state && event.state.page) {
        navigateToPage(event.state.page);
    } else {
        // If no state, go to home
        navigateToPage('home');
    }
});

// Handle direct navigation via URL hash on page load
function handleInitialHash() {
    const hash = window.location.hash.substring(1); // Remove '#'
    if (hash && document.getElementById(hash)) {
        navigateToPage(hash);
    }
}

handleInitialHash();

// Optional: Add keyboard navigation (arrow keys)
const appOrder = ['home', 'quota', 'stasis', 'entropy', 'kinetic', 'umbra', 'trace'];
let currentIndex = 0;

document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        e.preventDefault();
        currentIndex = (currentIndex + 1) % appOrder.length;
        navigateToPage(appOrder[currentIndex]);
    } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        e.preventDefault();
        currentIndex = (currentIndex - 1 + appOrder.length) % appOrder.length;
        navigateToPage(appOrder[currentIndex]);
    }
});

// Update current index when clicking
orbContainers.forEach(container => {
    container.addEventListener('click', function() {
        const appName = this.querySelector('.orb').getAttribute('data-app');
        currentIndex = appOrder.indexOf(appName);
    });
});

// Add subtle parallax effect to orbs on scroll
let ticking = false;

function updateParallax() {
    const scrolled = window.pageYOffset;
    
    orbContainers.forEach((container, index) => {
        const speed = 0.05 + (index * 0.01);
        const yPos = -(scrolled * speed);
        container.style.transform = `translateY(${yPos}px)`;
    });
    
    ticking = false;
}

window.addEventListener('scroll', function() {
    if (!ticking) {
        window.requestAnimationFrame(updateParallax);
        ticking = true;
    }
});

// Add glow effect on hover that affects background
orbContainers.forEach(container => {
    container.addEventListener('mouseenter', function() {
        const orb = this.querySelector('.orb');
        const appName = orb.getAttribute('data-app');
        
        // Get the orb's color class
        const glowElement = orb.querySelector('.orb-glow');
        const colorClass = Array.from(glowElement.classList).find(c => c.startsWith('orb-glow-'));
        
        if (colorClass) {
            const colorName = colorClass.replace('orb-glow-', '');
            addBackgroundGlow(colorName);
        }
    });
    
    container.addEventListener('mouseleave', function() {
        removeBackgroundGlow();
    });
});

function addBackgroundGlow(color) {
    const colors = {
        'white': 'rgba(255, 255, 255, 0.03)',
        'teal': 'rgba(0, 245, 212, 0.03)',
        'cyan': 'rgba(0, 240, 255, 0.03)',
        'amber': 'rgba(255, 176, 0, 0.03)',
        'blue': 'rgba(74, 158, 255, 0.03)',
        'purple': 'rgba(183, 148, 244, 0.03)',
        'green': 'rgba(57, 255, 20, 0.03)'
    };
    
    const glowColor = colors[color] || colors.white;
    document.body.style.background = `radial-gradient(circle at bottom right, ${glowColor}, #050505 60%)`;
}

function removeBackgroundGlow() {
    document.body.style.background = '#050505';
}

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
```

});
