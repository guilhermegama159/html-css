document.addEventListener('DOMContentLoaded', function() {
    // Loader
    setTimeout(function() {
        document.querySelector('.loader').classList.add('fade-out');
        setTimeout(function() {
            document.querySelector('.loader').style.display = 'none';
        }, 500);
    }, 1500);

    // Cursor Personalizado
    const cursor = document.querySelector('.custom-cursor');
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    // Efeito hover no cursor
    const hoverElements = document.querySelectorAll('a, button, .menu-btn, .service-card, .gallery-item, .social-float a');
    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.classList.add('hovered');
        });
        el.addEventListener('mouseleave', () => {
            cursor.classList.remove('hovered');
        });
    });

    // Menu Mobile - Versão Corrigida
const menuBtn = document.querySelector('.menu-btn');
const sideNav = document.querySelector('.side-nav');
const closeNav = document.querySelector('.close-nav');

function toggleMenu() {
    menuBtn.classList.toggle('active');
    sideNav.classList.toggle('active');
    
    // Bloquear/liberar scroll da página
    document.body.style.overflow = sideNav.classList.contains('active') ? 'hidden' : '';
}

menuBtn.addEventListener('click', function(e) {
    e.stopPropagation(); // Impede a propagação do evento
    toggleMenu();
});

closeNav.addEventListener('click', function(e) {
    e.stopPropagation();
    toggleMenu();
});

// Fechar menu ao clicar fora
document.addEventListener('click', function(e) {
    if (sideNav.classList.contains('active') && !sideNav.contains(e.target) && e.target !== menuBtn) {
        toggleMenu();
    }
});

// Fechar menu ao clicar em um link
const navLinks = document.querySelectorAll('.side-nav a');
navLinks.forEach(link => {
    link.addEventListener('click', toggleMenu);
});

    // Botão Voltar ao Topo
    const backToTop = document.querySelector('.back-to-top');
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTop.classList.add('active');
        } else {
            backToTop.classList.remove('active');
        }
    });

    // Efeito de rolagem suave para links âncora
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Animação ao rolar a página
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.service-card, .gallery-item, .social-card, .video-wrapper, .location-info, .form-group');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };

    // Configuração inicial para elementos animados
    const animatedElements = document.querySelectorAll('.service-card, .gallery-item, .social-card, .video-wrapper, .location-info, .form-group');
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Executa uma vez ao carregar a página

   
    // Efeito de digitação alternativo (caso o CSS não funcione em alguns navegadores)
    const typewriterElement = document.querySelector('.typewriter');
    if (typewriterElement) {
        const text = typewriterElement.textContent;
        typewriterElement.textContent = '';
        
        let i = 0;
        function typeWriter() {
            if (i < text.length) {
                typewriterElement.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        }
        
        setTimeout(typeWriter, 1000);
    }

    // Efeito parallax para a seção hero
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
        window.addEventListener('scroll', function() {
            const scrollPosition = window.pageYOffset;
            heroSection.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
        });
    }
});