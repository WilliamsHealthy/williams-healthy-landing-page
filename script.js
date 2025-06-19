document.addEventListener('DOMContentLoaded', () => {
    // Smooth Scroll para el menú de navegación
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - document.querySelector('.header').offsetHeight, // Ajusta por la altura del header fijo
                    behavior: 'smooth'
                });
            }

            // Cerrar el menú hamburguesa si está abierto
            if (window.innerWidth <= 768) {
                navMenu.classList.remove('active');
                hamburgerMenu.classList.remove('active');
            }
        });
    });

    // Menú Hamburguesa
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburgerMenu && navMenu) {
        hamburgerMenu.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            hamburgerMenu.classList.toggle('active'); // Opcional: para animar el ícono de hamburguesa
        });
    }
});