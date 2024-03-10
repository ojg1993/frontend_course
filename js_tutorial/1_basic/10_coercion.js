
let age = 32;

// Explicit
let stringAge = age.toString();
console.log(typeof stringAge, stringAge);
console.log('--------------------')

console.log(typeof (99).toString(), (99).toString());
console.log(typeof (true).toString(), (true).toString());
console.log(typeof (Infinity).toString(), (Infinity).toString());
console.log('--------------------')


console.log(typeof parseInt('0'), parseInt('0'));
console.log(typeof parseFloat('0.11'), parseFloat('0.11'));
console.log(typeof +'1', +'1');

console.log('--------------------')

console.log(!'x');
console.log(!'');
console.log(!!'x');
console.log(!!'');

console.log('--------------------')

console.log(!!true);
console.log(!!false);
console.log(!!undefined);
console.log(!!null);

console.log('--------------------')

let a = '';
if (!!a){
    console.log(a);
}else{
    console.log('a is empty string');
}


console.log(!!{});
console.log(!![]);

console.log('--------------------')
// Implicit -> Do not use.
let test = age + ''
console.log(typeof test, test);
console.log('98' + 2); // 982
console.log('98' * 2); // 196
console.log('98' - 2); // 96