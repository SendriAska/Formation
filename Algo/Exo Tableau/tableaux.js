// 1) Créer un tableau tab1 de 6 cases, qui contient les nombres 144, 202, 216, 216, 222 et 64.

let tab1 = [144, 202, 216, 216, 222, 64];

// 2) Ajouter le nombre 0 à la fin du tableau tab1.

tab1.push(0);

// 3) Afficher *un par un* tous les éléments du tableau tab1.

console.log(tab1[0]);
console.log(tab1[1]);
console.log(tab1[2]);
console.log(tab1[3]);
console.log(tab1[4]);
console.log(tab1[5]);
console.log(tab1[6]);

for (let i = 0; i < tab1.length; i++) {
  console.log(tab1[i]);
}

// 4) Retirer le dernier élément du tableau tab1.

tab1.pop();

// 5) Créer un tableau tab2 qui contient les nombres 238, 222, 228, 216, 200.

let tab2 = [238, 222, 228, 216, 200];

// 6) Ajouter le nombre 58 à la fin de tab2.

tab2.push(58);

// 7) Ajouter *un par un* tous les éléments du tableau tab2 à la fin du tableau tab1.

for (let i = 0; i < tab2.length; i++) {
  tab1.push(tab2[i]);
}

// 8) Afficher *un par un* tous les éléments du tableau tab1.

for (let i = 0; i < tab1.length; i++) {
  console.log(tab1[i]);
}

// 9) Retirer et stocker dans la variable maVariable le dernier élément du tableau tab1.

let maVariable = tab1.pop();

// 10) Afficher la taille du tableau tab1.

console.log(tab1);
console.log(maVariable);

console.log(tab1.length);

// 11) Ajouter le nombre 66 à la fin du tableau tab1.

tab1.push(66);
console.log(tab1);

// 12) Diviser par 2 toutes les variables contenues dans le tableau tab1.

for (let i = 0; i < tab1.length; i++) {
  tab1[i] = tab1[i] / 2;
}

console.log(tab1);

// 13) Pour vérifier si vous êtes correctement arrivé(e) jusqu'ici, essayez les deux lignes de code suivantes :
// console.log(tab1.reduce((acc,cur)=> acc+String.fromCharCode(cur),""));
// console.log(String.fromCharCode(maVariable)+String.fromCharCode(maVariable-17));
// (On ne cherchera pas à comprendre ça)

console.log(tab1.reduce((acc, cur) => acc + String.fromCharCode(cur), ""));
console.log(
  String.fromCharCode(maVariable) + String.fromCharCode(maVariable - 17)
);



// Écrire une fonction qui prend un tableau en entrée et affiche le dernier élément de ce tableau.
// Écrire une fonction qui prend un tableau en entrée et retourne le dernier élément de ce tableau.
let tabA = [1,2,3,4];


function tabAA(tab) {
    console.log(tab[tab.length-1]);
}

function tabAB(tab) {
    return tab[tab.length-1];
}

tabAA(tabA);
tabAA(tab1);

// Écrire une fonction qui prend en entrée un tableau et qui retourne le minimum de ce tableau.

function tabAC(tab) {
    console.log(Math.min(...tab))
    return Math.min(...tab);
}

tabAC(tabA);


function tabMini (tab) {
  let min = tab[0];
  for (let i=1 ; i< tab.length;i++) {
    if (tab[i]<min) {
      min = tab[i];
    }
  }
  return min;
}

console.log(tabMini(tabA))
// Écrire une fonction qui prend en entrée un tableau et qui retourne le maximum de ce tableau.

function tabMax (tab) {
  let max = tab[0];
  for (let i=1 ; i < tab.length;i++) {
    if (tab[i] > max) {
      max = tab[i];
    }
  }
  return max;
}

console.log(tabMax(tabA))
console.log(tabMax(tab1))

// Écrire une fonction qui prend en entrée un tableau et un nombre et qui retourne le nombre de fois que ce nombre apparaît dans le tableau.

let tabLol = [1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,2,2,2,2,1,1,1,1,4,4,4,5,5,5,8,8,8,6,6,6,6,6,6,7,9,7,7,7,7]

function tabAF(tab,n) {
  let count = 0;
  for ( let i=1;i < tab.length;i++) {
    if (tab[i]==n){
      count++;
    }
  }
  return count;
}

console.log(tabAF(tabLol,1))


// Écrire une fonction qui prend en entrée un tableau et un nombre et qui retourne true si le nombre existe dans le tableau, false sinon.

function tabFeur(tab,n) {
  for ( let i=1;i < tab.length;i++) {
    if (tab[i]==n){
      return "true";
    } else {
      return "false";
    }
  }
}

console.log(tabFeur(tabLol,1))
console.log(tabFeur(tabLol,100))

// Créer un tableau qui contient [1,2,3,...,7777].

let tab7777 = []
for (let i = 0 ; i < 7778 ; i++) {
  tab7777.push(i);
}

console.log(tab7777)
// Créer un tableau qui contient [10,20,30,...,77770].

let tab77770 = []
for (let i = 0 ; i < 7778 ; i++) {
  tab77770.push(i*10);
}

console.log(tab77770)
// En se servant du tableau précédent, créer un tableau qui contient [5,10,15,...,38885].

let tabDivDeux = [];
for (let i = 0 ; i < 7778 ; i++) {
  tabDivDeux.push(tab77770[i]/2);
}

console.log(tabDivDeux)
// Écrire une fonction qui prend un tableau en entrée et qui en supprime les dernières valeurs, tant qu'elles sont inférieures à 50.
// console.log(leNomDeVotreFonction([1,45,88,54,23,-100,12])); // doit afficher [1,45,88,54]

let frieren = [1,45,88,54,23,-100,12]

function tabBonjour(tab) {
    while (tab[tab.length - 1] < 50) {
      tab.pop();
    }
    return tab;
}

console.log(tabBonjour(frieren));
// [Plus difficile - bonus] Écrire une fonction qui prend en entrée un tableau de nombres positifs et qui retourne la deuxième plus grande valeur du tableau.

// [Bonus] Suite de l'exo : on **sait** que le tableau reçu est trié (on ne le vérifie pas). Comment exploiter cette information pour améliorer la recherche d'un élément ?
