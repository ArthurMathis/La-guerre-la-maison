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

const a1 = new annecdote("assets/img/Russian prisoners in a gulag (1).jpg",
    "<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit doloremque, molestiae ducimus quod quos blanditiis magnam atque error reiciendis debitis? Magnam perspiciatis tempora fugit! Quaerat obcaecati delectus vel velit. Corporis!</p>" 
);
const a2 = new annecdote("assets/img/Russian prisoners in a gulag (1).jpg",
    "<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit doloremque, molestiae ducimus quod quos blanditiis magnam atque error reiciendis debitis? Magnam perspiciatis tempora fugit! Quaerat obcaecati delectus vel velit. Corporis!</p>" 
);
const a3 = new annecdote("assets/img/Russian prisoners in a gulag (1).jpg",
    "<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit doloremque, molestiae ducimus quod quos blanditiis magnam atque error reiciendis debitis? Magnam perspiciatis tempora fugit! Quaerat obcaecati delectus vel velit. Corporis!</p>" 
);
const a4 = new annecdote("assets/img/Russian prisoners in a gulag (1).jpg",
    "<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit doloremque, molestiae ducimus quod quos blanditiis magnam atque error reiciendis debitis? Magnam perspiciatis tempora fugit! Quaerat obcaecati delectus vel velit. Corporis!</p>" 
);
const a5 = new annecdote("assets/img/Russian prisoners in a gulag (1).jpg",
    "<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit doloremque, molestiae ducimus quod quos blanditiis magnam atque error reiciendis debitis? Magnam perspiciatis tempora fugit! Quaerat obcaecati delectus vel velit. Corporis!</p>" 
);
const a6 = new annecdote("assets/img/Russian prisoners in a gulag (1).jpg",
    "<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit doloremque, molestiae ducimus quod quos blanditiis magnam atque error reiciendis debitis? Magnam perspiciatis tempora fugit! Quaerat obcaecati delectus vel velit. Corporis!</p>" 
);
const a7 = new annecdote("assets/img/Russian prisoners in a gulag (1).jpg",
    "<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit doloremque, molestiae ducimus quod quos blanditiis magnam atque error reiciendis debitis? Magnam perspiciatis tempora fugit! Quaerat obcaecati delectus vel velit. Corporis!</p>" 
);
const a8 = new annecdote("assets/img/Russian prisoners in a gulag (1).jpg",
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