

const jinGyu = {
    name: '오진규',
    year: 1993,

    get age(){
        return new Date().getFullYear - this.year;
    },

    set age(age){
        this.year = new Date().getFullYear - age;
    }
}

console.log(jinGyu);
console.log('-------------------');


/**
 * Extensible
 */

console.log(Object.isExtensible(jinGyu)); // true
jinGyu['height'] = 185;
console.log(jinGyu);


Object.preventExtensions(jinGyu)
console.log(Object.isExtensible(jinGyu)); // false

jinGyu['weight'] = 85; // not added 
console.log(jinGyu);

delete jinGyu.height; // non-extensible object does not blocks property deletion
console.log(jinGyu);
console.log('-------------------');


/**
 * Seal -- Setting configurable false
 */

const jinGyu2 = {
    name: '오진규',
    year: 1993,

    get age(){
        return new Date().getFullYear - this.year;
    },

    set age(age){
        this.year = new Date().getFullYear - age;
    }
}

console.log(Object.isSealed(jinGyu2)); // false

Object.seal(jinGyu2);

console.log(Object.isSealed(jinGyu2)); // true

jinGyu2.height = 185;
console.log(jinGyu2);

delete jinGyu2.name  // sealed object blocks property deletion
console.log(jinGyu2);



Object.defineProperty(jinGyu2, 'name', {
    value: 'jingyu Oh'
})

console.log(Object.getOwnPropertyDescriptor(jinGyu2, 'name'));


/**
 * Freezed ( non-extensible + sealed + no writable)
 * 
 * Only readable  - setting writable, configurable false
 */


const jinGyu3 = {
    name: '오진규',
    year: 1993,

    get age(){
        return new Date().getFullYear - this.year;
    },

    set age(age){
        this.year = new Date().getFullYear - age;
    }
}

console.log(Object.isFrozen(jinGyu3)); // false
Object.freeze(jinGyu3);
console.log(Object.isFrozen(jinGyu3)); // true

jinGyu3.height = 185;
console.log(jinGyu3);  // Not added
delete jinGyu3.name;
console.log(jinGyu3);  // Not deleted


// Object.defineProperty(jinGyu3, 'name', {
//     value: 'Jingyu Oh'
// })
