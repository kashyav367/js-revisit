// function sum (...numbers){
//     let result = 0;
//     for(let number of numbers){
//         result += number;
//     }
//     return result
// }

// const total = sum(1,2,3)
// console.log(`Your total is $${total}`)

function getAverage (...numbers){
    let result = 0;
    for(let number of numbers){
        result += number;
    }
    return result/numbers.length
}

const total = getAverage(30,40,50,60,70)
console.log(total)

