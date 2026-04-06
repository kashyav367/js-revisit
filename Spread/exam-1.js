//using array
// let numbers = [1,2,3,4,5]

// // let maximum = Math.max(numbers); --> galat
// let maximum = Math.max(...numbers)
// console.log(maximum)

// let numbers = [1,2,3,4,5]

// // let maximum = Math.max(numbers); --> galat
// let minimum = Math.min(...numbers)
// console.log(minimum)

//string 
// let userName = "Ankit singh"
// let letters = [...userName].join("-")
// console.log(letters)


//swallow copy
// let fruits = ["apple","mango" ,"banana"]
// let newFruits = [...fruits]
// console.log(newFruits)


//combine two arrays
let fruits = ["apple","mango" ,"banana"]
let vegetables = ["carrots", "celery" , "potatoes"]

let food = [...fruits, ...vegetables , "egg" , "milk"] // -> egg and milk append
console.log(food)