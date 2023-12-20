const resourcesToPreload = [
    { type: 'image', url: 'assets/img/1.avif'},
    { type: 'image', url: 'assets/img/1.jpg'}
];

let startTime = Date.now();

preloadResources().then(() => {
    let endTime = Date.now();
    let elapsedTime = endTime - startTime;
    let delay = Math.max(2000 - elapsedTime, 0);

    setTimeout(() => {
        window.location.href = 'main.html';
    }, delay);
});

document.addEventListener('DOMContentLoaded', () => {
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
    let totalResources = resourcesToPreload.length;
    let loadedResources = 0;

    resourcesToPreload.forEach(resource => {
        let promise;

        switch (resource.type) {
            case 'style':
                let styleElement = document.createElement('link');
                styleElement.rel = 'stylesheet';
                styleElement.href = resource.url;
                document.head.appendChild(styleElement);
                promise = new Promise(resolve => {
                    styleElement.onload = () => {
                        loadedResources++;
                        updateProgress(loadedResources, totalResources);
                        resolve();
                    };
                });
                break;

            case 'script':
                let scriptElement = document.createElement('script');
                scriptElement.type = 'text/javascript';
                scriptElement.src = resource.url;
                document.head.appendChild(scriptElement);
                promise = new Promise(resolve => {
                    scriptElement.onload = () => {
                        loadedResources++;
                        updateProgress(loadedResources, totalResources);
                        resolve();
                    };
                });
                break;

            case 'image':
                promise = new Promise((resolve, reject) => {
                    let img = new Image();
                    img.src = resource.url;
                    img.onload = () => {
                        loadedResources++;
                        updateProgress(loadedResources, totalResources);
                        resolve();
                    };
                    img.onerror = () => {
                        loadedResources++;
                        updateProgress(loadedResources, totalResources);
                        reject();
                    };
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

function updateProgress(loaded, total) {
    let percentage = Math.floor((loaded / total) * 100);
    let compteurElement = document.getElementById('compteur');
    if (compteurElement) {
        compteurElement.textContent = `${percentage}%`;
    } else {
        console.error('Balise compteur non trouvée.');
    }
}