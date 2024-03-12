

const getPromise = (seconds) => new Promise((resolve, reject) =>{
    setTimeout(() => {
        // resolve('complete');
        reject('error');
    }, seconds * 1000);
});

async function runner(){
    try{
        const res = await getPromise(1);
        console.log(res);
        const res2 = await getPromise(2);
        console.log(res2);
        const res3 = await getPromise(1);
        console.log(res3);
    }catch(e){
        console.log(e);
    }finally{
        console.log('---finally---')
    }

}

runner();

console.log('finish');