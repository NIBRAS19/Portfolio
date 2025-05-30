// Mobile Menu Toggle
const toggleBtn = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');
const nav = document.querySelector('nav');

toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    navLinks.classList.toggle('active');
    toggleBtn.innerHTML = navLinks.classList.contains('active') ?
        '<i class="fas fa-times"></i>' :
        '<i class="fas fa-bars"></i>';
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        toggleBtn.innerHTML = '<i class="fas fa-bars"></i>';
    }
});

// Particles.js Configuration
const particlesConfig = {
    particles: {
        number: {
            value: 100, // increased for a denser look
            density: { enable: true, value_area: 900 }
        },
        color: { value: "#ffffff" },
        shape: { type: "circle" },
        opacity: {
            value: 0.6,
            random: true,
            anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.3,
                sync: false
            }
        },
        size: {
            value: 4,
            random: true,
            anim: {
                enable: true,
                speed: 2,
                size_min: 0.5,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 130,
            color: "#ffffff",
            opacity: 0.4,
            width: 1.5
        },
        move: {
            enable: true,
            speed: 1.8, // smoother slower movement
            direction: "none",
            random: false,
            straight: false,
            out_mode: "bounce", // more natural edge behavior
            attract: {
                enable: true,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: { enable: true, mode: "grab" },
            onclick: { enable: false }
        },
        modes: {
            grab: {
                distance: 150,
                line_linked: {
                    opacity: 0.8
                }
            }
        }
    },
    retina_detect: true
};

// Initialize Particles
particlesJS("particles-js", particlesConfig);

// Handle window resize
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        particlesJS("particles-js", particlesConfig);
    }, 250);
}); 
