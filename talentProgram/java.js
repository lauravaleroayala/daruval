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
 
                    entry.target.classList.add("revealed");
 
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
 
 
/* NOTA: la lógica del modal de Perks (Running Club) vive en perks.js,
   para no duplicarla ni pisarla desde este archivo. */
 