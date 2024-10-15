// Déclaration des variables en dehors des fonctions
const lightbox = document.querySelector('.lightbox'); //Sélection lightbox
const lightboxImage = lightbox.querySelector('.lightbox__image'); //sélection image lightbox
let currentIndex = 0; //Index avec l'image actuellement dans la lightbox
const images = []; 
const references = []; 
const categories = []; 
// Fonction pour mettre à jour les infos de la lightbox
function updateLightboxInfo(index) {
    const referenceElement = lightbox.querySelector('.ref'); //Récupère référence
    const categoryElement = lightbox.querySelector('.cat');// Récupère catégorie
    if (referenceElement && categoryElement) {
        referenceElement.textContent = references[index]; //Remplace par valeur du tableau reférence
        categoryElement.textContent = categories[index]; //Remplace par valeur du tableau catégorie
    }
}
// Fonction pour ouvrir la lightbox
function openLightbox() {
    // Réinitialisation des tableaux
    images.length = 0; 
    references.length = 0; 
    categories.length = 0; 
    const visibleIcons = document.querySelectorAll('.fullscreen-icon'); //Sélection des fullscreen-icon
    visibleIcons.forEach((icon) => {
        if (icon.offsetParent !== null) { // S'assure que l'élément est visible
            images.push(icon.getAttribute('data-fullscreen-url')); //Ajout de l'image au tableau
            references.push(icon.getAttribute('data-reference'));
            categories.push(icon.getAttribute('data-category'));
            icon.addEventListener('click', function(event) { // Au clic màj img + infos
                event.preventDefault();
                currentIndex = [...document.querySelectorAll('.fullscreen-icon')].indexOf(icon);
                lightboxImage.src = icon.getAttribute('data-fullscreen-url');
                updateLightboxInfo(currentIndex); 
                lightbox.style.display = 'flex'; 
                document.body.classList.add('no-scroll');
            });
        }
    });

}
// Initialisation après le chargement DOM
document.addEventListener('DOMContentLoaded', function() {
    console.log('Mon fichier fullscreen démarre...');
    const closeButton = lightbox.querySelector('.lightbox__close');
    const nextButton = lightbox.querySelector('.lightbox__next');
    const prevButton = lightbox.querySelector('.lightbox__prev');
    closeButton.addEventListener('click', function() { //Au clic
        lightbox.style.display = 'none'; // Lightbox masquée
        lightboxImage.src = ''; // Réinitialise la lightbox
        document.body.classList.remove('no-scroll'); 
    });
    nextButton.addEventListener('click', function() { // Au clic
        currentIndex = (currentIndex + 1) % images.length;// Image suivante (modulo pour faire la boucle)
        lightboxImage.src = images[currentIndex];  // màj la nvelle img
        updateLightboxInfo(currentIndex); //Màj ref et cat avec currentIndex
    });
    prevButton.addEventListener('click', function() { //Au clic
        currentIndex = (currentIndex - 1 + images.length) % images.length;// Image précédente
        lightboxImage.src = images[currentIndex];  //màj la nvelle img
        updateLightboxInfo(currentIndex); //Màj ref et cat avec currentIndex
    });
    // Appeler la fonction pour initialiser la lightbox
    openLightbox(); // Attacher tous les événements sur les icônes actuellement visibles
});