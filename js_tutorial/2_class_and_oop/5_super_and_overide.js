class BaseIdolModel{
    name;
    year;

    constructor(name, year){
        this.name=name;
        this.year=year;
    }

    sayHello(){
        return `Hello I am ${this.name}.`
    }
}

class FemaleIdolModel extends BaseIdolModel {
    speciality;

    constructor(name, year, speciality){  // overiding super class's constructor
        super(name, year);
        this.speciality=speciality;
    }

    sayHello(){ // overiding super class's method

        // return `Hello I am ${this.name}, my speciality is ${this.speciality}.`
        return `${super.sayHello()} My speciality is ${this.speciality}.`
    }
}


const hannah = new FemaleIdolModel('Hannah Seal', 1995, 'singing');
const example = new BaseIdolModel('Exmaple', 9999);


console.log(example);
console.log(example.sayHello());
console.log(hannah);
console.log(hannah.sayHello());