class Employee {
    constructor(name, surname, age, salary) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.salary = salary;
    }
    calculSalary () {
        return this.salary * 12 * 1.9;
    }
}




class Pme {
    constructor(name, team, sales, fix, bought) {
        this.name = name;
        this.team = team;
        this.sales = sales;
        this.fix = fix;
        this.bought = bought;
    }

    bilanCalculed() {
        let chargeSalarial = 0;
        for(let salarie of this.team){
            chargeSalarial += salarie.calculSalary();
        }
        let result = this.sales - (chargeSalarial + this.bought + this.fix);
        return result;
    }

    display() {
        let chargeSalarial = 0;
        for(let salarie of this.team){
            chargeSalarial += salarie.calculSalary();
        }
        let initial = this.name + ": Cout Initial : 70000";
        let team = this.name + ": Cout Total Equipe :" + chargeSalarial;
        let sales = this.name + ": VENTES :" + this.sales;
        let bilan = this.name + ": BILAN :" + this.bilanCalculed();
        console.log(initial);
        console.log(team);
        console.log(sales);
        console.log(bilan);
    }
}



// // Scénario 

const pme = new Pme(
    "Ma Petite Entreprise -",
    // Tableau de l'équipe de salariés
    [new Employee("Duval", "Paul", 30, 2000),
    new Employee("Durand", "Alain", 40, 3000),
    new Employee("DOis", "Sylvia", 40, 4000),],
    //Revenu, frais fixe, frais d'achat
    300000,
    20000,
    50000);

pme.display();

