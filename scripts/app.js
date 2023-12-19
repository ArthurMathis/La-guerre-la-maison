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
    afficheImage('../assets/img/1.jpg');
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
