class BaseIdolModel{
    name;
    year;

    constructor(name, year){
        this.name=name;
        this.year=year;
    }
}

class FemaleIdolModel extends(BaseIdolModel) {
    dance(){
        return `${this.name}is dancing.`
    }
}

class MaleIdolModel extends(BaseIdolModel) {
    sing(){
        return `${this.name} is singing.`
    }
}

const jingyu = new MaleIdolModel('Jingyu Oh', 1993);
const hannah = new FemaleIdolModel('Hannah Seal', 1995);

console.log(jingyu);
console.log(jingyu.sing());
console.log(hannah);
console.log(hannah.dance());