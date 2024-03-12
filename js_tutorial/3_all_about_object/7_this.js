

/**
 * this
 * 
 * due to the fact that JS follows lexical scope rule, function's scope is decided on definition
 * But this keyword's binding is decided on creation of the object.
 * 
 * 1. on function call, this points global object.
 * 2. on method call, this points its object
 * 3. on constructor call, this points its object
 */


const testFunction = function(){ // this -> mapped to global object
    return this;
}

console.log(testFunction());
console.log(testFunction() === global);


const jinGyu = {  // this -> mapped to the jingyu object
    name: '오진규',
    year: 1993,
    sayHello: function(){
        return `안녕하세요 저는 ${this.name} 입니다.`
    }
}

console.log(jinGyu.sayHello());


function Person(name, year){  // this -> mapped to the jingyu2 object
    this.name = name;
    this.year = year;

    this.sayHello = function(){
        return `안녕하세요 저는 ${this.name} 입니다.`
    }
}

const jinGyu2 = new Person('오진규', 1993);
console.log(jinGyu2.sayHello());

Person.prototype.dance = function(){
    return `${this.name} is dancing.`
}

console.log(jinGyu2.dance());



/**
 * this binding
 * 
 * 1. apply() -> taking arguments as a list 
 * 2. call()  -> taking arugments separating with comma
 * 3. bind()  -> perform like call without auto execution
 */


function returnName(){
    return this.name;
}

console.log(returnName());

const yuJin = {
    name: '안유진',
}

console.log(returnName.call(yuJin)); // 안유진
console.log(returnName.apply(yuJin)); // 안유진


function multiply(x, y, z){
    return `${this.name} / result: ${x*y*z}`
}

console.log(multiply.call(yuJin,2,3,4)); // 안유진 / result: 24
console.log(multiply.apply(yuJin, [2,3,4])); // 안유진 / result: 24

const laterFunc = multiply.bind(yuJin, 3,4,5);
console.log(laterFunc);
console.log(laterFunc());
