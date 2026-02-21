// ===== DISCOUNT FEATURE INITIALIZATION =====
// Feature namespace for discount banner and modal
window.discountFeature = window.discountFeature || {
    promoCode: 'MEUMERECIDO',
    discountPercentage: 10,
    isModalOpen: false,

    // Initialize discount feature
    init: function() {
        const banner = document.querySelector('.discount-banner');
        if (banner) {
            banner.addEventListener('click', () => this.openModal());
        }
        // Close modal on overlay click
        const modal = document.getElementById('discountModal');
        if (modal) {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) this.closeModal();
            });
        }
        // ESC key closes modal
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isModalOpen) {
                this.closeModal();
            }
        });
    },

    // Open modal and track GA4 event
    openModal: function() {
        const modal = document.getElementById('discountModal');
        if (modal) {
            modal.style.display = 'flex';
            this.isModalOpen = true;
            document.body.style.overflow = 'hidden';
            // Track GA4 event
            if (typeof gtag !== 'undefined') {
                gtag('event', 'click_discount_code', {
                    'discount_percentage': this.discountPercentage,
                    'promo_code': this.promoCode,
                    'interaction_type': 'click_banner'
                });
            }
        }
    },

    // Close modal
    closeModal: function() {
        const modal = document.getElementById('discountModal');
        if (modal) {
            modal.style.display = 'none';
            this.isModalOpen = false;
            document.body.style.overflow = '';
        }
    },

    // Track WhatsApp button click
    trackWhatsAppClick: function() {
        // Track GA4 event
        if (typeof gtag !== 'undefined') {
            gtag('event', 'whatsapp_buy_click', {
                'discount_percentage': this.discountPercentage,
                'promo_code': this.promoCode,
                'interaction_type': 'whatsapp_purchase'
            });
        }
    },

    // Copy promo code to clipboard (kept for backward compatibility)
    copyPromoCode: function() {
        const code = this.promoCode;
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(code).then(() => {
                const copyBtn = document.getElementById('copyBtn');
                if (copyBtn) {
                    const originalText = copyBtn.textContent;
                    copyBtn.textContent = '✅ Copiado!';
                    setTimeout(() => copyBtn.textContent = originalText, 2000);
                }
                // Track GA4 event
                if (typeof gtag !== 'undefined') {
                    gtag('event', 'copy_code_success', {
                        'discount_percentage': this.discountPercentage,
                        'promo_code': this.promoCode,
                        'interaction_type': 'copy'
                    });
                }
            }).catch(() => {
                this.fallbackCopy();
            });
        } else {
            this.fallbackCopy();
        }
    },

    // Fallback copy method
    fallbackCopy: function() {
        const input = document.createElement('input');
        input.value = this.promoCode;
        document.body.appendChild(input);
        input.select();
        document.execCommand('copy');
        document.body.removeChild(input);
    }
};

// Initialize discount feature when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.discountFeature.init();
});

// ===== END DISCOUNT FEATURE =====

// Scroll suave para seções
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

// Animação ao scroll (Fade In)
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

// Adiciona classe fade-in aos elementos que devem animar
document.addEventListener('DOMContentLoaded', () => {
    const elementsToAnimate = document.querySelectorAll(
        '.feature, .benefit, .gallery-item, .testimonial, .price-box'
    );

    elementsToAnimate.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
});

// Modal de imagens (simples)
const galleryItems = document.querySelectorAll('.gallery-item');
galleryItems.forEach(item => {
    item.addEventListener('click', function() {
        // Efeito de "pulse" ao clicar
        this.style.transform = 'scale(1.1)';
        setTimeout(() => {
            this.style.transform = '';
        }, 200);
    });
});

// Efeito de hover no botão WhatsApp
const whatsappButton = document.querySelector('.whatsapp-float');
if (whatsappButton) {
    setInterval(() => {
        whatsappButton.style.animation = 'pulse 1s';
        setTimeout(() => {
            whatsappButton.style.animation = '';
        }, 1000);
    }, 5000);
}

// Adiciona animação de pulse ao CSS dinamicamente
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.15);
        }
        100% {
            transform: scale(1);
        }
    }
`;
document.head.appendChild(style);

// Validação simples de formulário (caso adicione um formulário no futuro)
function validateForm(formElement) {
    const inputs = formElement.querySelectorAll('input[required], textarea[required]');
    let isValid = true;

    inputs.forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
            input.style.borderColor = 'red';
        } else {
            input.style.borderColor = '';
        }
    });

    return isValid;
}

// Adiciona contador de visualizações (simulado)
let viewCount = localStorage.getItem('pudimViews') || 0;
viewCount++;
localStorage.setItem('pudimViews', viewCount);
console.log(`Esta página foi visualizada ${viewCount} vez(es) neste navegador.`);

// Google Analytics GA4 - Ensure gtag is available
if (typeof gtag === 'undefined') {
    window.gtag = function() {
        console.warn('GA4 gtag not loaded. Please ensure Google Analytics script is added to HTML head.');
    };
} else {
    console.log('✅ GA4 (gtag) loaded successfully');
}

// Easter egg: Console message
console.log('%c🍮 Pudim Merecido', 'font-size: 30px; color: #FFB800; font-weight: bold;');
console.log('%cVocê merece este pudim!', 'font-size: 16px; color: #FF6B00;');
console.log('%cDesenvolvido com ❤️ e muita vontade de comer pudim', 'font-size: 12px; color: #666;');

// Tracking de scroll para analytics (preparado para Google Analytics)
let scrollTracked = {
    25: false,
    50: false,
    75: false,
    100: false
};

window.addEventListener('scroll', () => {
    const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

    Object.keys(scrollTracked).forEach(percentage => {
        if (scrollPercentage >= percentage && !scrollTracked[percentage]) {
            scrollTracked[percentage] = true;
            console.log(`Usuário scrollou ${percentage}% da página`);
            // Aqui você pode adicionar: gtag('event', 'scroll', { percent: percentage });
        }
    });
});

// Adiciona efeito de parallax suave no hero
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero-image');
    if (hero) {
        const scrolled = window.pageYOffset;
        const parallax = scrolled * 0.3;
        hero.style.transform = `translateY(${parallax}px)`;
    }
});
