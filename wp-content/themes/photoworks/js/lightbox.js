<<<<<<< HEAD

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
=======
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
>>>>>>> recuperer_commits
        });
    });
    
    closeButton.addEventListener('click', function() {
        lightbox.style.display = 'none'; 
<<<<<<< HEAD
        lightboxImage.src = ''; 
    });
   
=======
        document.body.classList.remove('no-scroll');
        lightboxImage.src = ''; 
    });
 
>>>>>>> recuperer_commits
});