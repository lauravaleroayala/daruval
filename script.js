/* =====================================================
   NAVBAR HIDE / SHOW
===================================================== */

const navbar = document.querySelector(".navbar");

let previousScroll = window.scrollY;

window.addEventListener("scroll", () => {

    const currentScroll = window.scrollY;

    if (currentScroll > previousScroll && currentScroll > 150) {

        navbar.style.transform =
            "translateY(-110%)";

    } else {

        navbar.style.transform =
            "translateY(0)";

    }

    previousScroll = currentScroll;

});


/* =====================================================
   MOBILE MENU
===================================================== */

const menuToggle =
    document.querySelector(".menu-toggle");

const mobileNav =
    document.querySelector(".navbar");


if (menuToggle && mobileNav) {

    menuToggle.addEventListener("click", () => {

        const isOpen =
            mobileNav.classList.toggle("nav-open");

        menuToggle.setAttribute(
            "aria-expanded",
            isOpen
        );

        menuToggle.setAttribute(
            "aria-label",
            isOpen
                ? "Cerrar menú"
                : "Abrir menú"
        );

        menuToggle.textContent =
            isOpen ? "✕" : "☰";

    });


    mobileNav
        .querySelectorAll("nav a")
        .forEach(link => {

            link.addEventListener("click", () => {

                mobileNav.classList.remove(
                    "nav-open"
                );

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

                menuToggle.setAttribute(
                    "aria-label",
                    "Abrir menú"
                );

                menuToggle.textContent = "☰";

            });

        });

}


/* =====================================================
   REVEAL ANIMATION
===================================================== */

const revealElements =
    document.querySelectorAll(
        ".journey-step, .day, .gallery-item, .reality-row, .profile-grid div"
    );


const revealObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "revealed"
                    );

                }

            });

        },

        {
            threshold: 0.15
        }

    );


revealElements.forEach((element) => {

    element.classList.add("reveal");

    revealObserver.observe(element);

});


/* =====================================================
   FORM
===================================================== */

const form =
    document.getElementById("talent-form");


const formMessage =
    document.getElementById("form-message");


if (form) {

    form.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();

            formMessage.textContent =
                "Gracias. Hemos recibido tu candidatura.";

            form.reset();

        }
    );

}


/* =====================================================
   PERKS
===================================================== */

const modal =
    document.getElementById("running-modal");

const openButton =
    document.querySelector(".open-modal");

const closeButton =
    document.querySelector(".modal-close");

const backdrop =
    document.querySelector(".modal-backdrop");


function openModal() {

    modal.classList.add("open");

    modal.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.style.overflow =
        "hidden";
}


function closeModal() {

    modal.classList.remove("open");

    modal.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.style.overflow =
        "";
}


openButton?.addEventListener(
    "click",
    openModal
);


closeButton?.addEventListener(
    "click",
    closeModal
);


backdrop?.addEventListener(
    "click",
    closeModal
);


document.addEventListener(
    "keydown",
    e => {

        if (
            e.key === "Escape" &&
            modal?.classList.contains("open")
        ) {

            closeModal();

        }

    }
);