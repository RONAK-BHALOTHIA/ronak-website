// Smooth Scrolling (Optional, helps if links stick)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Submission Alert (Simulating backend)
const form = document.getElementById('contactForm');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert("Thank you! Your message has been sent (Demo).");
    form.reset();
});

// Simple Scroll Animation (Reveal elements on scroll)
window.addEventListener('scroll', reveal);

function reveal() {
    var reveals = document.querySelectorAll('.section, .skill-card');
    
    for(var i = 0; i < reveals.length; i++) {
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;
        
        if(revealtop < windowheight - revealpoint) {
            reveals[i].style.opacity = '1';
            reveals[i].style.transform = 'translateY(0)';
        }
    }
}