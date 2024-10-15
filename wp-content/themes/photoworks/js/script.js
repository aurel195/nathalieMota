// Change la valeur de l'input "référence"

jQuery(document).ready(function($) {
    $('#contact-btn').click(function() { // au clic
        let currentReference = $(this).data('reference'); // Récupère data-reference
        $('.ref_photo').val(currentReference); // Récupère tous .ref_photo et definit la valeur avec currentReference
    });
});



// burger

document.addEventListener('DOMContentLoaded', function() {
    const buttonBurger = document.querySelector('.menuBurger'); // Sélection du btn
    const menu = document.getElementById('menu-main-menu'); // Sélection du menu principal
    if (buttonBurger) { 
        buttonBurger.addEventListener('click', function() { 
            buttonBurger.classList.toggle('active'); 
            menu.classList.toggle('active');
        });
    }
});


   