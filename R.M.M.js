/**
 * SISTEMA DE CONTROL PATRIÓTICO
 * AUTOR: JERY ISMAEL CABA N
 */

document.addEventListener('DOMContentLoaded', () => {

    
    const observerOptions = {
        threshold: 0.15,
        rootMargin: "0px"
    };

    const revealOnScroll = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
               
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, observerOptions);

    
    const elementsToAnimate = document.querySelectorAll('.gallery-item, .bento-card, .stat-item, .bio-text');

    elementsToAnimate.forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(50px)";
        el.style.transition = "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)";
        revealOnScroll.observe(el);
    });

    
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.padding = "10px 0";
            navbar.style.background = "rgba(0, 0, 0, 0.95)";
        } else {
            navbar.style.padding = "20px 0";
            navbar.style.background = "rgba(0, 0, 0, 0.85)";
        }
    });

  
    const galleryImgs = document.querySelectorAll('.img-frame img');
    galleryImgs.forEach(img => {
        img.addEventListener('load', () => {
            img.parentElement.style.backgroundColor = "transparent";
        });
    });

    console.log("%c********************************************", "color: #CE1126; font-weight: bold;");
    console.log("%c* PROYECTO: MONUMENTO DIGITAL MATÍAS MELLA *", "color: #002D62; font-weight: bold;");
    console.log("%c* DESARROLLADOR: JERY ISMAEL CABA N      *", "color: #D4AF37; font-weight: bold;");
    console.log("%c********************************************", "color: #CE1126; font-weight: bold;");

  
    const heroDesc = document.querySelector('.hero-desc');
    if(heroDesc) {
        const text = heroDesc.innerText;
        heroDesc.innerText = '';
        let i = 0;
        function typeWriter() {
            if (i < text.length) {
                heroDesc.innerHTML += text.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        }
        typeWriter();
    }

   
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if(target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

});