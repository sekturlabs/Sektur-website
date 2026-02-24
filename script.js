// SEKTUR COMMAND CENTER - HOMEPAGE INTERACTIONS

document.addEventListener('DOMContentLoaded', function () {
    // Scroll arrow click handlers — advance to next snap section
    const scrollArrows = document.querySelectorAll('.scroll-arrow');
    scrollArrows.forEach(arrow => {
        arrow.addEventListener('click', function () {
            const currentSection = this.closest('.snap-section');
            const nextSection = currentSection.nextElementSibling;
            if (nextSection && nextSection.classList.contains('snap-section')) {
                nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // Orb tap-to-glow interaction (Coming Soon orbs)
    document.querySelectorAll('.orb-only').forEach(orb => {
        orb.addEventListener('click', function () {
            const wasActive = this.classList.contains('orb-tapped');
            // Reset all orbs
            document.querySelectorAll('.orb-only').forEach(o => o.classList.remove('orb-tapped'));
            // Toggle tapped state (if it wasn't active, activate it)
            if (!wasActive) {
                this.classList.add('orb-tapped');
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
