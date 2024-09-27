
document.addEventListener('DOMContentLoaded', function() {
    const fullscreenIcons = document.querySelectorAll('.fullscreen-icon');
    const lightbox = document.querySelector('.lightbox');
    const lightboxImage = document.querySelector('.image_lightbox');
    const closeButton = document.querySelector('.lightbox__close');
    const nextButton = document.querySelector('.lightbox__next');
    const prevButton = document.querySelector('.lightbox__prev');
   
    fullscreenIcons.forEach(icon => {
        icon.addEventListener('click', function(event) {
            event.preventDefault(); 
            const imageUrl = this.getAttribute('data-fullscreen-url');
            lightboxImage.src = imageUrl; 
            lightbox.style.display = 'flex'; 
        });
    });
    
    closeButton.addEventListener('click', function() {
        lightbox.style.display = 'none'; 
        lightboxImage.src = ''; 
    });
   
});