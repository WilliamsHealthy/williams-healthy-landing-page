document.addEventListener('DOMContentLoaded', () => {
    // --- CÓDIGO CORREGIDO PARA LA NAVEGACIÓN ---
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');

            // 1. VERIFICAR SI ES UN ENLACE INTERNO (para scroll suave)
            if (href.startsWith('#')) {
                // Si es un enlace interno, prevenimos la acción y hacemos scroll
                e.preventDefault();

                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - document.querySelector('.header').offsetHeight,
                        behavior: 'smooth'
                    });
                }
            }
            // 2. SI NO EMPIEZA CON '#', el navegador seguirá el enlace a la nueva página (ej: guias.html)
            // No hacemos nada aquí para que el enlace funcione normalmente.
        });
    });

    // --- CÓDIGO DEL MENÚ HAMBURGUESA (este ya estaba bien) ---
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburgerMenu && navMenu) {
        hamburgerMenu.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            hamburgerMenu.classList.toggle('active');
        });
    }

    // He movido el cierre del menú hamburguesa al hacer clic en un enlace a su propia sección.
    // Esto es para asegurar que solo se cierre cuando sea necesario.
    document.querySelectorAll('.nav-menu a').forEach(navLink => {
        navLink.addEventListener('click', () => {
            if (window.innerWidth <= 768 && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                hamburgerMenu.classList.remove('active');
            }
        });
    });
});
