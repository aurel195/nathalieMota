
// Ouvre modal #contact-menu-item a

document.addEventListener("DOMContentLoaded", function() {
    const openModalButtonContactMenu = document.querySelector("#contact-menu-item a");
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
    
    openModalButtonContactMenu .addEventListener("click",openModal);
    modalOverlay.addEventListener("click",closeModal);
    });



// Ouvre modal #contact-btn

const openModalButtonContactBtn = document.querySelector("#contact-btn");
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


openModalButtonContactBtn.addEventListener("click",openModal);
modalOverlay.addEventListener("click",closeModal);
