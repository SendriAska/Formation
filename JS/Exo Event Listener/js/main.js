const compteur = document.getElementById("compteur");
const compteur2 = document.getElementById("compteur2");
const balle = document.getElementById("balle");
const gameOver = document.getElementById("gameOver");

let count = 5;
const countdownInterval = setInterval(() => {
    count--;
    compteur.textContent = count;

    if (count === 0) {
        clearInterval(countdownInterval);
        compteur.style.display = "none";
        demarrerAnimation();
    }
}, 1000);
function demarrerAnimation() {
    
    balle.style.display = "block";
    compteur2.textContent = "0";

    let x = 0;
    let y = 0;
    let dx = 2; 
    let dy = 3; 

    const animationInterval = setInterval(() => {
        x += dx;
        y += dy;

        
        if (y >= 700) y = 0;
        
        if (x >= 900) x = 0;

        balle.style.top = y + "px";
        balle.style.left = x + "px";
    }, 20);

    
    let temps = 0;
    const compteur2Interval = setInterval(() => {
        temps++;
        compteur2.textContent = temps;

        if (temps === 10) {
            clearInterval(animationInterval);
            clearInterval(compteur2Interval);
            compteur2.style.display = "none";
            gameOver.style.display = "block";
        }
    }, 1000);
}









// const square = document.querySelector("div");

// let mooveToRight = 0;
// let direction = 1;

// const interval = setInterval(() => {
//     mooveToRight += direction*5;
//     if (mooveToRight >= 700) {
//         direction = -1;
//     } else if (mooveToRight <= 0) {
//         direction = 1;
//     }
//     square.style.left = mooveToRight + "px";
// }, 50);



// const eventListener = (e) => {
//     let hauteur = 150;
//     let largeur = 300;
//     rectangle.style.left = e.x - largeur / 2 + "px";
//     rectangle.style.top = e.y - hauteur / 2 + "px";
// }

// document.addEventListener("mousemove", eventListener);

// setTimeout(() => {
//     document.removeEventListener("mousemove", eventListener);
//     rectangle.innerText = "GAME OVER";
//     rectangle.style.background = "red";
//     rectangle.style.display = "flex";
//     rectangle.style.justifyContent = "center";
//     rectangle.style.alignItems = "center";
//     rectangle.style.fontWeight = "bolder";
// }, 5000);


// document.addEventListener("click",eventListener);

// document.removeEventListener("click",eventListener);