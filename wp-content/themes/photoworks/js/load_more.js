
jQuery(document).ready(function ($) {
    console.log("mon fichier js démarre");
   
        $(document).on('click', '.js-load-more-photos', function (e) {
            e.preventDefault();
            const button = $(this);
            const ajaxUrl = button.data('ajaxurl');
            let currentPage = button.data('page');
            currentPage++;
            const data = {
                action: button.data('action'),
                nonce: button.data('nonce'),
                page: currentPage,
            };

            button.hide();
            fetch(ajaxUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Cache-Control': 'no-cache',
                },
                body: new URLSearchParams(data),
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error("Le réseau ne va pas bien");
                }
                return response.json();
            })
            .then(body => {
                if (!body.success) {
                    alert(body.data);
                    return;
                }
                $('.gallery').append(body.data);
                
                if (body.data && body.data.length > 0) {
                
                    button.data('page', data.page); 
                    button.show(); 
                } else {
                    button.remove(); 
                }
            })
            .catch(error => {
                console.error('Une erreur s\'est produite :', error);
            });
        });
 
});
