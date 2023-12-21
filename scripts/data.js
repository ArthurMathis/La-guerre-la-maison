function writte(obj, c){
    setTimeout(() => {
        obj.innerHTML += c;
    }, 500); 
}

function typeWritter(obj, msg) {
    for (let i = 0; i < msg.length; i++) {
        let char = msg[i];
        // Gestion des balises HTML
        if (char === '<') {
            // Recherche de la fermeture de la balise
            let closingIndex = msg.indexOf('>', i);
            if (closingIndex !== -1) {
                let tag = msg.substring(i, closingIndex + 1);
                writte(obj, tag);
                // Met à jour l'index pour passer la balise entière
                i = closingIndex; 
            }
        } else {
            writte(obj, char);
        }
    }
}

function addBalise(obj, balise){
    
}

function wriiteTexts(obj, msg){
    
}

function typeWritter(obj, msg){
    obj.innerHTML += '<div>';

    for(let i=0; i < msg.lenght; i++){
        let c = msg[i];
        if(c === '<'){
            let j = i;
            let balise = c;
            while(j < msg.length && msg[j] !== '>'){ j++; }
            if(j <= msg.lenght){
                console.log(`Balise non fermée dans l'élément : ${msg}`);
            } else {
                addBalise(obj, balise);
                i = j;
            }
        } else {
            console.log(`Balise manquante dans l'élément : ${msg}`);
        }
    }

    obj.innerHTML += '</div>';
}

class annecdote{
    constructor(img, msg){
        this.img = img;
        this.msg = msg;
    }

    getImg(){
        return this.img;
    }

    getMsg(){
        return this.msg;
    }

    addText(){
        return '<div>' + this.msg + '</div>';
    }

    addImage(){
        return "<img src=\"" + this.img + "\">";
    }

    createElement(){
        return this.addText() + this.addImage();
    }
}

const a1 = new annecdote(
    "assets/img/Russian prisoners in a gulag (1).jpg",
    "<h2>Séduire pour mieux conquérir</h2><p>Vendez du rêve pour séduire votre douce ou votre doux partenaire, pour ensuite instaurer un climat de contrôle, semblable à une dictature.</p><h3>À la maison</h3><p>Charmer dès le départ : Commencez par une performance d'acteur oscarisée. Promettez monts et merveilles : écoute, compréhension, changement. Faites-en trop pour que l'autre soit accro, croyant avoir trouvé l'âme sœur parfaite, sans défauts apparents. Ah, l'art de la manipulation !</p><p>Le cocon douillet : Une fois que vous avez leur confiance (et leur naïveté), installez-vous confortablement dans le fauteuil de l'autorité. Oui, ce fauteuil qui était censé être à deux. Faites-leur sentir qu'ils ont besoin de vous, tout en vous assurant qu'ils dépendent émotionnellement de vous. Subtil, n'est-ce pas ?</p><p>Cap sur l'île unilatérale : À ce stade, qui a besoin d'opinions ? Certainement pas vous ! Prenez les rênes et décidez de tout. C'est votre monde, ils ne font que vivre dedans. Laissez-les dans l'illusion qu'ils ont un choix tout en le guidant soigneusement vers votre vision du parfait petit monde.</p><p>Qui a besoin de besoins? : Maintenant que vous êtes le maître des horloges, commencez à jeter leurs besoins et désirs aux orties. Après tout, qui se soucie des souhaits quand on est au sommet de la montagne ? Plus ils se sentent petits, mieux c'est pour votre ego, n'est-ce pas ?</p><p>La dictature de l'amour : Ah, le summum ! Prenez cette belle oreille attentive que vous aviez au début et remplacez-la par un mégaphone de critiques et de contrôle. Manipulez, critiquez, dominez. Après tout, une relation, c'est comme une partie d'échecs, et vous êtes le roi, non ?</p><h3>Fait historique</h3> <p>Poutine se fait élire au suffrage majoritaire, à la tête de l’état fédéral de Russie.</p><p>Poutine au pouvoir modifie la politique du pays pour pouvoir rester à la tête de l’un des plus grands pays du monde. On en donc conclut que : « le pouvoir rend fou et que le pouvoir absolu rend fou absolument » : Pierre Conesa</p>"
);
const a2 = new annecdote(
    "assets/img/Russian prisoners in a gulag (1).jpg",
    "<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit doloremque, molestiae ducimus quod quos blanditiis magnam atque error reiciendis debitis? Magnam perspiciatis tempora fugit! Quaerat obcaecati delectus vel velit. Corporis!</p>" 
);
const a3 = new annecdote(
    "assets/img/Russian prisoners in a gulag (1).jpg",
    "<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit doloremque, molestiae ducimus quod quos blanditiis magnam atque error reiciendis debitis? Magnam perspiciatis tempora fugit! Quaerat obcaecati delectus vel velit. Corporis!</p>" 
);
const a4 = new annecdote(
    "assets/img/Russian prisoners in a gulag (1).jpg",
    "<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit doloremque, molestiae ducimus quod quos blanditiis magnam atque error reiciendis debitis? Magnam perspiciatis tempora fugit! Quaerat obcaecati delectus vel velit. Corporis!</p>" 
);
const a5 = new annecdote(
    "assets/img/Russian prisoners in a gulag (1).jpg",
    "<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit doloremque, molestiae ducimus quod quos blanditiis magnam atque error reiciendis debitis? Magnam perspiciatis tempora fugit! Quaerat obcaecati delectus vel velit. Corporis!</p>" 
);
const a6 = new annecdote(
    "assets/img/Russian prisoners in a gulag (1).jpg",
    "<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit doloremque, molestiae ducimus quod quos blanditiis magnam atque error reiciendis debitis? Magnam perspiciatis tempora fugit! Quaerat obcaecati delectus vel velit. Corporis!</p>" 
);
const a7 = new annecdote(
    "assets/img/Russian prisoners in a gulag (1).jpg",
    "<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit doloremque, molestiae ducimus quod quos blanditiis magnam atque error reiciendis debitis? Magnam perspiciatis tempora fugit! Quaerat obcaecati delectus vel velit. Corporis!</p>" 
);
const a8 = new annecdote(
    "assets/img/Russian prisoners in a gulag (1).jpg",
    "<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit doloremque, molestiae ducimus quod quos blanditiis magnam atque error reiciendis debitis? Magnam perspiciatis tempora fugit! Quaerat obcaecati delectus vel velit. Corporis!</p>" 
);

class gestionnaireAnnecdotes{
    constructor(){
        this.annecdotes = [a1,a2,a3,a4,a5,a6,a7,a8];
    }

    getAnnecdote(i){
        return this.annecdotes[i];
    }

    getGestionnaire(){
        return this;
    }
}