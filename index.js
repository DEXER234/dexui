document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-right');
    const navLinks = document.querySelectorAll('.nav-right ul li a');
    const hamburgerIcon = hamburger.querySelector('i');

    const toggleMenu = () => {
        const isActive = navMenu.classList.toggle('active');
        hamburger.setAttribute('aria-expanded', isActive);

        if (isActive) {
            hamburgerIcon.classList.remove('fa-bars');
            hamburgerIcon.classList.add('fa-xmark');
        } else {
            hamburgerIcon.classList.remove('fa-xmark');
            hamburgerIcon.classList.add('fa-bars');
        }
    };

    hamburger.addEventListener('click', toggleMenu);

    // Close menu when a link is clicked for smooth scrolling on the same page
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                toggleMenu();
            }
        });
    });

    // Scroll-triggered animations for cards
    const animatedCards = document.querySelectorAll('.skill-item, .project-card');

    const cardObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Animate only once
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the card is visible
    });

    animatedCards.forEach(card => {
        cardObserver.observe(card);
    });
});