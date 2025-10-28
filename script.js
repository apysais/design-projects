// Testimonial Carousel
class TestimonialCarousel {
    constructor() {
        this.currentIndex = 0;
        this.cards = document.querySelectorAll('.testimonial-card');
        this.dots = document.querySelectorAll('.dot');
        this.prevBtn = document.querySelector('.carousel-btn.prev');
        this.nextBtn = document.querySelector('.carousel-btn.next');
        
        this.init();
    }
    
    init() {
        // Set up event listeners
        this.prevBtn.addEventListener('click', () => this.previous());
        this.nextBtn.addEventListener('click', () => this.next());
        
        this.dots.forEach((dot, index) => {
            dot.addEventListener('click', () => this.goToSlide(index));
        });
        
        // Auto-advance every 5 seconds
        this.autoPlay();
    }
    
    goToSlide(index) {
        // Remove active class from current slide
        this.cards[this.currentIndex].classList.remove('active');
        this.dots[this.currentIndex].classList.remove('active');
        
        // Update index
        this.currentIndex = index;
        
        // Add active class to new slide
        this.cards[this.currentIndex].classList.add('active');
        this.dots[this.currentIndex].classList.add('active');
    }
    
    next() {
        const nextIndex = (this.currentIndex + 1) % this.cards.length;
        this.goToSlide(nextIndex);
    }
    
    previous() {
        const prevIndex = (this.currentIndex - 1 + this.cards.length) % this.cards.length;
        this.goToSlide(prevIndex);
    }
    
    autoPlay() {
        setInterval(() => {
            this.next();
        }, 5000);
    }
}

// FAQ Accordion
class FAQAccordion {
    constructor() {
        this.items = document.querySelectorAll('.faq-item');
        this.init();
    }
    
    init() {
        this.items.forEach(item => {
            const question = item.querySelector('.faq-question');
            question.addEventListener('click', () => this.toggleItem(item));
        });
    }
    
    toggleItem(item) {
        const isActive = item.classList.contains('active');
        
        // Close all items
        this.items.forEach(i => i.classList.remove('active'));
        
        // If the clicked item wasn't active, open it
        if (!isActive) {
            item.classList.add('active');
        }
    }
}

// Smooth Scrolling
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            
            // Skip if href is just "#"
            if (href === '#') {
                e.preventDefault();
                return;
            }
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                
                const navHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = target.offsetTop - navHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Scroll Animation Observer
function initScrollAnimations() {
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
    
    // Observe elements with animation
    const animateElements = document.querySelectorAll('.feature-card, .pricing-card, .showcase-item');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Navbar Scroll Effect
function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            navbar.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.boxShadow = 'none';
        }
        
        lastScroll = currentScroll;
    });
}

// Initialize all components when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Initialize carousel
    new TestimonialCarousel();
    
    // Initialize FAQ accordion
    new FAQAccordion();
    
    // Initialize smooth scrolling
    initSmoothScroll();
    
    // Initialize scroll animations
    initScrollAnimations();
    
    // Initialize navbar scroll effect
    initNavbarScroll();
    
    console.log('CloudFlow landing page initialized successfully!');
});

// Handle window resize
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        // Recalculate any responsive elements if needed
        console.log('Window resized');
    }, 250);
});
