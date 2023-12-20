const resourcesToPreload = [
    { type: 'image', url: 'assets/img/1.avif'},
    { type: 'image', url: 'assets/img/1.jpg'}
];

let startTime = Date.now();

preloadResources().then(() => {
    let endTime = Date.now();
    let elapsedTime = endTime - startTime;
    let delay = Math.max(3000 - elapsedTime, 0);

    setTimeout(() => {
        window.location.href = 'main.html';
    }, delay);
});

document.addEventListener('DOMContentLoaded', () => {
    updateCounter();
    preloadResources()
        .then(() => {
            console.log('Toutes les ressources ont été chargées !');
            updateProgress(resourcesToPreload.length, resourcesToPreload.length);
        })
        .catch(error => {
            console.error('Erreur lors du chargement des ressources :', error);
        });
});

function preloadResources() {
    let promises = [];

    resourcesToPreload.forEach(resource => {
        let promise;

        switch (resource.type) {
            case 'style':
                let styleElement = document.createElement('link');
                styleElement.rel = 'stylesheet';
                styleElement.href = resource.url;
                document.head.appendChild(styleElement);
                promise = new Promise(resolve => {
                    styleElement.onload = resolve;
                });
                break;

            case 'script':
                let scriptElement = document.createElement('script');
                scriptElement.type = 'text/javascript';
                scriptElement.src = resource.url;
                document.head.appendChild(scriptElement);
                promise = new Promise(resolve => {
                    scriptElement.onload = resolve;
                });
                break;

            case 'image':
                promise = new Promise((resolve, reject) => {
                    let img = new Image();
                    img.src = resource.url;
                    img.onload = resolve;
                    img.onerror = reject;
                });
                break;

            default:
                console.error('Type de ressource non pris en charge :', resource.type);
                break;
        }

        promises.push(promise);
    });

    return Promise.all(promises);
}

let compteurElement = document.getElementById('compteur');
let currentValue = 0;

function updateCounter() {
    if (currentValue === 100) {
        return;
    }
    currentValue += Math.floor(Math.random() * 10) + 1;

    if (currentValue > 100) {
        currentValue = 100;
    }

    compteurElement.textContent = currentValue + "%";

    let delay = Math.floor(Math.random() * 100) + 115;
    setTimeout(updateCounter, delay);
}
