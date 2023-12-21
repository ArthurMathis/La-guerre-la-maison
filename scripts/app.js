const letters = document.querySelectorAll('.annecdote');
const msgBox = document.getElementById('msgBox');
const Box = document.getElementById('Box');
const annecdotes = document.querySelectorAll('.annotation');

const gest = new gestionnaireAnnecdotes();

function affiche(obj){
    // On ajoute à Box le contenu html de obj 
    Box.innerHTML = obj.createElement();

    /*typeWritter(Box, obj.getMsg());
    Box.innerHTML += obj.addImage();*/
    // On applique le display flex à msgBox
    msgBox.style.display = 'flex';
    // On fait apparaitre en transition Box
    setTimeout(function() {
        Box.style.opacity = '1';
    }, 1);
}

function remove(){
    // On supprime le display de Box
    msgBox.style.display = 'none';
    // On efface Box
    Box.style.opacity = "0";
    // On vide Box de son contenu
    Box.innerHTML = '';
}

function isOn(c, i){
    if(c == undefined || i > gest.length){
        console.log('Objet introubale !');
    } else if(i === 4){
        c.style.opacity = '0';
        showGalerie();
    } else {
        // On récupère et envoie les données dans la fonction d'affichage 
        affiche(gest.getAnnecdote(i < 4 ? i : i-1));
        // On efface la lettre survolée
        c.style.opacity = '0';
        // On efface les textes survolant msgBox
        removeFantome();
        // On recule les lettres afin de les flouter
        letters.forEach(obj => {
            if(obj !== c){
                obj.style.zIndex = '-10';
            }
        });
    }
}

function isOf(element) {
    // On efface MsgBox et Box
    remove();
    // On affiche les textes genant l'affichage de Box 
    afficheFantome();
    // On raffiche l'élément
    element.style.opacity = '1';
    // On fait remonter les lettres
    letters.forEach(c => {
        c.style.zIndex = 'auto';
    });
}

function init() {
    remove();
    setTimeout(() => {
        for (let i = 0; i < letters.length; i++) {
            letters[i].addEventListener('mouseenter', (event) => { isOn(event.target, i); });
            letters[i].addEventListener('mouseleave', (event) => { isOf(event.target); });
        }
    }, 4000); 
}

function afficheFantome(){
    // On fait apparaitre les textes
    annecdotes.forEach(c => {
        c.style.opacity = '1';
    });
}

function removeFantome(){
    // On fait disparaitre les textes
    annecdotes.forEach(c => {
        c.style.opacity = '0';
    });
}

window.addEventListener('DOMContentLoaded', init);