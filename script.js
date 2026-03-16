document.addEventListener('DOMContentLoaded', () => {
    // === SCROLL REVEAL ANIMATIONS ===
    // Seleccionar todos los elementos a animar
    const elementsToReveal = document.querySelectorAll('.fade-up, .fade-left, .fade-right');

    const revealOptions = {
        threshold: 0.15, // Porcentaje del elemento visible antes de disparar (15%)
        rootMargin: "0px 0px -50px 0px" // Dispara un poco antes de que la parte inferior de la ventana lo toque
    };

    const revealOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Dejar de observar una vez animado para mejor rendimiento
            }
        });
    }, revealOptions);

    elementsToReveal.forEach(el => {
        revealOnScroll.observe(el);
    });

    // === HEADER SCROLL EFECT ===
    const header = document.querySelector('.main-header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 10px 30px rgba(0,0,0,0.08)';
            header.style.padding = '15px 0';
        } else {
            header.style.boxShadow = 'none';
            header.style.padding = '20px 0';
            header.style.borderBottom = '1px solid rgba(0,0,0,0.05)';
        }
    });
});
