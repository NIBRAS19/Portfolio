// HOME SECTION SCRIPT

// GSAP Animations
gsap.from(".navbar", { duration: 1, y: -100, ease: "bounce" });
gsap.from(".content h1 span", { duration: 1, x: -200, opacity: 0, stagger: 0.3 });
gsap.from(".content p", { duration: 1, x: -200, opacity: 0, delay: 1 });
gsap.from(".buttons .btn", { duration: 1, y: 50, opacity: 0, stagger: 0.3, delay: 1.5 });
gsap.from(".icon img", { duration: 1.5, scale: 0, ease: "back" });

// Side Navigation Functionality
document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('toggleBtn');
    const sideNav = document.getElementById('sideNav');
    const closeSideNavBtn = document.getElementById('closeSideNavBtn');

    toggleBtn.addEventListener('click', () => {
        gsap.to(sideNav, { x: 250, duration: 0.5, ease: "power2.out" });
        sideNav.style.display = 'flex';
        gsap.to(sideNav.querySelectorAll('a'), { opacity: 1, x: 0, stagger: 0.1 });
        gsap.to(closeSideNavBtn, { rotation: 360, duration: 0.5 });
    });

    closeSideNavBtn.addEventListener('click', () => {
        closeSideNav();
    });

    sideNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            closeSideNav();
        });
    });

    function closeSideNav() {
        gsap.to(sideNav.querySelectorAll('a'), { opacity: 0, x: -20, stagger: 0.1 });
        gsap.to(closeSideNavBtn, { rotation: 0, duration: 0.5 });
        gsap.to(sideNav, { x: -250, duration: 0.5, ease: "power2.in", onComplete: () => { sideNav.style.display = 'none'; } });
    }

    window.addEventListener('click', (e) => {
        if (!sideNav.contains(e.target) && e.target !== toggleBtn) {
            closeSideNav();
        }
    });
});

// SKILL SECTION SCRIPTS

document.addEventListener("DOMContentLoaded", function() {
   // Initial animation for skill items
   gsap.from(".tech-item", {
       opacity: 0,
       y: 50,
       duration: 1,
       ease: "power2.out",
       stagger: 0.1
   });

   const buttons = document.querySelectorAll(".skill-btn");
   const items = document.querySelectorAll(".tech-item");

   buttons.forEach(button => {
       button.addEventListener("click", function() {
           const category = this.dataset.category;

           // Toggle active class on buttons
           buttons.forEach(btn => btn.classList.remove("active"));
           this.classList.add("active");

           // Filter items
           items.forEach(item => {
               if (category === "all" || item.dataset.category === category) {
                   gsap.to(item, {
                       opacity: 1,
                       scale: 1,
                       y: 0,
                       duration: 0.5,
                       ease: "power2.out",
                       display: "block"
                   });
               } else {
                   gsap.to(item, {
                       opacity: 0,
                       scale: 0.5,
                       y: 50,
                       duration: 0.5,
                       ease: "power2.out",
                       display: "none"
                   });
               }
           });
       });
   });

   // Default selection
   function applyDefaultSelection() {
       const screenWidth = window.innerWidth;
       const defaultCategory = screenWidth <= 768 ? 'frontend' : 'all';
       const defaultButton = document.querySelector(`.skill-btn[data-category="${defaultCategory}"]`);
       defaultButton.click();
   }

   applyDefaultSelection();
   window.addEventListener('resize', applyDefaultSelection);
});

// ABOUT SECTION SCRIPTS

