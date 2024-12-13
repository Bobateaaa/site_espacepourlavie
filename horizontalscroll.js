// S'assurer que le script s'exécute après le chargement complet du DOM.
document.addEventListener('DOMContentLoaded', () => {

        let conteneurScroll = document.querySelector('.conteneur-scroll');

        // Variables
        let estEnfonce = false;
        let debutX;
        let defilementGauche;

        // Events
        conteneurScroll.addEventListener('mousedown', onMouseDown);
        conteneurScroll.addEventListener('mouseleave', onMouseLeave);
        conteneurScroll.addEventListener('mouseup', onMouseUp);
        conteneurScroll.addEventListener('mousemove', onMouseMove);

  // Fonction appelée lorsque le bouton de la souris est enfoncé
  function onMouseDown(e) {
    console.log('mousedown');
    estEnfonce = true;
    conteneurScroll.classList.add('active');
    debutX = e.pageX - conteneurScroll.offsetLeft;
    defilementGauche = conteneurScroll.scrollLeft;
  }

  // Fonction appelée lorsque la souris quitte le conteneur
  function onMouseLeave() {
    console.log('mouseleave');
    estEnfonce = false;
    conteneurScroll.classList.remove('active');
  }

  // Fonction appelée lorsque le bouton de la souris est relâché
  function onMouseUp() {
    console.log('mouseup');
    estEnfonce = false;
    conteneurScroll.classList.remove('active');
  }

  // Fonction appelée lorsque la souris est déplacée
  function onMouseMove(e) {
    if (!estEnfonce) return;
    console.log('mousemove');
    e.preventDefault();
    const x = e.pageX - conteneurScroll.offsetLeft;
    const deplacement = (x - debutX) * 1; // Ajuster la vitesse de défilement
    conteneurScroll.scrollLeft = defilementGauche - deplacement;
  }
});