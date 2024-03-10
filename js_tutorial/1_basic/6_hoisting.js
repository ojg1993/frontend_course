

console.log("Hello");
console.log("World");

console.log('-----------------------');

// Hoisting: All the variables act as if they are placed on top of the all lines.
console.log(name);
var name = "Jingyu";
console.log(name);

console.log('-----------------------');

var name2;
console.log(name2);
var name2 = "Jingyu";
console.log(name2);

console.log('-----------------------');


// Error occurs, However the code returns Cannot access 'Jingyu' before initialization instead of Jingyu is not defined
console.log(Jingyu);
const Jingyu = "진규"; // Meaning 'const' also causes hoisting as 'var', but with the prevention of running
var Jingyu2 = "진규2"; // Meaning 'let' also causes hoisting as 'var', but with the prevention of running