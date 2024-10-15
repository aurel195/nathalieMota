

// Mon mini-Slide

const miniPhoto = document.getElementById('mini-photo');  // Sélection de mini-photo
const arrows = document.querySelectorAll('.arrow img'); // Sélection des flèches
// Obtenir les ID des posts précédent et suivant pour récupérer leurs images
const prevPostImgUrl = arrows[0].getAttribute('data-thumbnail-url'); // URL de l'image précédente
const nextPostImgUrl = arrows[1].getAttribute('data-thumbnail-url'); // URL de l'image suivante
// Initialiser l'image de fond 
if (miniPhoto) {
    miniPhoto.style.backgroundImage = '';
}
// Logique pour gérer le survol des flèches
arrows.forEach((arrow, index) => {
    arrow.addEventListener('mouseenter', function() {
        if (index === 0) { // Pour la flèche gauche
            miniPhoto.style.backgroundImage = `url(${prevPostImgUrl})`;
        } else if (index === 1) { // Pour la flèche droite
            miniPhoto.style.backgroundImage = `url(${nextPostImgUrl})`;
        }
    });
    arrow.addEventListener('mouseleave', function() {
        miniPhoto.style.backgroundImage = ''; // Réinitialise à vide lors du retrait du survol
    });
    arrow.addEventListener('click', function() {
        const targetUrl = this.getAttribute('data-target-url');
        window.location.href = targetUrl; // Redirection vers la photo précédente ou suivante
    });
});