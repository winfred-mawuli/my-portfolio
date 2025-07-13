// DOM Elements
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');
const timelineItems = document.querySelectorAll('.timeline-item');
const stats = document.querySelectorAll('.stat-number');
const techItems = document.querySelectorAll('.tech-item');

// Mobile Navigation Toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Active navigation link based on scroll position
function updateActiveNav() {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', updateActiveNav);

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

// Animate tech items when they come into view
const techObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const techItems = entry.target.querySelectorAll('.tech-item');
            techItems.forEach((item, index) => {
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'translateY(0)';
                }, index * 100);
            });
        }
    });
}, observerOptions);

// Observe skills section
const skillsSection = document.querySelector('.skills');
if (skillsSection) {
    techObserver.observe(skillsSection);
}

// Animate timeline items
const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateX(0)';
        }
    });
}, observerOptions);

// Initialize timeline animations
timelineItems.forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateX(-50px)';
    item.style.transition = `opacity 0.6s ease ${index * 0.2}s, transform 0.6s ease ${index * 0.2}s`;
    timelineObserver.observe(item);
});

// Animate statistics counters
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const target = entry.target;
            const finalValue = target.textContent.replace('+', '');
            const isNumber = !isNaN(finalValue);
            
            if (isNumber) {
                animateCounter(target, 0, parseInt(finalValue), 2000);
            }
        }
    });
}, observerOptions);

stats.forEach(stat => {
    statsObserver.observe(stat);
});

// Counter animation function
function animateCounter(element, start, end, duration) {
    const range = end - start;
    const increment = range / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
            current = end;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current) + '+';
    }, 16);
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70; // Account for navbar height
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Form handling
const contactForm = document.querySelector('.form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');
        
        // Simple validation
        if (!name || !email || !subject || !message) {
            showNotification('Please fill in all fields', 'error');
            return;
        }
        
        if (!isValidEmail(email)) {
            showNotification('Please enter a valid email address', 'error');
            return;
        }
        
        // Simulate form submission
        const submitBtn = this.querySelector('.btn-primary');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
            this.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 2000);
    });
}

// Email validation function
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Style the notification
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        padding: '1rem 1.5rem',
        borderRadius: '10px',
        color: 'white',
        fontWeight: '600',
        zIndex: '10000',
        opacity: '0',
        transform: 'translateX(100%)',
        transition: 'all 0.3s ease',
        maxWidth: '300px',
        wordWrap: 'break-word'
    });
    
    // Set background color based on type
    const colors = {
        success: '#22c55e',
        error: '#ef4444',
        info: '#3b82f6'
    };
    notification.style.backgroundColor = colors[type] || colors.info;
    
    // Add to DOM
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after delay
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 4000);
}

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const heroContent = document.querySelector('.hero-content');
    
    if (hero && heroContent) {
        const rate = scrolled * -0.5;
        heroContent.style.transform = `translateY(${rate}px)`;
    }
});

// Add loading animation to page
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Animate hero elements
    const heroElements = document.querySelectorAll('.hero-title > span, .hero-description, .hero-buttons');
    heroElements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, index * 200 + 500);
    });
});

// Add scroll-triggered animations for cards and sections
const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, { threshold: 0.1 });

// CV Download tracking and feedback
document.addEventListener('DOMContentLoaded', () => {
    const downloadBtn = document.querySelector('.btn-download');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', (e) => {
            // Check if CV file exists
            const cvPath = downloadBtn.getAttribute('href');
            
            // Add visual feedback
            const originalText = downloadBtn.innerHTML;
            downloadBtn.innerHTML = '<span class="download-icon">⬇️</span>Downloading...';
            downloadBtn.style.pointerEvents = 'none';
            
            // Reset button after delay
            setTimeout(() => {
                downloadBtn.innerHTML = originalText;
                downloadBtn.style.pointerEvents = 'auto';
                showNotification('CV download started successfully!', 'success');
            }, 1500);
        });
    }
});

// Observe all cards and animated elements
document.querySelectorAll('.stat, .skill-category, .profile-card, .education-card, .certification-card, .contact-item').forEach(el => {
    el.classList.add('animate-on-scroll');
    cardObserver.observe(el);
});

// Add CSS for scroll animations
const style = document.createElement('style');
style.textContent = `
    .animate-on-scroll {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    .animate-on-scroll.animate-in {
        opacity: 1;
        transform: translateY(0);
    }
    
    .loaded {
        overflow-x: hidden;
    }
`;
document.head.appendChild(style);

// Typing effect for hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect on load
window.addEventListener('load', () => {
    const nameElement = document.querySelector('.title-name');
    if (nameElement) {
        const originalText = nameElement.textContent;
        setTimeout(() => {
            typeWriter(nameElement, originalText, 80);
        }, 1000);
    }
});

// Add floating animation to hero cards
function animateFloatingCards() {
    const cards = document.querySelectorAll('.floating-card');
    cards.forEach((card, index) => {
        const delay = index * 0.5;
        const amplitude = 10 + Math.random() * 10;
        const frequency = 0.002 + Math.random() * 0.001;
        
        function animate() {
            const time = Date.now() * frequency;
            const offset = Math.sin(time + delay) * amplitude;
            card.style.transform = `translateY(${offset}px)`;
            requestAnimationFrame(animate);
        }
        
        animate();
    });
}

// Start floating animation
window.addEventListener('load', animateFloatingCards);

// Add mouse parallax effect to hero
document.addEventListener('mousemove', (e) => {
    const hero = document.querySelector('.hero-visual');
    if (!hero) return;
    
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    
    const xPos = (clientX / innerWidth - 0.5) * 20;
    const yPos = (clientY / innerHeight - 0.5) * 20;
    
    const cards = document.querySelectorAll('.floating-card');
    cards.forEach((card, index) => {
        const factor = (index + 1) * 0.5;
        card.style.transform = `translate(${xPos * factor}px, ${yPos * factor}px)`;
    });
});

// Add scroll progress indicator
function createScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    Object.assign(progressBar.style, {
        position: 'fixed',
        top: '0',
        left: '0',
        width: '0%',
        height: '3px',
        background: 'linear-gradient(135deg, #f59e0b, #fbbf24)',
        zIndex: '10001',
        transition: 'width 0.1s ease'
    });
    
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressBar.style.width = `${scrollPercent}%`;
    });
}

// Initialize scroll progress
createScrollProgress();

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        // Close mobile menu if open
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debouncing to scroll handlers
window.addEventListener('scroll', debounce(updateActiveNav, 10));

// Tech stack hover effects
techItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'translateY(-5px) scale(1.05)';
    });
    
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'translateY(0) scale(1)';
    });
});

console.log('Portfolio website loaded successfully! 🚀');