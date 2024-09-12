//  J'ouvre la modale et je ferme la modale

console.log("mon fichier js démarre");



document.addEventListener("DOMContentLoaded", function() {
    const openModalButton = document.querySelector("#contact-menu-item a");
    const modal = document.getElementById("myModal");
    const modalOverlay = document.querySelector(".modal_overlay");
    let modalAnim = document.querySelector('.modal');
    modal.classList.add('fade-in-out');

    

    function openModal() {
        modal.style.display = "block";
        modalAnim.classList.add('fade-in-out');
    }    
    function closeModal() {
        modal.style.display = "none";
        modalAnim.classList.remove('fade-in-out');
    }
    
    openModalButton.addEventListener("click",openModal);
    modalOverlay.addEventListener("click",closeModal);
    });

