//Assign Array elements to variables
const colors = ["red", "green", "blue", "black", "white"];
const[firstColor , secondColor , thirdColor, ...extraColor] = colors

console.log(firstColor)
console.log(secondColor)
console.log(thirdColor)
console.log(extraColor)