/**
 * Case
 * wish to convert the result of 2 * 10 / 2 % 3 into string
 */

console.log((2*10/2%3).toString());

function cal(n){
    return (n*10/2%3).toString();
}

console.log(cal(2));

const multiplyTwo = function(x,y){
    return x*y;
}
console.log(multiplyTwo(2,3));

console.log('---------------------');

function multiply(x, y){
    return x*y;
}

console.log(multiply(2,3));


console.log('---------------------');

function multiply(x, y=2){ // setting default value  for y parameter
    return x*y;
}

console.log(multiply(2)); // 2 is passed as x

console.log('---------------------');



// Arrow function1 -> base method
const multiply2 = (x, y) => {
    return x * y;
}

console.log(multiply2(2,5));

// Arrow function2 -> multiple parameters
const multiply3 = (x, y) => x*y;

console.log(multiply3(10,10));

// Arrow function3 -> single parameter
const multiply4 = x => x*2;

console.log(multiply4(10));


// Arrow function3 -> chain function
const multiply5 = x => y => z => `x :${x} y: ${y} z: ${z}`;
console.log(multiply5(2)(5)(7));

function multiply6(x){
    return function(y){
        return function(z){
            return `x :${x} y: ${y} z: ${z}`
        }
    }
}
console.log(multiply6(2)(5)(7));



console.log('---------------------');


function multiplyAll(...any){ // ...arguments(js) == *arguments(python)
    return Object.values(any).reduce((a, b) => a*b, 1);
}
console.log(multiplyAll(2,3,4,5,6));

// Immediately invoked function
(function multiplyAll(...any){
    console.log(Object.values(any).reduce((a, b) => a*b, 1));
})(1,2,3);