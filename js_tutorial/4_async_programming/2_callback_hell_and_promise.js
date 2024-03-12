// function waitAndRun(){
//     setTimeout(() => {
//        console.log("finish");
//     }, 2000);
// }

// waitAndRun();

// function waitAndRun2(){
//     setTimeout(() => {
//         console.log("first callback");
//         setTimeout(() => {
//             console.log("second callback");
//             setTimeout(() => {
//                 console.log("third callback");
//             }, 2000);
//         }, 2000);
//     }, 2000);
// }

// waitAndRun2();

/**
 * Promise
 */

// const timeoutPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Complete');
//     }, 2000);
// });

// timeoutPromise.then((res) => {
//     console.log('---then---');
//     console.log(res);
// });

const getPromise = (seconds) => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Complete');
    }, seconds * 1000);
});

// getPromise(3)
//     .then((res) =>{
//         console.log('---first then---');
//         console.log(res);

//         return getPromise(3);
//     }).then((res) => {
//         console.log('---second then---');
//         console.log(res);
//     })

// resolve -> then
// reject -> catch
// finally
// const getPromise = (seconds) => new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject('error');
//     }, seconds * 1000);
// });

// getPromise(3)
//     .then((res) =>{
//         console.log('---first then---');
//         console.log(res);
//     })
//     .catch((res) => {
//         console.log('---first catch---');
//         console.log(res);
//     })
//     .finally(()=>{
//         console.log('--- finally ---');
//     })

Promise.all([
    getPromise(1),
    getPromise(4),
    getPromise(1)
]).then((res) => {
  console.log(res);
});
