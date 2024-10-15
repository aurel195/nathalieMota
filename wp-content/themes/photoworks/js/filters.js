
jQuery(document).ready(function ($) {

    console.log("mon fichier filters.js démarre");

    let categoryValue = '';
    let formatValue = '';
    let sortValue = 'DESC'; 
    
    // Événement pour afficher/cacher le contenu du dropdown au clic sur l'en-tête
    $('.dropdown-header').on('click', function() {
        $(this).siblings('.dropdown-content').toggle(); 
    });
    
    // Événement pour cacher le contenu du dropdown quand la souris quitte le dropdown
    $('.dropdown-content').on('mouseleave', function() {
        $(this).hide(); 
    });

    // Gestion de la sélection de la catégorie
    $(document).on('click', '.filter-category .dropdown-item', function() {
        const selectedValue = $(this).data('value'); // Obtient la valeur sélectionnée
        categoryValue = selectedValue; // Met à jour la variable categoryValue
        $(this).addClass('selected'); // Ajoute la classe 'selected' à l'élément cliqué
        // Met à jour le texte de l'en-tête en fonction de la sélection
        if (selectedValue === '') {
            categoryValue = '';
            $('.filter-category .dropdown-header').text("CATÉGORIES");
        } else {
            $('.filter-category .dropdown-header').text($(this).text());
        }
        updateFilters(); // Appel de la fonction pour mettre à jour les résultats
    });
    
    // Gestion de la sélection du format
    $(document).on('click', '.filter-format .dropdown-item', function() {
        const selectedValue = $(this).data('value');
        formatValue = selectedValue;
        $(this).addClass('selected');

        if (selectedValue === '') {
            formatValue = '';
            $('.filter-format .dropdown-header').text("FORMATS");
        } else {
            $('.filter-format .dropdown-header').text($(this).text());
        }
        updateFilters(); 
    });

    // Gestion de la sélection du tri
    $('.trier .dropdown-item').on('click', function() {
        const selectedValue = $(this).data('value');
        sortValue = selectedValue === 'recente' ? 'DESC' : 'ASC'; 
        $(this).addClass('selected'); 
        $('.trier .dropdown-header').text($(this).text()); 

        updateFilters(); 
    });

    
    function updateFilters() {
    // Cache les éléments de la page pendant le chargement des nouveaux résultats
    $('.homepage-images').hide();
    $('.results-container').hide();
    $('.js-load-more-photos').hide(); 
    
    // Effectue une requête fetch pour récupérer les nouveaux résultats filtrés
    fetch(filtersData.ajaxurl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Cache-Control': 'no-cache',
        },
        body: new URLSearchParams({
            'action': 'filters_photos',
            'nonce': filtersData.nonce,
            'categorie': categoryValue,
            'format': formatValue,
            'sort': sortValue,
        }),
    })
    .then(response => response.json())
    .then(data => {
        // Vérifie si la requête a réussi
        if (data.success) {
            $('.results-container').html(data.data);// Met à jour le contenu avec les nouveaux résultats
            $('.results-container').show(); // Affiche les résultats
            openLightbox(); // lightbox pour les nvelles images
        } else {
            $('.results-container').html('<p>Aucune photo ne correspond aux critères sélectionnés.</p>');
            $('.results-container').show(); 
        }
    })
    .catch(error => console.error('Erreur:', error));
}
});