const person1 = {
    firstName :  "Spongebob",
    lastName : "SquarePants",
    age : 34,
    job : "Fry Cook"
}

const person2 = {
    firstName :  "Patrick",
    lastName : "Star",
    age : 34,
    
}

const {firstName, lastName , age , job = "unemployed"} = person2

console.log(firstName)
console.log(lastName)
console.log(age)
console.log(job)
