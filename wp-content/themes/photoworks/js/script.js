//  J'ouvre la modale et je ferme la modale

console.log("mon fichier js démarre");



document.addEventListener("DOMContentLoaded", function() {
    const openModalButton = document.querySelector("#contact-menu-item a");
    const modal = document.getElementById("myModal");
    const modalOverlay = document.querySelector(".modal_overlay");

    function openModal() {
        modal.style.display = "block";
    }    
    function closeModal() {
        modal.style.display = "none";
    }
    
    openModalButton.addEventListener("click",openModal);
    modalOverlay.addEventListener("click",closeModal);
    });

