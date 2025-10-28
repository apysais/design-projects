// Testimonial Carousel Functionality
let currentTestimonial = 0;
const testimonialCards = document.querySelectorAll('.testimonial-card');
const indicators = document.querySelectorAll('.indicator');

function showTestimonial(index) {
    // Hide all testimonials
    testimonialCards.forEach(card => {
        card.classList.remove('active');
    });
    
    // Remove active state from all indicators
    indicators.forEach(indicator => {
        indicator.classList.remove('active');
    });
    
    // Show selected testimonial
    if (testimonialCards[index]) {
        testimonialCards[index].classList.add('active');
        if (indicators[index]) {
            indicators[index].classList.add('active');
        }
    }
}

function nextTestimonial() {
    currentTestimonial = (currentTestimonial + 1) % testimonialCards.length;
    showTestimonial(currentTestimonial);
}

function previousTestimonial() {
    currentTestimonial = (currentTestimonial - 1 + testimonialCards.length) % testimonialCards.length;
    showTestimonial(currentTestimonial);
}

function goToTestimonial(index) {
    currentTestimonial = index;
    showTestimonial(currentTestimonial);
}

// Auto-rotate testimonials every 5 seconds
let autoRotateInterval = setInterval(nextTestimonial, 5000);

// Pause auto-rotate when user interacts
document.querySelector('.testimonials-carousel')?.addEventListener('mouseenter', () => {
    clearInterval(autoRotateInterval);
});

// Resume auto-rotate when user stops interacting
document.querySelector('.testimonials-carousel')?.addEventListener('mouseleave', () => {
    autoRotateInterval = setInterval(nextTestimonial, 5000);
});

// FAQ Accordion Functionality
function toggleFAQ(button) {
    const faqItem = button.parentElement;
    const isActive = faqItem.classList.contains('active');
    
    // Close all FAQ items
    document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // If the clicked item wasn't active, open it
    if (!isActive) {
        faqItem.classList.add('active');
    }
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = target.offsetTop - navbarHeight - 20;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Add scroll-based navbar shadow
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
        navbar.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.08)';
    } else {
        navbar.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Add animation styles and observe elements
document.addEventListener('DOMContentLoaded', () => {
    // Add initial styles for animated elements
    const animatedElements = document.querySelectorAll('.feature-card, .pricing-card, .testimonial-card, .faq-item');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
});

// Add keyboard navigation for testimonials
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        previousTestimonial();
    } else if (e.key === 'ArrowRight') {
        nextTestimonial();
    }
});

// Handle pricing card hover effects with enhanced animations
document.querySelectorAll('.pricing-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        // Subtle scale effect is already in CSS
        this.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
    });
});

// Add loading animation for mockup elements
document.addEventListener('DOMContentLoaded', () => {
    const mockupCards = document.querySelectorAll('.mockup-card');
    const mockupChart = document.querySelector('.mockup-chart');
    
    // Animate mockup cards with stagger effect
    mockupCards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '0';
            card.style.animation = 'fadeInUp 0.6s ease-out forwards';
        }, index * 100);
    });
    
    // Animate chart
    if (mockupChart) {
        setTimeout(() => {
            mockupChart.style.opacity = '0';
            mockupChart.style.animation = 'fadeInUp 0.6s ease-out forwards';
        }, mockupCards.length * 100);
    }
});

// Add CSS animation keyframes dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes pulse {
        0%, 100% {
            opacity: 1;
        }
        50% {
            opacity: 0.8;
        }
    }
`;
document.head.appendChild(style);

// Console welcome message
console.log('%c🎨 SaaS Landing Page Mockup', 'font-size: 20px; font-weight: bold; color: #2563EB;');
console.log('%cHigh-Fidelity Design by SaaSify', 'font-size: 12px; color: #6B7280;');
console.log('%c\nDesign Specifications:', 'font-weight: bold; color: #111827;');
console.log('• Primary Color: #2563EB (indigo-600)');
console.log('• Typography: Inter font family');
console.log('• Layout: Responsive grid with breakpoints at 1024px, 768px, and 480px');
console.log('• Accessibility: WCAG 2.1 AA compliant contrast ratios');
console.log('• Animations: Subtle hover states and scroll-based reveals');
