/**
 * Data Types
 *
 * 6 Primitive types and 1 object type
 *
 * 1. Number
 * 2. String
 * 3. Boolean
 * 4. undefined
 * 5. Null
 * 6. Symbol
 *
 * 1. Object
 *  funtion
 *  array
 *  object
 */


// Number

const age = 30;
const temperature = -10;
const pi = 3.14;

console.log(typeof age);
console.log(typeof temperature);
console.log(typeof pi);
console.log('-----------------------');

const infinity = Infinity;
const ninfinity = -Infinity;

console.log(typeof Infinity);
console.log(typeof ninfinity);
console.log('-----------------------');


// String

const name = "Jingyu"
const name2 = "'Jingyu' oh"
const name3 = `"jin" 'gyu'
oh` // Template literal example

console.log(typeof name);
console.log(name2);
console.log(name3);
console.log(`${name} Oh`)
console.log('-----------------------');

// Boolean

const isTrue = true;
const isFalse = false;

console.log(typeof isTrue);
console.log(typeof isFalse);
console.log('-----------------------');


// Undefined -> decleared without initialising

let noInit;

console.log(noInit);
console.log(typeof noInit);
console.log('-----------------------');


// Null -> Implicitly declearing a variable with no data


let init = null;

console.log(init);
console.log(typeof init); // prints object -> supposed to print null, therefore it's a js bug
console.log('-----------------------');


// Symbol -> for unique value

const t1 = '1';
const t2 = '1';

console.log(t1 === t2);
console.log('-----------------------');

const s1 = Symbol('1');
const s2 = Symbol('1');

console.log(s1 === s2);
console.log('-----------------------');


/**
 * Object
 * Map -> key:value
 * Array -> list of values
 */

const dict = {
    red: "빨간색",
    "orange": "주황색",
}

console.log(dict['red']);
console.log(dict['orange']);
console.log(typeof dict);
console.log('-----------------------');



const arr = [
    "Jingyu",
    "Hannah",
    "Tofu",
    1,
    3,
];

console.log(arr);
console.log(typeof arr);
console.log('-----------------------');

console.log(arr[0]);
console.log(typeof arr[0]);
console.log('-----------------------');

console.log(arr[4]);
console.log(typeof arr[4]);
console.log('-----------------------');
