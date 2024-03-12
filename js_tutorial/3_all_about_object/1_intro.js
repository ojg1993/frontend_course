/**
 * How to define an object
 * 
 * 1. object - [], {} ...
 * 2. class instance - new className
 * 3. function
 */


// 1
const jinGyu = {
    name: 'jingyu',
    year: 1993
};
console.log(jinGyu);

// 2
class IdolModel{
    name;
    year;

    constructor(name, year){
        this.name=name;
        this.year=year;
    }
}

console.log(new IdolModel('example', 9999));

// 3 constructor function

function IdolFunction(name, year){
    this.name = name;
    this.year = year;
}


const foo = new IdolFunction('bar', 1579);
console.log(typeof foo);
