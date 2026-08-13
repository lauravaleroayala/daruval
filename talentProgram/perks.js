/* =====================================================
   PERKS — RUNNING CLUB MODAL
===================================================== */
 
(function () {
 
    const openTriggers = document.querySelectorAll(".perk-modal-open");
 
    function getModal(trigger) {
 
        const modalId = trigger.getAttribute("data-modal");
 
        return modalId ? document.getElementById(modalId) : null;
 
    }
 
    function openModal(modal) {
 
        if (!modal) return;
 
        modal.classList.add("is-open");
        modal.setAttribute("aria-hidden", "false");
 
        document.body.style.overflow = "hidden";
 
    }
 
    function closeModal(modal) {
 
        if (!modal) return;
 
        modal.classList.remove("is-open");
        modal.setAttribute("aria-hidden", "true");
 
        document.body.style.overflow = "";
 
    }
 
    openTriggers.forEach((trigger) => {
 
        trigger.addEventListener("click", () => {
 
            openModal(getModal(trigger));
 
        });
 
    });
 
    document.querySelectorAll(".perk-modal").forEach((modal) => {
 
        const closeButton = modal.querySelector(".perk-modal-close");
        const backdrop = modal.querySelector(".perk-modal-backdrop");
 
        closeButton?.addEventListener("click", () => closeModal(modal));
        backdrop?.addEventListener("click", () => closeModal(modal));
 
    });
 
    document.addEventListener("keydown", (event) => {
 
        if (event.key !== "Escape") return;
 
        document.querySelectorAll(".perk-modal.is-open").forEach((modal) => {
 
            closeModal(modal);
 
        });
 
    });
 
})();