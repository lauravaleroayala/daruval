document.addEventListener('DOMContentLoaded', () => {

    /* MOBILE MENU */

    const navbar = document.querySelector('.navbar');
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.navbar nav');

    if (navbar && menuToggle && nav) {

        const closeMenu = () => {
            navbar.classList.remove('nav-open');
            menuToggle.setAttribute('aria-expanded', 'false');
            menuToggle.textContent = '☰';
        };

        const toggleMenu = () => {
            const isOpen = navbar.classList.toggle('nav-open');
            menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
            menuToggle.textContent = isOpen ? '✕' : '☰';
        };

        menuToggle.addEventListener('click', toggleMenu);

        // Close the menu once a link inside it is used
        nav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', closeMenu);
        });

        // Keep things tidy if the viewport grows past the mobile breakpoint
        window.addEventListener('resize', () => {
            if (window.innerWidth > 900) closeMenu();
        });

    }


    /* FORMS */

    document.querySelectorAll('form').forEach(f => f.addEventListener('submit', e => {
        e.preventDefault();
        const m = f.querySelector('.form-message');
        if (m) m.textContent = 'Formulario preparado. Falta conectar el envío a tu email/CRM.';
    }));

});