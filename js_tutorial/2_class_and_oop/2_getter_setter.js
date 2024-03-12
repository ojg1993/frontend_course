

class IdolModel{
    name;
    year;

    constructor(name, year){
        this.name = name;
        this.year = year;
    }

    // get / set keyword are property
    get nameAndYear(){
        return `${this.name}-${this.year}`;
    }

    set setName(name){
        this.name = name;
    }
}

const jingyu = new IdolModel('오진규', 1993);

console.log(jingyu);
console.log(jingyu.nameAndYear);

jingyu.name = 'Jingyu'; // not recommended & not able to execute when properties are defined as private
console.log(jingyu);
jingyu.setName = '오진규'; // recommended
console.log(jingyu);

console.log('-----------------');


class IdolModel2{
    #name; // ES7
    year;

    constructor(name, year){
        this.#name = name;  // private
        this.year = year;
    }

    get name(){
        return this.#name;
    }

    set name(name){
        this.#name = name;
    }
}

const jingyuOh = new IdolModel2('오진규', 1993);

console.log(jingyuOh); // Only returning year
console.log(jingyuOh.name); // calling private property 'name' with getter

jingyuOh.name = 'Jingyu Oh' // calling name setter
console.log(jingyuOh.name);
