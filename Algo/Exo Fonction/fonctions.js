// Écrire une fonction f1 qui ne prend rien en entrée, et qui affiche 17 dans la console.

function f1() {
    console.log(17);
}

// Utiliser la fonction f1 pour afficher 18 dans la console.

f1();

// Écrire une fonction f2 qui ne prend rien en entrée, et qui retourne 17.

function f2 () {
    return 17;
}

// Utiliser la fonction f2 pour afficher 18 dans la console.

console.log(f2()+ 1);

// La fonction f2 a l'air moins pratique à utiliser. Quel intérêt pourrait-elle avoir par rapport à f1 ?

'On peut tout faire avec un return, on ne veut pas seulement afficher une valeur dans la console'

// Écrire une fonction f3 qui prend un nombre en entrée et qui affiche dans la console le double de ce nombre.

function f3(n) {
    console.log(n*2);
}

// Utiliser la fonction f3 pour écrire dans la console le double de 99.

f3(99);

// Écrire une fonction f4 qui prend un nombre en entrée et qui retourne le double de ce nombre.

function f4(n) {
    return n*2;
}

// Utiliser la fonction f4 pour écrire dans la console le double de 100.

console.log(f4(100));

// Utiliser la fonction f4 pour stocker dans une variable appelée a le double de 101.

let a = 101;
console.log(f4(a));

// Écrire une fonction f5 qui prend en entrée deux nombres et qui affiche dans la console la somme de ces deux nombres.

function f5(n,m) {
    console.log(n+m);
}


// Utiliser la fonction f5 pour écrire dans la console la somme de 42 et 78.

f5(42,78);

// Écrire une fonction f6 qui prend en entrée deux nombres et qui retourne la somme de ces deux nombres.

function f6(n,m) {
    return n+m;
}

// Utiliser la fonction f6 pour écrire dans la console la somme de 42 et 77.

console.log(f6(42,77));

// Utiliser la fonction f6 pour incrémenter la variable a de la somme de 42 et 77.

console.log(f6(42,77)+1);

// Écrire une fonction f9 qui prend un nombre et un mot en entrée, et qui affiche dans la console ce mot ce nombre de fois.

function f9(n,m) {
    for(i=0;i<n;i++){
        console.log(m);
    } 
}

f9(5,"bob");

// Écrire une fonction f7 qui prend deux nombres en entrée et qui retourne le plus grand des deux.

function f7(n,m) {
    if (n>m) {
        return n;
    } else {
        return m;
    }
}

console.log(f7(100,99));
console.log(f7(1,99));

// Écrire une fonction f8 qui prend trois nombres en entrée et qui retourne le plus grand des trois.
// (Au moins deux versions possibles : sans utiliser f7, et en utilisant f7).


function f8 (n,m,o) {
    if (n>m & n>o) {
        return n;
    } else if (o>m & o>n) {
        return o;
    } else {
        return m;
    }
}


console.log(f8(100,11,200));
console.log(f8(1,11,4));
console.log(f8(100,11,5));