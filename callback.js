// A function passed as an argument to another function is called callback functions.

function output(text, cb) {
    setTimeout(() => {
        cb(text);  //  delay ke baad callback call
    }, 1000);
}

output("hello world", (text) => {
    console.log(text);  // prints after 1 sec
});

console.log(output);
