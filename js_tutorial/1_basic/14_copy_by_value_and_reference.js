/**
 * copy by value: use different memory address
 * copy by reference: use same memory address
 *
 * 1. all primitive values -> copy by value
 * 2. objects -> copy by reference
 *
 * origianl === clone -> false
 * orgianlObj === cloneObj -> true
 *
 * How to copy object with copy by value?  ->  use Spread Operator
 */


let original = "Hello";
let clone = original;


console.log(original);
console.log(clone);

console.log('-----------------');

clone += " How are you?"
console.log(original); // Hello
console.log(clone);  // Hello How are you?


console.log('-----------------');

let originalObj = {
    name: 'Jingyu',
    koreanName: '진규'
}

let cloneObj = originalObj;

console.log(originalObj);
console.log(cloneObj);
console.log('-----------------');

originalObj.name = "Hannah Seal"

console.log(originalObj);
console.log(cloneObj); // cloneObj is returning the data of originalObj



let number = [1,2,3];
let numberCopy = number;
let numberCopy2 =[
    ...number
]

console.log(number===numberCopy);
console.log(number===numberCopy2);