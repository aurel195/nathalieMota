
jQuery(document).ready(function ($) {

    console.log("mon fichier filters.js démarre");

    let categoryValue = '';
    let formatValue = '';
    let sortValue = 'DESC'; 
    
    $('.dropdown-header').on('click', function() {
        $(this).siblings('.dropdown-content').toggle(); 
    });
    
    $('.dropdown-content').on('mouseleave', function() {
        $(this).hide(); 
    });

    $(document).on('click', '.filter-category .dropdown-item', function() {
        const selectedValue = $(this).data('value');
        categoryValue = selectedValue;
        $(this).addClass('selected');

        if (selectedValue === '') {
            categoryValue = '';
            $('.filter-category .dropdown-header').text("CATÉGORIES");
        } else {
            $('.filter-category .dropdown-header').text($(this).text());
        }
        updateFilters(); 
    });
    

    $(document).on('click', '.filter-format .dropdown-item', function() {
        const selectedValue = $(this).data('value');
        formatValue = selectedValue;
       
        $('.filter-format .dropdown-item').removeClass('selected');
        $(this).addClass('selected');

        if (selectedValue === '') {
            formatValue = '';
            $('.filter-format .dropdown-header').text("FORMATS");
        } else {
            $('.filter-format .dropdown-header').text($(this).text());
        }
        updateFilters(); 
    });

    
    $('.trier .dropdown-item').on('click', function() {
        const selectedValue = $(this).data('value');
        sortValue = selectedValue === 'recente' ? 'DESC' : 'ASC'; 
        $(this).addClass('selected'); 
        $('.trier .dropdown-header').text($(this).text()); 

        updateFilters(); 
    });

    
    function updateFilters() {
    
    $('.homepage-images').hide();
    $('.results-container').hide();
    $('.js-load-more-photos').hide(); 
    

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
        
        if (data.success) {
            $('.results-container').html(data.data);
            $('.results-container').show(); 
        } else {
            $('.results-container').html('<p>Aucune photo ne correspond aux critères sélectionnés.</p>');
            $('.results-container').show(); 
        }
    })
    .catch(error => console.error('Erreur:', error));
}
});