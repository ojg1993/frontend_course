

/**
 * Object
 *
 * 1. when defined with " const ", object is immutable.
 * 2. properties or methods inside of the object are mutable.
 */

let jinGyu = {
    name: "오진규",
    group: "Best",
    sing: function(){
        return `${this.name} is singing.`;
    }
}

console.log(jinGyu);
console.log(jinGyu.name);
console.log(jinGyu['name']);
console.log(jinGyu.sing());


const nameKey = 'name';
const nameVal = 'Jingyu Oh';

const groupKey = 'group';
const groupVal = 'best';


const jinGyu2 = {
    [nameKey]: nameVal,
    [groupKey]: groupVal
}

console.log(jinGyu2);

jinGyu2.name = 'Hannah Seal';
console.log(jinGyu2);

jinGyu2['name'] = 'Jingyu Oh';
console.log(jinGyu2);

jinGyu2.KoreanName = '오진규';
jinGyu2['wife name'] = 'Hannah Seal';

console.log(jinGyu2);


console.log(Object.keys(jinGyu));
console.log(Object.keys(jinGyu2));
console.log(Object.values(jinGyu2));