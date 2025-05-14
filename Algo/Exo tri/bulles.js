// Le but est de trier un tableau nous-même (il faut mettre les éléments du plus petit au plus grand). Pour cela, on va procéder en plusieurs étapes :

// Étape 1 : écrire une fonction qui reçoit un tableau et un numéro de case (i). Son but est d'échanger les valeurs des cases i et i+1 si celles-ci ne sont pas dans le bon ordre.

let tableau = [54,2,74,1,3,9,7,54,63,9,63,665,7842,356,65,24,1,4,7,5,6322]


function bulle (tab, i) {
    if (tab[i]>tab[i+1]) {
        let save = tab[i];
        tab[i] = tab[i+1];
        tab[i+1] = save;
    }
}

// Étape 2 : écrire une fonction qui reçoit un tableau et qui applique l'étape 1 sur toutes les cases successives (cases 0/1, cases 1/2, cases 2/3, ..., cases avant-dernière/dernière).

function bulleDeux (tab) {
    for (let j = 0 ; j < tab.length-2 ; j++) {
        bulle(tab,j);
    }
}

// Étape 3 : écrire une fonction qui reçoit un tableau et qui le trie en appelant la fonction 2 autant de fois qu'il y a d'éléments dans le tableau.

function bulleTrois (tab) {
    for (let k = 0 ; k < tab.length-1; k++) {
        bulleDeux(tab);
    }
}

bulleTrois(tableau);
console.log(tableau);

// Note : on peut visualiser cet algorithme sur cette image <https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/211162/a9b17b54-b6dd-1602-be04-6fc125676b7a.gif>.