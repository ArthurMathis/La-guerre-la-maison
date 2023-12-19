const letters = document.querySelectorAll('.annecdote');
const msgBox = document.getElementById('msgBox');
const Box = document.getElementById('Box');
const msgText =  document.getElementById('msgtext');
const annecdotes = document.querySelectorAll('.annotation');

function addImage(img){
    return "<img src=\"" + img + "\">";
}

function affiche(msg){
    msgBox.style.display = 'flex';
    setTimeout(function() {
        Box.style.opacity = '1';
    }, 1);
    msgText.innerHTML = msg;
}



function afficheImage(img){
    msgBox.style.display = 'flex';
    setTimeout(function() {
        Box.style.opacity = '1';
    }, 1);
    msgText.innerHTML = addImage(img);
}

function remove(){
    msgBox.style.display = 'none';
    Box.style.opacity = "0";
    msgText.innerHTML = '';
}

function isOn(element) {
    //afficheImage('../assets/img/1.jpg');
    affiche('J’ai perdu mon ex, elle est partie il y a quelque années. Elle me trouvait trop toxique. Alors moi je me sent seul et j’ai l’impression d’avoir perdu l’emprise que j’avais sur elle (c’était pourtant bien agréable). J’avais un peut de temps a perdre alors j’ai décidé l’obliger de rester avec moi. Je suis le plus fort alors elle doit se plier a ma volonté c’est comme ça que fonctionne la vie. Mes amis m’ont conseillé de la respecter mais j’en ai rien a foutre de ce qu’ils pensent ! L’objectif de Vladimir Poutine est d’intervenir en reconstruisant l’ancien espace soviétique.  L’Ukraine et la plus grande partie ce territoire ce qui explique que le conflit se soit déclenché a cause de celui-ci. Sont projet et donc la reconstitution de la zone d’influence de l’ancien espace soviétique et comme les pays satellites ont été rattachés a l’autan Poutine en a eu marre et souhaite que cela s’arrête.');
    element.style.opacity = '0';
    removeFantome();
    letters.forEach(c => {
        if(c !== element){
            c.style.zIndex = '-10';
        }
    });
}

function isOf(element) {
    remove();
    afficheFantome();
    element.style.opacity = '1';
    letters.forEach(c => {
        c.style.zIndex = 'auto';
    });
}

function init() {
    for (let i = 0; i < letters.length; i++) {
        letters[i].addEventListener('mouseenter', (event) => { isOn(event.target); });
        letters[i].addEventListener('mouseleave', (event) => { isOf(event.target); });
    }
}

function afficheFantome(){
    annecdotes[0].style.opacity = '1';
    annecdotes[4].style.opacity = '1';
}

function removeFantome(){
    annecdotes[0].style.opacity = '0';
    annecdotes[4].style.opacity = '0';
}

document.addEventListener('DOMContentLoaded', init);
