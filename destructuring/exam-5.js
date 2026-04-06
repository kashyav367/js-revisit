//DESTRUCTURE IN FUNCTION PARAMETERS
function displayName({firstName , lastName , age , job = "unemployed"}){
    console.log(`name : ${firstName} ${lastName}`),
    console.log(`age : ${age}`),
    console.log(`job : ${job}` )
}

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

displayName(person2)