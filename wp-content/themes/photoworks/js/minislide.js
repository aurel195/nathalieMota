

// Mon mini-Slide

const miniPhoto = document.getElementById('mini-photo');
const arrows = document.querySelectorAll('.arrow img');
let currentPhoto = document.querySelector('.photo-display img');
let currentImageUrl = currentPhoto ? currentPhoto.src : '';
if (miniPhoto) {
miniPhoto.style.backgroundImage = `url(${currentImageUrl})`;
}
arrows.forEach(arrow => {
    arrow.addEventListener('mouseenter', function() {
        const thumbnailUrl = this.getAttribute('data-thumbnail-url');
        miniPhoto.style.backgroundImage = `url(${thumbnailUrl})`;
    });

    arrow.addEventListener('mouseleave', function() {
        miniPhoto.style.backgroundImage = '';
    });
    arrow.addEventListener('click', function() {
        const targetUrl = this.getAttribute('data-target-url');
        window.location.href = targetUrl;
    });
});