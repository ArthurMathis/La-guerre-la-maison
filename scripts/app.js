const letters = document.querySelectorAll('.annecdote');
const msgBox = document.getElementById('msgBox');
const Box = document.getElementById('Box');
const annecdotes = document.querySelectorAll('.annotation');

const p = ['J’ai perdu mon ex, elle est partie il y a quelque années. Elle me trouvait trop toxique. Alors moi je me sent seul et j’ai l’impression d’avoir perdu l’emprise que j’avais sur elle (c’était pourtant bien agréable). J’avais un peut de temps a perdre alors j’ai décidé l’obliger de rester avec moi. Je suis le plus fort alors elle doit se plier a ma volonté c’est comme ça que fonctionne la vie. Mes amis m’ont conseillé de la respecter mais j’en ai rien a foutre de ce qu’ils pensent !', 'L’objectif de Vladimir Poutine est d’intervenir en reconstruisant l’ancien espace soviétique.  L’Ukraine et la plus grande partie ce territoire ce qui explique que le conflit se soit déclenché a cause de celui-ci. Sont projet et donc la reconstitution de la zone d’influence de l’ancien espace soviétique et comme les pays satellites ont été rattachés a l’autan Poutine en a eu marre et souhaite que cela s’arrête. '];
const img = 'assets/img/1.jpg';

function addParagrahe(msg){
    return '<p>' + msg + '</p>';
}

function addImage(img){
    return "<img src=\"" + img + "\">";
}

function addTexte(p){
    let res = '<div>';
    p.forEach(c => {
        res += addParagrahe(c);
    });
    res += '</div>'
    return res;
}

function affiche(msg, img){
    const c = addTexte(msg) + addImage(img);
    console.log(c);
    Box.innerHTML = c;
    msgBox.style.display = 'flex';
    setTimeout(function() {
        Box.style.opacity = '1';
    }, 1);
}

function remove(){
    msgBox.style.display = 'none';
    Box.style.opacity = "0";
    Box.innerHTML = '';
}

function isOn(element) {
    affiche(p, img);
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
    remove();
    setTimeout(() => {
        for (let i = 0; i < letters.length; i++) {
            letters[i].addEventListener('mouseenter', (event) => { isOn(event.target); });
            letters[i].addEventListener('mouseleave', (event) => { isOf(event.target); });
        }
    }, 5800); 
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