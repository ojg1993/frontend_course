/**
 * Loops
 *
 * 1. for
 * 2. while
 */



for (i=0; i<10; i++){
    console.log(i);
}
console.log('-------------------');
for (i=10; i>0; i--){
    console.log(i);
}
console.log('-------------------');

for(i=0; i<3; i++){
    for(j=3; j>0; j--){
        console.log(i, j);
    }
}
console.log('-------------------');

let stars = ''

for (i=0; i<6; i++){
    for (j=0; j<6; j++){
        stars += '*';
    }
    stars += '\n';
}

console.log(stars);
('-------------------');

const jinGyu = {
    name: '오진규',
    year: 1993,
    nationality: 'Korean'
}

for (key in jinGyu){  // key == dict key
    console.log(key);
}

const letters = ['Jjn', 'Gyu', 'Oh']
for (key in letters){  // iterating the index of the array [for in]
    console.log(key);
    console.log(letters[key])
}

for (val of letters){  // iterating the values of the array [for of]
    console.log(val);
}

('-------------------');
let number = 0;

while(number < 3){
    console.log('Hello World!')
    number ++
}

('-------------------');
for (i=0; i<10; i++){
    if (i===5) {
        break;
    }
    console.log(i);
}

('-------------------');
for (i=0; i<10; i++){
    if (i===5) {
        continue;
    }
    console.log(i);
}