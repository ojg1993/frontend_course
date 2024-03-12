

var numberOne = 20;

function levelOne(){
    console.log(numberOne);  // included
}

// levelOne();

function levelOne(){
    var numberOne = 40;
    console.log(numberOne);
}

levelOne();
console.log(numberOne);

/**
 * JS -> Lexical scope
 */

console.log('-------------------');

var numberThree = 3;

function functionOne(){
    var numberThree = 100;

    functionTwo();
}

function functionTwo(){
    console.log(numberThree);
}

functionOne();

console.log('-------------------');

var i = 999;

for(var i=0; i<5; i++){
    console.log(i);
}
console.log(`i in global scope: ${i}`); // 5
console.log('-------------------');


i = 999;

// block level scope
for(let i=0; i<5; i++){
    console.log(i);
}
console.log(`i in global scope: ${i}`); // 999
console.log('-------------------');