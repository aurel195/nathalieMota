<<<<<<< HEAD

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
=======
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
>>>>>>> recuperer_commits
