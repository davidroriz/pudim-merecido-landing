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
