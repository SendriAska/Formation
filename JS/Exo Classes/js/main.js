class Imc {
    constructor(nom,poids,taille){
        this.name = nom;
        this.weight = poids;
        this.height = taille;
    }

    calculImc () {
        let result = this.weight / (this.height * this.height);
        let arround = Math.round(result*100) /100;
        return arround;
    }

    display () {
        let write = this.name + "(" + this.weight + "kg," + this.height + "M) a un IMC de: " + this.calculImc();
        console.log(write);
    }
}

let list = [
    new Imc("Sebastien Chabal", 135 , 1.7),
    new Imc("Escaladeuse", 45 , 1.68),
    new Imc("Jojo", 300 , 2),
    new Imc("Gontrand", 90 , 1.75),
    new Imc("Colonel Clock", 200 , 1.75),
    new Imc("Josiane de la Vega", 99 , 1.55),
];

console.log(list);

list.forEach(feur => {
    feur.display();
});