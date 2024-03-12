
const testObj = {};


// __proto__ exists in all objects
console.log(testObj.__proto__);


function IdolModel(name, year){
    this.name = name;
    this.year = year;
}

console.log(IdolModel.prototype);
console.log(IdolModel.prototype.constructor === IdolModel); // true
console.log(IdolModel.prototype.constructor.prototype === IdolModel.prototype); // true
console.log(IdolModel.__proto__ === Function.prototype); // true
console.log(Function.prototype.__proto__ === Object.prototype); // true


console.dir(IdolModel.prototype, {
    showHidden: true,
});



function IdolModel(name, year){

    this.name = name;
    this.year = year;

    this.sayHello = function(){
        return `${this.name} says hello.`;
    }
}

const jin = new IdolModel('오진규', 1993);
const jinGyuOh = new IdolModel('jingyu oh', 1993);

console.log(jin.sayHello === jinGyuOh.sayHello); // false
console.log('-------------------');



function IdolModel2(name, year){

    this.name = name;
    this.year = year;
}

// VERY IMPORTANT -> each instances are sharing the method by accessing through prototype
IdolModel2.prototype.sayHello = function(){
    return `${this.name} says hello.`;
}

const jin2 = new IdolModel2('오진규', 1993);
const jinGyuOh2 = new IdolModel2('jingyu oh', 1993);

console.log(jin2.sayHello());
console.log(jin2.hasOwnProperty('sayHello'));
console.log(jinGyuOh2.sayHello());
console.log(jinGyuOh2.hasOwnProperty('sayHello'));
console.log(jin2.sayHello === jinGyuOh2.sayHello); // true
console.log('-------------------');



function IdolModel3(name, year){

    this.name = name;
    this.year = year;

    this.sayHello = function(){
        return 'Hello, this is a method from instance.';
    }
}

IdolModel3.prototype.sayHello = function(){
    return 'Hello, this is a method from prototype.'
}

const bts = new IdolModel3('test', 2000);
console.log(bts.sayHello());