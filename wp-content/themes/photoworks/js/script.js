
// Change la valeur de l'input "référence"

    jQuery(document).ready(function($) {
        $('#contact-btn').click(function() {
            let currentReference = $(this).data('reference');
            $('.ref_photo').val(currentReference);
        });
    });


