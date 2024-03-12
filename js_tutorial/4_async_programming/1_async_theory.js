

// function longWork(){
//     const now = new Date();

//     const millisecondes = now.getTime();
//     const afterTwoSecondes = millisecondes + 2 * 1000;

//     while (new Date().getTime() < afterTwoSecondes){

//     }

//     console.log('Complete');
// }

// console.log('Hello');
// longWork();
// console.log('World');



function longWork(){
    setTimeout(()=>{
        console.log('Complete')
    }, 2000);
}

console.log('Hello');
longWork(); // asynchrously running
console.log('World');