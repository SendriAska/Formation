// Exercice 1 : écrire 50 fois "Bonjour" dans la console.
console.log("Exercice 1");
for(let i = 0 ; i < 50 ; i++) {
    console.log("Bonjour");
}

// Exercice 2 : écrire dans la console :
// A
// B
// A
// B
// A
// B
// A
// B
// A
// B
console.log("Exercice 2");
// TODO
for(let i=0;i<5;i++) {
    console.log("A");
    console.log("B");
}
// Exercice 3 : écrire dans la console :
// A
// A
// A
// A
// A
// B
// A
// A
// A
// A
// A
// B
// A
// A
// A
// A
// A
// B
console.log("Exercice 3");
// TODO
for(let i=0;i<3;i++) {
    for(let j=0;j<5;j++){
        console.log("A");
    }
    console.log("B");
}
// Exercice 4 : écrire dans la console :
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
console.log("Exercice 4");
// TODO
for(let i=0;i<10;i++) {
    console.log(i);
}
// Exercice 5 : écrire dans la console :
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
// 11
// 12
console.log("Exercice 5");
// TODO
for (let i=3;i<13;i++){
    console.log(i);
}
// Exerice 6 : écrire dans la console :
// 0
// 1
// 2
// 3
// 0
// 1
// 2
// 3
// 0
// 1
console.log("Exercice 6");
// TODO
for (let i=0;i<2;i++) {
    for (let j=0;j<4;j++){
        console.log(j);
    }
}
console.log(0);
console.log(1);


// Exercice 7 : écrire dans la console :
// 0
// 1
// 2
// 3
// 4
// A
// A
// A
// 8
// 9
console.log("Exercice 7");
// TODO
for (let i=0; i<10;i++){
    if (i<5) {
        console.log(i);
    } else if (i>7) {
        console.log(i)
    } else {
        console.log("A");
    }
}
// Exercice 8 : écrire dans la console :
// 100
// 1
// 2
// 103
// 4
// 5
// 106
// 7
// 8
// 109
console.log("Exercice 8");
// TODO
for (let i=0;i<10;i++) {
    if(i%3==0) {
        console.log(i+100);
    } else {
        console.log(i);
    }
}
// Exercice 9 : écrire dans la console :
// 0
// 101
// 202
// 3
// 104
// 205
// 6
// 107
// 208
// 9
console.log("Exercice 9");
// TODO
for (let i=0;i<10;i++){
    if(i%3==0){
        console.log(i);
    } else if(i%3==1){
        console.log(i+100);
    } else {
        console.log(i+200);
    }
}
// Exercice 10 : écrire dans la console tous les résultats possibles de lancers de deux dés :
// 1 1
// 1 2
// 1 3
// ...
// 6 4
// 6 5
// 6 6
console.log("Exercice 10");
// TODO
for(let i=1;i<7;i++){
    for(let j=1;j<7;j++){
        console.log(i,j)
    }
}

// Exercice 11 : adapter l'exercice précédent pour enlever les doublons (on ne veut pas afficher 1 2 et 2 1, mais seulement l'un des deux).
console.log("Exercice 11");
// TODO
for(let i=1;i<7;i++){
    for(let j=1;j<=i;j++){
        console.log(i,j)
    }
}
// Exercice 12 : en prenant des dés à 20 faces, combien de résultats différents (sans doublon) peut-on afficher ? (Autrement dit : adapter le code précédent pour compter les résultats au lieu de les afficher)
console.log("Exercice 12");
// TODO
let nbDes = 0;

for (let i = 1; i < 21; i++) {
    for (let j = 1; j <=i; j++) {
        nbDes++;
    }
}

console.log(nbDes);


// Exercice 13 : afficher la table de multiplication de 1 (de 1 à 9):
// 1x1 = 1
// 1x2 = 2
// 1x3 = 3
// 1x4 = 4
// 1x5 = 5
// 1x6 = 6
// 1x7 = 7
// 1x8 = 8
// 1x9 = 9
console.log("Exercice 13");
// TODO
for (let i=1;i<10;i++) {
    console.log(1+"x"+i+"="+i);
}

