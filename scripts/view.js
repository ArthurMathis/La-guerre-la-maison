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
        document.getElementById('galerie').style.backdropFilter = 'blur(15px)';
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
  
window.addEventListener('load', apparitionProgressiveImages);