//"Promise.all() executes multiple promises in parallel and resolves when all succeed, but rejects immediately if any promise fails."

// let p1 = new Promise((resolve,reject) => {
//     setTimeout(()=> {
//     resolve("first")
//     },1000)
// })

// let p2 = new Promise((resolve,reject) => {
//     setTimeout(()=> {
//     resolve("second")
//     },2000)
// })

// let p3 = new Promise((resolve,reject) => {
//     setTimeout(()=> {
//     resolve("third")
//     },1000)
// })


// Promise.all([p1,p2,p3]).then((results) => {
//     console.log(results);
// }).catch((err) => {
//     console.log(err)
// })

//-------
// Promise.race()

// Returns the result of the first promise that settles (either success OR failure)

// let p1 = new Promise(resolve => setTimeout(() => resolve("First"), 2000));
// let p2 = new Promise(resolve => setTimeout(() => resolve("Second"), 1000));

// Promise.race([p1, p2])
//     .then(res => console.log(res)); // "Second"

//------

//  Promise.allSettled()

//  Waits for all promises to finish (success or failure)

// Example
// let p1 = Promise.resolve("Success");
// let p2 = Promise.reject("Error");

// Promise.allSettled([p1, p2])
//     .then(results => console.log(results));



//Promise.any()

//  Returns the first fulfilled (success) promise

// let p1 = Promise.reject("Fail 1");
// let p2 = new Promise(resolve => setTimeout(() => resolve("Success"), 1000));
// let p3 = Promise.reject("Fail 2");

// Promise.any([p1, p2, p3])
//     .then(res => console.log(res)); // "Success"
