document.addEventListener('DOMContentLoaded', function() {
    const fullscreenIcons = document.querySelectorAll('.fullscreen-icon');
    const lightbox = document.querySelector('.lightbox');
    const lightboxImage = document.querySelector('.lightbox__image');
    const closeButton = document.querySelector('.lightbox__close');
    const nextArrow = document.querySelector('.lightbox__next');
    const prevArrow = document.querySelector('.lightbox__prev');
    const imageUrls = Array.from(fullscreenIcons).map(icon => icon.getAttribute('data-fullscreen-url'));
    let currentIndex = 0;
    
   
    fullscreenIcons.forEach((icon, index) => {
        icon.addEventListener('click', function(event) {
            event.preventDefault();
            currentIndex = index; 
            lightboxImage.src = imageUrls[currentIndex]; 
            lightbox.style.display = 'block'; 
            document.body.classList.add('no-scroll'); 
        });
    });
    
    closeButton.addEventListener('click', function() {
        lightbox.style.display = 'none'; 
        document.body.classList.remove('no-scroll');
        lightboxImage.src = ''; 
    });
 
});