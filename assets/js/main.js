/**
 * AgenticForce.io - Main JavaScript
 * Enhanced interactions and animations
 */

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initNavbar();
    initScrollProgress();
    initParallax();
    initAnimations();
    initMagneticEffect();
    initSmoothScrolling();
    initCardHoverEffects();
    initTechParticles();
    initCustomCursor();
});

// --- Enhanced Navbar Scroll Effect ---
function initNavbar() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('shadow-lg', 'shadow-black/20');
        } else {
            navbar.classList.remove('shadow-lg', 'shadow-black/20');
        }
    });
}

// --- Scroll Progress Bar ---
function initScrollProgress() {
    const progressBar = document.querySelector('.scroll-progress');
    if (!progressBar) return;
    
    function updateScrollProgress() {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.scrollHeight - window.innerHeight;
        const scrollPercent = scrollTop / docHeight * 100;
        progressBar.style.width = scrollPercent + '%';
    }
    
    window.addEventListener('scroll', updateScrollProgress);
}

// --- Parallax Effect ---
function initParallax() {
    const parallaxBg = document.querySelector('.parallax-bg');
    if (!parallaxBg) return;
    
    function updateParallax() {
        const scrolled = window.pageYOffset;
        parallaxBg.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
    
    window.addEventListener('scroll', updateParallax);
}

// --- Intersection Observer for Animations ---
function initAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all fade-in elements
    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

    // Initialize animations on page load
    setTimeout(() => {
        document.querySelectorAll('.fade-in').forEach((el, index) => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                setTimeout(() => {
                    el.classList.add('visible');
                }, index * 100);
            }
        });
    }, 300);
}

// --- Magnetic Effect ---
function initMagneticEffect() {
    document.querySelectorAll('.magnetic').forEach(magnetic => {
        magnetic.addEventListener('mousemove', (e) => {
            const rect = magnetic.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            const moveX = x * 0.1;
            const moveY = y * 0.1;
            
            magnetic.style.transform = `translate(${moveX}px, ${moveY}px)`;
        });
        
        magnetic.addEventListener('mouseleave', () => {
            magnetic.style.transform = 'translate(0, 0)';
        });
    });
}

// --- Smooth Scrolling for Anchors ---
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// --- Enhanced Card Hover Effects ---
function initCardHoverEffects() {
    document.querySelectorAll('.card-modern').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-8px) scale(1.02) rotateX(2deg)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1) rotateX(0deg)';
        });
        
        // Tilt effect based on mouse position
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            
            const deltaX = e.clientX - centerX;
            const deltaY = e.clientY - centerY;
            
            const rotateX = deltaY / 10;
            const rotateY = deltaX / 10;
            
            card.style.transform = `translateY(-8px) scale(1.02) rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
        });
    });
}

// --- Tech Particles Animation ---
function initTechParticles() {
    const techSection = document.querySelector('.tech-section');
    if (!techSection) return;
    
    const bgAnimation = techSection.querySelector('.tech-bg-animation');
    if (!bgAnimation) return;
    
    function createParticle() {
        const particle = document.createElement('div');
        particle.className = 'tech-particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDuration = (Math.random() * 4 + 4) + 's';
        particle.style.animationDelay = Math.random() * 2 + 's';
        
        bgAnimation.appendChild(particle);
        
        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        }, 8000);
    }
    
    // Create particles periodically
    setInterval(createParticle, 800);
    
    // Create initial particles
    for (let i = 0; i < 5; i++) {
        setTimeout(createParticle, i * 200);
    }
}

// --- Custom Cursor Effect ---
function initCustomCursor() {
    let cursor = null;
    let isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
    if (!isTouch) {
        cursor = document.createElement('div');
        cursor.style.cssText = `
            position: fixed;
            width: 20px;
            height: 20px;
            background: rgba(59, 130, 246, 0.3);
            border: 1px solid rgba(59, 130, 246, 0.6);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            transition: all 0.1s ease;
            transform: translate(-50%, -50%);
        `;
        document.body.appendChild(cursor);
        
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });
        
        document.querySelectorAll('a, button, .card-modern, .magnetic').forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.style.transform = 'translate(-50%, -50%) scale(2)';
                cursor.style.background = 'rgba(59, 130, 246, 0.1)';
            });
            
            el.addEventListener('mouseleave', () => {
                cursor.style.transform = 'translate(-50%, -50%) scale(1)';
                cursor.style.background = 'rgba(59, 130, 246, 0.3)';
            });
        });
    }
}

// Utility Functions
const Utils = {
    debounce: function(func, wait, immediate) {
        let timeout;
        return function executedFunction() {
            const context = this;
            const args = arguments;
            const later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            const callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    },

    throttle: function(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }
};

// Performance optimized scroll handlers
window.addEventListener('scroll', Utils.throttle(function() {
    // Scroll-dependent animations can be added here
}, 16)); // ~60fps