/**
 * Closure
 * 
 * A closure is the combination of a function and the lexical environment
 * within which that fucntion was decleared.
 * 
 * --> closure: cases that a lower function having longer lifecycle than its higer function.
 */


function getNumber(){
    var number = 5;

    function innerGetNumber(){
        return number;
    }

    return innerGetNumber();
}

// console.log(number);
// console.log(getNumber());


function getNumber(){
    var number = 5;

    function innerGetNumber(){
        return number;
    }

    return innerGetNumber;
}

const runner = getNumber();  // getNumber's execution context ends here

console.log(runner);
console.log(runner()); // getNumber's inner function is stil alive & called => closure


/**
 * 1. Data Caching
 */


function cacheFunction(){
    var number = 10*10; // this calculation is done only once 

    function innerCacheFunction(num){
        return number * num; // the result of the calculation is here stored & used (cached)
    }
    return innerCacheFunction;
}

const runner2 = cacheFunction();
console.log(runner2(10));
console.log(runner2(20));


function cacheFunction2(){
    var num = 99;
    
    function increment(){
        num++;
        return num;
    }
    return increment;
}

const runner3 = cacheFunction2();

console.log(runner3()); // 100
console.log(runner3()); // 101
console.log(runner3()); // 102
console.log(runner3()); // 103
console.log(runner3()); // 104  => increment remembers the value of num