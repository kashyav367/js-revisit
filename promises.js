// A Promise is an object that represents the result of an asynchronous operation (something that will complete in the future).


//Structure of Promise
// let promise = new Promise((resolve, reject) => {
//     // async work

//     let success = true;

//     if (success) {
//         resolve("Work done");   // success
//     } else {
//         reject("Error occurred"); // failure
//     }
// });

function output(text){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(text)
        },1000)
    })
}

output("hello world").then((text) => {
    console.log(text)
}).catch((err)=> {
    console.log(err)
})

console.log(output);