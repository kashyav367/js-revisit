// Async/Await is a modern way to handle asynchronous operations in JavaScript, built on top of Promises, that makes code look and behave like synchronous code.

function output(text){
    return new Promise((reject,resolve) => {
    setTimeout(() => {
        resolve(text);
    },1000)
    })
}

async function getData(){
    try{
    let result = await output("hello world");
    console.log(results)
    }
    catch(err){
        console.log(err);
    }
}

getData();
console.log(output);