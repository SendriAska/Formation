const titre = document.querySelector("h1")
const rectangle = document.querySelector("div");

// remove
const eventListener = (e) => {
    let hauteur = 150;
    let largeur = 300;
    rectangle.style.left = e.x - largeur / 2 + "px";
    rectangle.style.top = e.y - hauteur / 2 + "px";
}

document.addEventListener("mousemove", eventListener);

setTimeout(() => {
    document.removeEventListener("mousemove", eventListener);
    rectangle.innerText = "GAME OVER";
    rectangle.style.background = "red";
    rectangle.style.display = "flex";
    rectangle.style.justifyContent = "center";
    rectangle.style.alignItems = "center";
    rectangle.style.fontWeight = "bolder";
}, 5000);


// document.addEventListener("click",eventListener);

// document.removeEventListener("click",eventListener);