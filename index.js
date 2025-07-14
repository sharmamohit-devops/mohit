      // Mobile menu toggle
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const navLinks = document.getElementById('navLinks');

        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = mobileMenuBtn.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-links li').forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    navLinks.classList.remove('active');
                    const icon = mobileMenuBtn.querySelector('i');
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            });
        });

        // Enhanced theme toggle with better contrast
        const themeToggle = document.getElementById('theme-toggle');
        themeToggle.addEventListener('change', () => {
            document.body.classList.toggle('light-theme');
            
            // Save preference to localStorage
            if (themeToggle.checked) {
                localStorage.setItem('theme', 'light');
            } else {
                localStorage.setItem('theme', 'dark');
            }
            
            // Force redraw to prevent animation glitches
            document.body.style.display = 'none';
            document.body.offsetHeight; // Trigger reflow
            document.body.style.display = '';
        });

        // Check for saved theme preference
        if (localStorage.getItem('theme') === 'light') {
            themeToggle.checked = true;
            document.body.classList.add('light-theme');
        }

        // Navigation scroll behavior
        document.querySelectorAll('nav ul li').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const sectionId = link.getAttribute('data-section');
                const section = document.getElementById(sectionId);
                
                if (section) {
                    window.scrollTo({
                        top: section.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Update copyright year
        document.getElementById('current-year').textContent = new Date().getFullYear();

        // Animate elements on scroll
        const animateOnScroll = () => {
            const elements = document.querySelectorAll('.skill-card, .project-card, .timeline-item, .contact-container');
            
            elements.forEach(element => {
                const elementPosition = element.getBoundingClientRect().top;
                const screenPosition = window.innerHeight / 1.2;
                
                if (elementPosition < screenPosition) {
                    element.classList.add('animate');
                }
            });
        };

        window.addEventListener('scroll', animateOnScroll);
        window.addEventListener('load', animateOnScroll);

        // Navbar scroll effect
        window.addEventListener('scroll', () => {
            const nav = document.querySelector('.nav');
            if (window.scrollY > 50) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
        });

        // Create floating particles
        function createParticles() {
            const particlesContainer = document.querySelector('.particles');
            const particleCount = window.innerWidth < 768 ? 10 : 15;
            
            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.classList.add('particle');
                
                // Random size between 5px and 15px
                const size = Math.random() * 10 + 5;
                particle.style.width = `${size}px`;
                particle.style.height = `${size}px`;
                
                // Random position
                particle.style.left = `${Math.random() * 100}%`;
                particle.style.top = `${Math.random() * 100}%`;
                
                // Random animation duration between 10s and 20s
                const duration = Math.random() * 10 + 10;
                particle.style.animationDuration = `${duration}s`;
                
                // Random delay
                particle.style.animationDelay = `${Math.random() * 5}s`;
                
                particlesContainer.appendChild(particle);
            }
        }

        createParticles();

        // Enhanced project card interactions
        const projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                if (window.innerWidth > 768) { // Only on desktop
                    card.style.zIndex = '10';
                }
            });
            
            card.addEventListener('mouseleave', () => {
                if (window.innerWidth > 768) { // Only on desktop
                    card.style.zIndex = '';
                }
            });
        });

        // Contact form submission
      const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Get form elements
    const formData = new FormData(contactForm);
    const submitButton = contactForm.querySelector('button[type="submit"]');
    
    // Disable button to prevent multiple submissions
    submitButton.disabled = true;
    submitButton.textContent = 'Sending...';
    
    try {
      // Send to FormSubmit
      const response = await fetch(contactForm.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        // Show success message
        alert('Thank you for your message! I will get back to you soon.');
        // Reset form
        contactForm.reset();
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('There was an error sending your message. Please try again later.');
    } finally {
      // Re-enable button
      submitButton.disabled = false;
      submitButton.textContent = 'Submit Form';
    }
  });
}

        // Fixed typewriter effect
        const typewriterElement = document.querySelector('.typewriter');
        if (typewriterElement) {
            // Reset animation to ensure it plays on page load
            typewriterElement.style.animation = 'none';
            void typewriterElement.offsetWidth; // Trigger reflow
            typewriterElement.style.animation = 'typing 3.5s steps(40, end) forwards, blink-caret 0.75s step-end infinite';
        }

// Update copyright year automatically
document.addEventListener('DOMContentLoaded', function () {
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // Add smooth scroll to top functionality
  const footer = document.querySelector('footer');
  footer.addEventListener('click', function (e) {
    if (e.target.tagName === 'FOOTER' || e.target.tagName === 'P') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  });

  // Add animation on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  const footerElements = document.querySelectorAll('footer > *');
  footerElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.5s ease-out';
    observer.observe(el);
  });
});

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}


function animateEducationItems() {
  const educationItems = document.querySelectorAll('.education-item');
  educationItems.forEach((item) => {
    if (isInViewport(item)) {
      item.classList.add('visible');
    }
  });
}


window.addEventListener('scroll', animateEducationItems);
window.addEventListener('load', animateEducationItems);

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}


function animateEducationItems() {
  const educationItems = document.querySelectorAll('.education-item');
  educationItems.forEach((item) => {
    if (isInViewport(item)) {
      item.classList.add('visible');
    }
  });
}


window.addEventListener('scroll', animateEducationItems);
window.addEventListener('load', animateEducationItems);




