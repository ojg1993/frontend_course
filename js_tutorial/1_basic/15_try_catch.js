


// js: try-catch-fianlly  | python: try-except-fianlly
function runner() {
    try {
        console.log('hello');
        // throw new Error('this is an error');
    }catch(e){
        console.log('catch');
        console.log(e);
    }finally{
        console.log('fianlly')
    }
}

runner();