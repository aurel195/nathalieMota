document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("myModal");
    const modalOverlay = document.querySelector(".modal_overlay");
    const modalAnim = document.querySelector('.modal');
    modal.classList.add('fade-in-out');
    function openModal(button) { //Fonction pour ouvrir la modale
        if (button) {
            modal.style.display = "block";
            modalAnim.classList.add('fade-in-out');
            document.body.classList.add('no-scroll');
        } 
    }   
    function closeModal() { //Fonction pour fermer la modale
        modal.style.display = "none";
        modalAnim.classList.remove('fade-in-out');
        document.body.classList.remove('no-scroll');
    }
   // Tableau avec les élémts qui ouvent la modale
    const openModalButtons = [document.querySelector("#contact-menu-item a"), document.querySelector("#contact-btn")];
    openModalButtons.forEach(button => { //Parcourt chaque bouton
        if (button) {  // si 1 btn existe
            button.addEventListener("click", function() { // au clic
                openModal(button); // ouvre la modale
            });
        }
    });
    if (modalOverlay) { // Si clic en dehors de la modale 
        modalOverlay.addEventListener("click", closeModal);  // ferme la modale
    }
    
});
