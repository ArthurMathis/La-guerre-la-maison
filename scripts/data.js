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

class gestionnaireAnnecdotes{
    constructor(src){
        this.annecdotes = [];
        this.fetchDataFromJson(src);
    }

    getAnnecdote(i){
        return this.annecdotes[i];
    }

    async fetchDataFromJson(jsonFilePath){
        try{
            const file = await fetch(jsonFilePath);
            const data = await file.json(); 
            if(Array.isArray(data)){
                this.annecdotes = data.map(
                    c => new annecdote(c.img, c.msg)
                );
                console.log('Questions téléchargées avec succès:', this.annecdotes);
            } else {
                console.error('Le fichier JSON ne contient pas un tableau valide.');
            }
        } catch(error){
            console.error('Une erreur esr survenue lors du chargement des annecodtes:', error);
        }
    }
}