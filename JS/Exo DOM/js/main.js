// let intro = document.createElement("span");
// let division =document.createElement("div");

// let text = document.body.getElementsByTagName("p");
let title = document.getElementById("titre");
let parentTitle = document.getElementById("titre").parentNode;


function addIntro() {
    let intro = document.createElement("span");
    let introContent = document.createTextNode("Je suis une introduction.");
    intro.appendChild(introContent);
    let parentTitle = document.getElementById("titre").parentNode;
    parentTitle.insertBefore(intro, title);
}

document.body.onload = addIntro;


function createNewParag(p,m) {
    let text = document.body.getElementsByTagName("p");
    document.body.removeChild(text[p]);
    let textContent = document.createTextNode("Je suis un texte ajouté");
    let createParag = document.createElement("p");

    createParag.appendChild(textContent);
    document.body.replaceChild(createParag, text[m]);
}


createNewParag(3,2)


function addTxt (pseudo, text) {
    let newTxt = document.createElement("p");
    newTxt.textContent = `${pseudo} , ${text}` ;
    document.body.appendChild(newTxt);
}

addTxt("Bonjour", "le pain");


// document.body.insertBefore(division, text[0]);

// document.body.insertBefore(text[1], title);

// document.body.appendChild(division);