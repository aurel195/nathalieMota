// Déclaration des variables en dehors des fonctions
const lightbox = document.querySelector('.lightbox');
const lightboxImage = lightbox.querySelector('.lightbox__image'); // Déplacer ici pour s'assurer qu'elle est accessible
let currentIndex = 0; 
const images = []; 
const references = []; 
const categories = []; 
// Fonction pour mettre à jour les infos de la lightbox
function updateLightboxInfo(index) {
    const referenceElement = lightbox.querySelector('.ref');
    const categoryElement = lightbox.querySelector('.cat');
    if (referenceElement && categoryElement) {
        referenceElement.textContent = references[index];
        categoryElement.textContent = categories[index];
    }
}
// Fonction pour ouvrir la lightbox
function openLightbox() {
    // Réinitialiser les tableaux
    images.length = 0; 
    references.length = 0; 
    categories.length = 0; 
    document.querySelectorAll('.fullscreen-icon').forEach((icon) => {
        images.push(icon.getAttribute('data-fullscreen-url'));
        references.push(icon.getAttribute('data-reference'));
        categories.push(icon.getAttribute('data-category'));
        icon.addEventListener('click', function(event) {
            event.preventDefault();
            currentIndex = [...document.querySelectorAll('.fullscreen-icon')].indexOf(icon);
            lightboxImage.src = icon.getAttribute('data-fullscreen-url');
            updateLightboxInfo(currentIndex); 
            lightbox.style.display = 'flex'; 
            document.body.classList.add('no-scroll');
        });
    });
    console.log('Lightbox images loaded:', images);
}
// Initialisation après le chargement DOM
document.addEventListener('DOMContentLoaded', function() {
    console.log('Mon fichier fullscreen démarre...');
    const closeButton = lightbox.querySelector('.lightbox__close');
    const nextButton = lightbox.querySelector('.lightbox__next');
    const prevButton = lightbox.querySelector('.lightbox__prev');
    closeButton.addEventListener('click', function() {
        lightbox.style.display = 'none'; 
        lightboxImage.src = '';  // Utilisation directe de lightboxImage
        document.body.classList.remove('no-scroll'); 
    });
    nextButton.addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % images.length;
        lightboxImage.src = images[currentIndex];  // Utilisation directe de lightboxImage
        updateLightboxInfo(currentIndex); 
    });
    prevButton.addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        lightboxImage.src = images[currentIndex];  // Utilisation directe de lightboxImage
        updateLightboxInfo(currentIndex);
    });
    // Appeler la fonction pour initialiser la lightbox
    openLightbox(); // Attacher tous les événements sur les icônes actuellement visibles
});