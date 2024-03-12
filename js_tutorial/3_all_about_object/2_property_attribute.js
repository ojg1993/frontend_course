
/**
 * Property Attribute
 * 
 * 1. Data property: a form of key-val, that having physical value
 * 2. Accessor property: a function property to access to the data or set the data (getter / setter)
 */


const jingyu = {
    name: '오진규',
    year: 1993,
}

console.log(Object.getOwnPropertyDescriptor(jingyu, 'name'));
console.log(Object.getOwnPropertyDescriptor(jingyu, 'year'));
console.log('-------------------');
/**
 * 1. value
 * 2. writable - can be set as false
 * 3. enumerable - looping possible
 * 4. configurable - figuring if re-defining property attribute is allowed.
 *                   if false, property deletion or modification not allowed,
 *                   but when writable is true, property value & writable modification(true->false) allowed
 */

console.log(Object.getOwnPropertyDescriptor(jingyu, 'name'));
console.log(Object.getOwnPropertyDescriptors(jingyu));


const hannaSeal = {
    name: 'Hannah Seal',
    year: 1995,

    get age(){
        return new Date().getFullYear() - this.year;
    },

    set age(age){
        this.year = new Date().getFullYear() - age;
    }
}

console.log(hannaSeal.age);
hannaSeal.age = 30;
console.log(hannaSeal.age);
console.log(hannaSeal.year);

console.log(Object.getOwnPropertyDescriptor(hannaSeal, 'age'));
console.log(Object.getOwnPropertyDescriptors(hannaSeal));


console.log('-------------------');

// property attribute management
Object.defineProperty(hannaSeal, 'height', {
    value: 155,
    writable: false,
    enumerable: true,
    configurable: true,
})

console.log(hannaSeal);
console.log(Object.getOwnPropertyDescriptor(hannaSeal, 'height'));
console.log('-------------------');


hannaSeal.height = 170; // because writable is false, 
console.log(hannaSeal); // it still returns original 155
