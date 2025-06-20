// // let intro = document.createElement("span");
// // let division =document.createElement("div");

// // let text = document.body.getElementsByTagName("p");
// let title = document.getElementById("titre");
// let parentTitle = document.getElementById("titre").parentNode;


// function addIntro() {
//     let intro = document.createElement("span");
//     let introContent = document.createTextNode("Je suis une introduction.");
//     intro.appendChild(introContent);
//     let parentTitle = document.getElementById("titre").parentNode;
//     parentTitle.insertBefore(intro, title);
// }

// document.body.onload = addIntro;


// function createNewParag(p, m) {
//     let text = document.body.getElementsByTagName("p");
//     document.body.removeChild(text[p]);
//     let textContent = document.createTextNode("Je suis un texte ajouté");
//     let createParag = document.createElement("p");

//     createParag.appendChild(textContent);
//     document.body.replaceChild(createParag, text[m]);
// }


// createNewParag(3, 2)


// function addTxt(pseudo, text) {
//     let newTxt = document.createElement("p");
//     newTxt.textContent = `${pseudo} , ${text}`;
//     document.body.appendChild(newTxt);
// }

// addTxt("Bonjour", "le pain");



// let text = document.body.getElementsByTagName("p");
// let texteTab = Array.from(text);
// texteTab.map(txt => txt.textContent = "LOL HACKED");

// let firstP = document.body.querySelector("p");
// console.log(firstP.offsetHeight, firstP.offsetWidth);


// text[0].addEventListener("click", function () {
//     title.classList.add("maCouleur");
// });

// text[1].addEventListener("click", function () {
//     title.classList.remove("maCouleur");
// });

// text[2].addEventListener("click", function () {
//     title.classList.toggle("maCouleur")
// });


// function monClick() {
//     console.log("Bonjour");
//     firstP.removeEventListener("click", monClick);
// }


// firstP.addEventListener("click", monClick);
// let typedText = "";

// addEventListener("keydown", function (event) {
//     if (event.key.length === 1) { 
//         typedText += event.key; 
//         firstP.textContent = typedText; 
//     } else if (event.key === "Backspace") {
        
//         typedText = typedText.slice(0, -1);
//         firstP.textContent = typedText;
//     }
// });


addEventListener("click", function(unEvent) {
    console.log(unEvent.x, unEvent.y);
    let img = document.createElement("img");
    let taille = 58;
    img.setAttribute("src", `https://loremflickr.com/${taille}/${taille}`);

    // style
    img.style.position ="absolute";
    img.style.left = unEvent.x - taille /2 + "px";
    img.style.top = unEvent.y - taille /2 + "px";

    document.body.appendChild(img);
});


// document.body.insertBefore(division, text[0]);

// document.body.insertBefore(text[1], title);

// document.body.appendChild(division);