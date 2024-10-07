document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("myModal");
    const modalOverlay = document.querySelector(".modal_overlay");
    const modalAnim = document.querySelector('.modal');
    modal.classList.add('fade-in-out');
    function openModal(button) {
        if (button) {
            modal.style.display = "block";
            modalAnim.classList.add('fade-in-out');
            document.body.classList.add('no-scroll');
        } 
    }   
    function closeModal() {
        modal.style.display = "none";
        modalAnim.classList.remove('fade-in-out');
        document.body.classList.remove('no-scroll');
    }
   
    const openModalButtons = [document.querySelector("#contact-menu-item a"), document.querySelector("#contact-btn")];
    openModalButtons.forEach(button => {
        if (button) {
            button.addEventListener("click", function() {
                openModal(button);
            });
        }
    });
    if (modalOverlay) {
        modalOverlay.addEventListener("click", closeModal);
    }
    
});
