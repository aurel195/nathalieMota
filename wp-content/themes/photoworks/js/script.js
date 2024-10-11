// Change la valeur de l'input "référence"

jQuery(document).ready(function($) {
    $('#contact-btn').click(function() {
        let currentReference = $(this).data('reference');
        $('.ref_photo').val(currentReference);
    });
});



// burger

document.addEventListener('DOMContentLoaded', function() {
    const buttonBurger = document.querySelector('.menuBurger');
    const menu = document.getElementById('menu-main-menu');
    if (buttonBurger) {
        buttonBurger.addEventListener('click', function() {
            console.log("Burger clicked"); // Vérifiez si ça s'affiche
            buttonBurger.classList.toggle('active');
            menu.classList.toggle('active');
            // Ajoutez ceci pour voir si la classe active est ajoutée
            console.log("Menu active status: ", menu.classList.contains('active'));
        });
    }
});


   