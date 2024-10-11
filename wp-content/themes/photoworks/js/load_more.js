


jQuery(document).ready(function ($) {

    console.log("mon fichier 'load_more' démarre");

    $(document).on('click', '.js-load-more-photos', function () {
        
        const button = $(this);
        let currentPage = button.data('page');
        const data = {
            action: button.data('action'),
            nonce: button.data('nonce'),
            page: currentPage,
        };
       
        fetch(loadMoreData.ajaxurl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams(data),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error("La requête a échoué");
            }
            return response.json();
        })
        .then(body => {
            if (!body.success) {
                alert(body.data);
                button.hide();
                return;
            } 
   
            $('.gallery').append(body.data); 
           
            button.data('page', currentPage + 1); 
            
    
            if (body.data && body.data.length > 0) { 
                button.show();
            } else {
                button.remove(); 
            }

            openLightbox();
        })
        .catch(error => {
            console.error('Une erreur s\'est produite :', error);
        });
    });
});
