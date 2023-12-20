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
  
window.addEventListener('load', apparitionProgressiveImages);