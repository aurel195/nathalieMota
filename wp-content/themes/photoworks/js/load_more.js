


jQuery(document).ready(function ($) {

    console.log("mon fichier 'load_more' démarre");

    $(document).on('click', '.js-load-more-photos', function () {
        
        const button = $(this);
        let currentPage = button.data('page'); // Récupère le numéro de la page actuelle
        const data = {
            action: button.data('action'),
            nonce: button.data('nonce'),
            page: currentPage,
        };
        // Effectue une requête fetch pour charger plus de photos
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
   
            $('.gallery').append(body.data); // Ajoute les nouvelles photos à la galerie
           
            button.data('page', currentPage + 1); // Incrémente le numéro de la page
            
    
            if (body.data && body.data.length > 0) { 
                button.show(); // Montre le bouton si des photos ont été ajoutées
            } else {
                button.remove(); // Supprime le bouton si aucune photo n'est trouvée
            }

            openLightbox(); // Ouvre la lightbox pour les nouvelles images
        })
        .catch(error => {
            console.error('Une erreur s\'est produite :', error);
        });
    });
});
