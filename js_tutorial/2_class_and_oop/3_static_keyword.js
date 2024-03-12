

// class IdolModel{
//     name;
//     year;

//     static height=185;

//     constructor(name, year){
//         this.name=name;
//         this.year=year;
//     }

//     static returnWeight(){
//         return 85;
//     }
// }

// const jingyu = new IdolModel('오진규', 1993);

// console.log(jingyu);
// console.log(jingyu.height);
// console.log(jingyu.returnWeight);


// console.log(IdolModel.height);
// console.log(IdolModel.returnWeight());

// console.log('-----------------');





// factory constructor

class IdolModel{
    name;
    year;

    constructor(name, year){
        this.name=name;
        this.year=year;
    }

    static fromObject(obj){
        return new IdolModel(
            obj.name,
            obj.year,
        );
    }

    static fromList(list){
        return new IdolModel(
            list[0],
            list[1]
        )
    }
}

const jingyu2 = new IdolModel('오진규', 1993);
const jingyu3 = IdolModel.fromObject({
    name: 'instance from object',
    year: 1993
});

console.log(jingyu2);
console.log(jingyu3);

const jingyu4 = IdolModel.fromList(
    [
        'instance from list',
         1993
    ]
);

console.log(jingyu4);
