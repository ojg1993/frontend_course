console.log(10 + 10);
console.log(10 - 10);
console.log(10 * 10);
console.log(10 / 10);
console.log(10 / 3);
console.log(10 % 10);
console.log(10 % 3);

console.log('-----------------------');

let n = 1;
n++;
console.log(n);
n--;
console.log(n);

console.log('-----------------------');

res = n ++;
console.log(res, n);
res = n --;
console.log(res, n);

console.log('-----------------------');

res = ++n;
console.log(res, n);
res = --n;
console.log(res, n);

console.log('-----------------------');

let sample = '99';

console.log(+sample);
console.log(typeof +sample);

console.log(-sample);
console.log(typeof -sample);

console.log(sample);
console.log(typeof sample);

console.log('-----------------------');

sample = true;
// sample = false;
console.log(+sample);
console.log(typeof +sample);

console.log('-----------------------');

sample = "Jingyu";
console.log(+sample);  // NaN -> Not a Number
console.log(sample);


console.log('-----------------------');

console.log(5==5); // true
console.log(5=='5'); // true
console.log(0==''); // true
console.log(true==1); // true
console.log(true=='1'); // true
console.log(false==0); // true

console.log('-----------------------');

console.log(5!=5); // false
console.log(5!='5'); // false
console.log(0!=''); // false
console.log(true!=1);  // false
console.log(true!='1'); // false
console.log(false!=0); // false

console.log('-----------------------');
console.log(5===5); // true
console.log(5==='5');  // false
console.log(0==='');  // false
console.log(true===1);  // false
console.log(true==='1');  // false
console.log(false===0);  // false

console.log('-----------------------');
console.log(5!==5); // false
console.log(5!=='5');  // true
console.log(0!=='');  // true
console.log(true!==1);  // true
console.log(true!=='1');  // true
console.log(false!==0);  // true

console.log('-----------------------');
console.log(true && true);
console.log(true & true);

console.log('-----------------------');
console.log(true || false);
console.log(true | false);

console.log('-----------------------');
console.log(10 > 1 && 20 > 2); // true
console.log(10 < 1 && 20 > 2);
console.log(10 < 1 && 20 < 2);

console.log('-----------------------');
console.log(10 > 1 || 20 > 2);
console.log(10 > 1 || 20 < 2);
console.log(10 < 1 || 20 < 2); // false


console.log('-----------------------');
console.log(true && "Jingyu");
console.log(false && "Jingyu");
console.log(true || "Jingyu");
console.log(false || "Jingyu");

console.log(true && true && "Jingyu");
console.log(true && false && "Jingyu");

