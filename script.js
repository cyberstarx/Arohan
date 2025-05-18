    // Header scroll effect
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    const mobileToggle = document.getElementById('mobile-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    mobileToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Testimonial slider
    const dots = document.querySelectorAll('.dot');
    const testimonials = document.querySelectorAll('.testimonial-item');
    let currentSlide = 0;
    const totalSlides = 3; // We only rendered one testimonial but pretend there are 3

    // Initialize testimonial rotation
    function showSlide(index) {
        // Reset all slides and dots
        testimonials.forEach(slide => {
            slide.style.display = 'none';
        });
        
        dots.forEach(dot => {
            dot.classList.remove('active');
        });
        
        // Show current slide and activate dot
        if (testimonials[0]) {
            testimonials[0].style.display = 'block';
        }
        dots[index].classList.add('active');
    }

    // Set up dot click events
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            showSlide(currentSlide);
        });
    });

    // Auto rotate testimonials
    setInterval(() => {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }, 5000);

    // Form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const formEntries = Object.fromEntries(formData.entries());
            
            // Simulate form submission
            console.log('Form submitted:', formEntries);
            
            // Show success message
            contactForm.innerHTML = '<div class="success-message"><h3>Thank you for your message!</h3><p>We will get back to you shortly.</p></div>';
            
            // Style success message
            const successMessage = document.querySelector('.success-message');
            if (successMessage) {
                successMessage.style.textAlign = 'center';
                successMessage.style.padding = '2rem';
            }
        });
    }

    // Reveal animations on scroll
    const revealElements = document.querySelectorAll('.about-content, .collection-item, .service-item, .contact-detail');
    
    function checkReveal() {
        const triggerBottom = window.innerHeight * 0.8;
        
        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            
            if (elementTop < triggerBottom) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Apply initial styles for animation
    revealElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Check on scroll and initial load
    window.addEventListener('scroll', checkReveal);
    window.addEventListener('load', checkReveal);
    
    // Preload transitions for smoother animations
    window.addEventListener('load', () => {
        document.body.classList.add('loaded');
    });