function generateRandomNumber() {
    return Math.floor(Math.random() * 201); 
}

function apparitionProgressiveImages() {
    const images = document.querySelectorAll('img'); 
    setTimeout(() => {
        images.forEach((c, index) => {
            setTimeout(() => {
                c.style.opacity = '1';
            }, (index + 1) * 100 + generateRandomNumber()); 
        });
        apparitionProgressiveAnnecdotes();
    }, 1000); 
}

function apparitionProgressiveAnnecdotes() {
    const annotation = document.querySelectorAll('.annotation'); 
    setTimeout(() => {
        annotation.forEach((c, index) => {
            setTimeout(() => {
                c.style.opacity = '1';
            }, (index + 1) * 100 + generateRandomNumber()); 
        });
    }, 1000); 
}

function showGalerie(){
    document.getElementById('galerie').style.top = '0'; 
    setTimeout(() => {
        document.getElementById('galerie').style.backdropFilter = 'blur(10px)';
        let c = document.getElementById('menu-icon');
        c.style.display = 'block'
        c.addEventListener('click', () => { 
            hideGalerie(); 
        });
    }, 1000); 
}

function hideGalerie(){
    document.getElementById('galerie').style.top = '100vh'; 
    document.getElementById('galerie').style.backdropFilter = 'none';
    document.getElementById('menu-icon').style.display = 'none';
}

const images = document.querySelectorAll('#galerie img');

// Options pour l'IntersectionObserver
const options = {
    root: null, // La racine à partir de laquelle observer (la fenêtre par défaut)
    rootMargin: '0px', // Marge autour de la racine
    threshold: 0.2 // Pourcentage de l'élément visible pour déclencher l'intersection
};

// Créer une instance de l'IntersectionObserver
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        // Si l'élément est partiellement ou totalement visible
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1; // Mettre l'opacité à 1
            console.log(`L'élément : ${entry} est visible.`)
        } else {
            entry.target.style.opacity = 0; // Mettre l'opacité à 0
        }
    });
}, options);

function init(){
    images.forEach(image => {
        observer.observe(image);
        console.log(image);
    });
    apparitionProgressiveImages();
}

window.addEventListener('load', init);