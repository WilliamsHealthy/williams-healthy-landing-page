document.addEventListener('DOMContentLoaded', () => {
    // --- CÓDIGO CORREGIDO PARA LA NAVEGACIÓN ---
    // MODIFICACIÓN AQUÍ: Agrega el selector para el botón "Ver productos"
    document.querySelectorAll('nav ul li a, .hero-section .btn-primary').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');

            // 1. VERIFICAR SI ES UN ENLACE INTERNO (para scroll suave)
            // Se considera interno si empieza con '#' O si es 'index.html#' y tiene un hash
            if (href.startsWith('#') || (href.startsWith('index.html#') && href.length > 'index.html#'.length)) {
                // Si es un enlace interno, prevenimos la acción y hacemos scroll
                e.preventDefault();

                const targetId = href.split('#')[1]; // Extrae el ID después del '#'
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    // Calculamos el desplazamiento teniendo en cuenta la altura del header fijo
                    const headerOffset = document.querySelector('.header').offsetHeight;
                    const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
                    const offsetPosition = elementPosition - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });

                    // Cierra el menú hamburguesa si está activo y en móvil después del clic
                    if (window.innerWidth <= 768) {
                        const menuToggle = document.getElementById('menu-toggle');
                        if (menuToggle && menuToggle.checked) {
                            menuToggle.checked = false; // Desactiva el checkbox
                            document.querySelector('.nav-menu').classList.remove('active'); // Asume que 'active' es la clase para mostrar
                            document.querySelector('.hamburger-menu').classList.remove('active'); // Si usas 'active' en el icono
                        }
                    }
                }
            }
            // 2. SI NO EMPIEZA CON '#' O 'index.html#', el navegador seguirá el enlace a la nueva página (ej: guias.html)
            // No hacemos nada aquí para que el enlace funcione normalmente.
        });
    });

    // --- CÓDIGO DEL MENÚ HAMBURGUESA (este ya estaba bien, pero lo reviso para asegurar compatibilidad) ---
    const menuToggle = document.getElementById('menu-toggle'); // Usar menu-toggle para el checkbox
    const navMenu = document.querySelector('.nav-menu');
    const hamburgerMenu = document.querySelector('.hamburger-menu');

    if (menuToggle && navMenu && hamburgerMenu) { // Asegurarse de que el toggle exista
        menuToggle.addEventListener('change', () => { // Escuchar el 'change' del checkbox
            if (menuToggle.checked) {
                navMenu.classList.add('active');
                hamburgerMenu.classList.add('active');
            } else {
                navMenu.classList.remove('active');
                hamburgerMenu.classList.remove('active');
            }
        });
    }

    // Nota: El cierre del menú hamburguesa al hacer clic en un enlace ya está manejado dentro del primer listener de 'anchor'.
    // Esto es para asegurar que el menú se cierre solo cuando se navega a una sección interna.
});
