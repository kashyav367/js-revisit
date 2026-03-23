//"Callback Hell is deeply nested callbacks that create unreadable and unmanageable code."

function output(text, cb) {
    setTimeout(() => {
        console.log(text);  
        cb();          
    }, 1000);
}

// Callback Hell (nested callbacks)
output("step 1" , ()=> {
    output("step 2" , ()=> {
        output("step 3" , ()=> {
        output("step " , ()=> {
            console.log("All steps done")
})
})
})
})