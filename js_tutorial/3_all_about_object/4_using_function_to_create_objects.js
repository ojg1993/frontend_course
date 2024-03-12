

function IdolModel(name, year){

    if(!new.target){
        return new IdolModel(name, year);
    }

    this.name = name;
    this.year = year;

    this.dance = function(){
        return `${this.name} is dancing.`
    }
}


const jinGyu = new IdolModel('오진규', 1993);

console.log(jinGyu.dance());


const jinGyu2 = IdolModel('Hannah', 1995);

console.log(jinGyu2.dance());


// const IdolModelArrow = (name, year) =>{  // Not a constructor
//     this.name = name;
//     this.year = year;
// }

// const jinGyu3 = new IdolModelArrow('test', 123);