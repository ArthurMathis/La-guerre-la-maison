const letters = document.querySelectorAll('article img');
const msgBox = document.getElementById('msgBox');
const msgText =  document.getElementById('msgtext');

function affiche(msg){
    msgBox.style.opacity = '1';
    msgText.innerHTML = msg;
}

function remove(){
    msgBox.style.opacity = "0";
    msgText.innerHTML = '';
}

function isOn(element) {
    element.style.opacity = '0';
}

function isOf(element) {
    element.style.opacity = '1';
}

function init() {
    for (let i = 0; i < letters.length; i++) {
        letters[i].addEventListener('mouseenter', (event) => { isOn(event.target); });
        letters[i].addEventListener('mouseleave', (event) => { isOf(event.target); });
    }
}

document.addEventListener('DOMContentLoaded', init);
