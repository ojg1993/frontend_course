let friends = [
    'foo',
    'bar',
    'foo2',
    'bar2',
    'foo3',
    'bar3'
]

console.log(friends);
console.log('---------------------');

// push [append]  ->  append the data at the tail of the array, returning new length of the array
friends.push('new one !'); // -> returning 7
console.log(friends);
console.log('---------------------');

//pop [pop]-> removing the last element of the array, returning the removed data
friends.pop(); // -> returning "new one !"
console.log(friends);
console.log('---------------------');

// shift [deque: popleft]->  removing the first element of the array returning the removed data
console.log(friends.shift());
console.log(friends);
console.log('---------------------');

// unshift [deque: appendleft]-> appending the data at the head of the array, returning the length of the array
console.log(friends.unshift('foo'));
console.log(friends);
console.log('---------------------');

// splice -> removing the given rage of elements from the given index, returning the removed data as array
console.log(friends.splice(0, 3));
console.log(friends);
console.log('---------------------');


friends = [
    'foo',
    'bar',
    'foo2',
    'bar2',
    'foo3',
    'bar3'
]

// concat -> returns a concatenated array with the original array and the given data(no saving)

console.log(friends.concat('foo4'));
console.log(friends);
console.log('---------------------');

// slice -> returns the sliced array(no saving)

console.log(friends.slice(0, 3));
console.log(friends);
console.log('---------------------');

// spread operator

let friends2 = [
    ...friends
];
console.log(friends2); // flat data of friend into friend2

let friends3 = [
    friends
];
console.log(friends3);
console.log('---------------------');


// join

console.log(friends.join());
console.log(friends.join('/'));
console.log(friends.join(', '));
console.log('---------------------');


// sort, reverse
console.log(friends.sort());
console.log(friends.reverse());


let numbers = [
    1,
    8,
    5,
    3,
    7
]


// accending -> return positive number
// no change -> return 0
// decending -> return negative number

numbers.sort((a,b)=>{ // accendign
    return a > b ? 1 : -1;
})
console.log(numbers);

numbers.sort((a,b)=> a > b ? -1 : 1); // decending
console.log(numbers);

console.log('---------------------');


// map -> applying data manipulation while iterating all the elements of the array(no saving)

console.log(friends.map((x => x)));
console.log(friends.map((x => `친구: ${x}`)));

console.log(friends.map((x =>{
    if (x.startsWith('foo')){
        return `friend: ${x}`
    }else{
        return x
    }
})));


console.log('---------------------');
numbers = [
    1,
    8,
    5,
    3,
    7
]

// filter -> returning an array of the elements meeting the requirement
console.log(numbers.filter((x) => x % 2 == 1));
console.log('---------------------');

// find -> returning FIRST element only meeting the requirement
console.log(numbers.find((x) => x % 2 == 1));
console.log('---------------------');


// findIndex -> returning FIRST index of the element meeting the requirement
console.log(numbers.findIndex((x) => x % 2 == 0));
console.log('---------------------');

// reduce -> iterate through the elements of the array accumulating the result of the condition
console.log(numbers.reduce((p, n) => p+n, 0))