// Exercice 14 : que faut-il modifier du code précédent pour obtenir la table de 2 :
// 2x1 = 2
// 2x2 = 4
// 2x3 = 6
// 2x4 = 8
// 2x5 = 10
// 2x6 = 12
// 2x7 = 14
// 2x8 = 16
// 2x9 = 18
console.log("Exercice 14");
// TODO
let result = 0;

for( let i=1;i<10;i++){
    result = result+2;
    console.log(2+"x"+i+"="+result);
}

// Exercice 15 : comment généraliser pour afficher toutes les tables de multiplication de 1 à 9 :
// 1x1 = 1
// 1x2 = 2
// 1x3 = 3
// 1x4 = 4
// ...
// 9x7 = 63
// 9x8 = 72
// 9x9 = 81
console.log("Exercice 15");
// TODO
let resultDeux = 0

for(let i=1; i<10;i++) {
    for (let j=1; j<10; j++){
        resultDeux=i*j;
        console.log(j+"x"+i+"="+resultDeux);
    }
}

// Exercice 16 : calculer 1+2+3+4+...+99+100. (Vous devriez trouver 5050)
console.log("Exercice 16");
// TODO
let somme = 0;

for(let i=0;i<101;i++){
    somme=somme+i;
}
console.log(somme);


// Exercice 17 : trouver le nombre n tel que 1+2+3+4+5+...+(n-1)+n = 302253
console.log("Exercice 17");
// TODO
let sommeDeux = 0;
let n = 0;

while (sommeDeux<302253) {
    n++;
    sommeDeux=sommeDeux+n;
}

console.log(n);

// Exercice 18 : Afficher :
// 1
// 1
// 2
// 3
// 5
// 8
// 13
// 21
// 34
// 55
console.log("Exercice 18");
// TODO
let na = 1;
let nb = 1;


for(let i=0;i<8;i++){
    let sum = na + nb;
    console.log(sum);
    na = nb;
    nb = sum;
}

// Exercice 19 : compter combien il y a de nombres multiples de 3 ou de 7 entre 1234 et 5678
console.log("Exercice 19");
// TODO
let main=0;

for (let i=1234;i<=5678;i++) {
    if (i%3 == 0) {
        main++;
    } else if (i%7 == 0) {
        main++;
    }
}

console.log(main);


// Exercice 20 : afficher dans la console :
/*
*
**
***
****
*****
*/
console.log("Exercice 20");
// TODO
let star = "*";
let wars = "*";

for (let i=0;i<6;i++) {
    console.log(star);
    star=star+wars;
}
// Exercice 21 : afficher dans la console :
/*
    *
   **
  ***
 ****
*****
*/
console.log("Exercice 21");
// TODO
let space = 4
let stars = 1

for (let i=0;i<5;i++){
    let feur = ""
    for (let j=0;j<space;j++){
        feur = feur + " ";
    }
    for (let j=0;j<stars;j++) {
        feur = feur + "*";
    }
    console.log(feur);
    space--;
    stars++;
}



// Exercice 22 : afficher dans la console :
/*
    *
   ***
  *****
 *******
*********
*/
console.log("Exercice 22");
// TODO
for (let i=0;i<5;i++){
    let feur = ""
    for (let j=0;j<space;j++){
        feur = feur + " ";
    }
    for (let j=0;j<stars;j++) {
        feur = feur + "*";
    }
    for (let j=0;j<space;j++){
        feur = feur + " ";
    }
    console.log(feur);
    space--;
    stars++;
}
// Exercice 23 : afficher dans la console :
/*
    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *
*/
console.log("Exercice 23");
// TODO






function devern(n) {
    console.log("On m'a donné", n );
    let result = n+10;
    return result;
    console.log("le résultat est", result);
}

console.log("Bonjour");
console.log(devern(devern(0)));
console.log("Au revoir");