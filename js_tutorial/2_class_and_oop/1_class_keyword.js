
/**
 * class
 * constructor -> __init__
 * this -> self
 */

class IdolModel{
    name='example';
    yearOfBirth=2024;
}

const jinGyu = new IdolModel();
console.log(jinGyu);
jinGyu.name = 'Jingyu';
console.log(jinGyu);
console.log('-----------------');


class FashionModel{
    // name;
    // yearOfBirth;
    constructor(name, yearOfBirth){
        this.name = name;
        this.yearOfBirth = yearOfBirth;
    }

    sayName(){
        return `Hi my name is ${this.name}.`;
    }
}

const jinGyuOh = new FashionModel('Jingyu Oh', 1993);
console.log(jinGyuOh);

const HannahSeal = new FashionModel(name='Hannah Seal', year=1995);
console.log(HannahSeal);

console.log(jinGyuOh.sayName());
console.log(HannahSeal.sayName());
console.log('-----------------');

console.log(typeof FashionModel);
console.log(typeof jinGyuOh);

jinGyuOh.name = 'Jing';
console.log(jinGyuOh);
