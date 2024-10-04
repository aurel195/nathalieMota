<<<<<<< HEAD

// Change la valeur de l'input "référence"

    jQuery(document).ready(function($) {
        $('#contact-btn').click(function() {
            let currentReference = $(this).data('reference');
            $('.ref_photo').val(currentReference);
        });
    });


=======
// Change la valeur de l'input "référence"

jQuery(document).ready(function($) {
    $('#contact-btn').click(function() {
        let currentReference = $(this).data('reference');
        $('.ref_photo').val(currentReference);
    });
});



// burger

function burger_menu(){
    const buttonBurger = document.querySelector('.button_burger');
    const closeBurger = document.querySelector('.close_burger');
    const menuBurger = document.querySelector('.main-navigation');

    button.addEventListener('click',function(){
        menuBurger.classList.toggle('active');
        buttonBurger.classList.toggle('inactive');
        closeBurger.classList.toggle('active');
    });

    close.addEventListener('click', function(){
        menuBurger.classList.toggle('active');
        buttonBurger.classList.toggle('inactive');
        closeBurger.classList.toggle('active');
    })
}
>>>>>>> recuperer_commits