document.addEventListener("DOMContentLoaded", function() {
   gsap.registerPlugin(ScrollTrigger);

   gsap.from(".aboutMeTitle h1", {
       opacity: 0,
       y: -50,
       duration: 1,
       ease: "power1.out",
       scrollTrigger: {
           trigger: ".aboutMeTitle",
           start: "top 80%",
           end: "bottom 60%",
           toggleActions: "play none none reverse"
       }
   });

   gsap.from(".aboutMeMain", {
       opacity: 0,
       y: 50,
       duration: 1,
       ease: "power1.out",
       scrollTrigger: {
           trigger: ".aboutMeMain",
           start: "top 80%",
           end: "bottom 60%",
           toggleActions: "play none none reverse"
       }
   });

   gsap.from(".about-image", {
       opacity: 0,
       x: -50,
       duration: 1,
       ease: "power1.out",
       scrollTrigger: {
           trigger: ".about-image",
           start: "top 80%",
           end: "bottom 60%",
           toggleActions: "play none none reverse"
       }
   });

   gsap.from(".about-paragraph", {
       opacity: 0,
       x: 50,
       duration: 1,
       ease: "power1.out",
       scrollTrigger: {
           trigger: ".about-paragraph",
           start: "top 80%",
           end: "bottom 60%",
           toggleActions: "play none none reverse"
       }
   });
});

// PROJECT SECTION SCRIPTS

document.addEventListener("DOMContentLoaded", function() {
   gsap.registerPlugin(ScrollTrigger);

   gsap.from(".work-item", {
     duration: 1,
     y: 50,
     opacity: 0,
     stagger: 0.3,
     ease: "power3.out",
     scrollTrigger: {
       trigger: ".work-section",
       start: "top 80%",
       end: "bottom 20%",
       toggleActions: "play none none reverse"
     }
   });

   // Image sliders
   gsap.from(".work-image img", {
     duration: 1.5,
     x: (index, target) => target.classList.contains("reverse") ? 100 : -100,
     opacity: 0,
     ease: "power3.out",
     scrollTrigger: {
       trigger: ".work-section",
       start: "top 80%",
       end: "bottom 20%",
       toggleActions: "play none none reverse"
     }
   });
});

// CONTACT SECTION SCRIPTS

document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);
  
    gsap.from('.contact-title', {
      duration: 1,
      y: -50,
      opacity: 0,
      ease: 'bounce',
      scrollTrigger: {
        trigger: '.contact-title',
        start: 'top 80%',
        end: 'bottom top',
        toggleActions: 'play none none reverse'
      }
    });
  
    gsap.from('.contact-subtitle', {
      duration: 1.5,
      x: -50,
      opacity: 0,
      ease: 'power3.inOut',
      scrollTrigger: {
        trigger: '.contact-subtitle',
        start: 'top 80%',
        end: 'bottom top',
        toggleActions: 'play none none reverse'
      }
    });
  
    gsap.from('.contact-paragraph', {
      duration: 1.5,
      y: 30,
      opacity: 0,
      ease: 'power3.inOut',
      scrollTrigger: {
        trigger: '.contact-paragraph',
        start: 'top 80%',
        end: 'bottom top',
        toggleActions: 'play none none reverse'
      }
    });
  
    gsap.from('.contact-item', {
      duration: 1,
      y: 50,
      opacity: 0,
      ease: 'power3.inOut',
      stagger: 0.2,
      scrollTrigger: {
        trigger: '.contact-info',
        start: 'top 80%',
        end: 'bottom top',
        toggleActions: 'play none none reverse'
      }
    });
  
    const icons = document.querySelectorAll('.contact-icon');
    
    icons.forEach(icon => {
      icon.addEventListener('mouseenter', () => {
        gsap.to(icon, { duration: 0.3, scale: 1.1, backgroundColor: '#0056b3', ease: 'power1.inOut' });
      });
  
      icon.addEventListener('mouseleave', () => {
        gsap.to(icon, { duration: 0.3, scale: 1, backgroundColor: '#ffffff', ease: 'power1.inOut' });
      });
    });
  });
  
  // DARK MODE SCRIPTS

  document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.querySelector('.toggle');
    const body = document.body;

    toggle.addEventListener('click', () => {
        if (body.classList.contains('day-mode')) {
            switchToNightMode();
        } else {
            switchToDayMode();
        }
    });

    function switchToDayMode() {
        body.classList.remove('night-mode');
        body.classList.add('day-mode');
    }

    function switchToNightMode() {
        body.classList.remove('day-mode');
        body.classList.add('night-mode');
    }

    // Initial mode
    body.classList.add('day-mode');
});
