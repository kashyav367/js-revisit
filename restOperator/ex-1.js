
//rest
// function openFridge(...food){
//     console.log(food) 
// }

// const food1 = "pizza";
// const food2 = "hamburger";
// const food3 = "hotdog";
// const food4 = "sushi";
// const food5 = "remen";

// openFridge(food1, food2 , food3 , food4 , food5)


//spread
// function openFridge(...food){
//     console.log(...food) 
// }

// const food1 = "pizza";
// const food2 = "hamburger";
// const food3 = "hotdog";
// const food4 = "sushi";
// const food5 = "remen";

// openFridge(food1, food2 , food3 , food4 , food5)


//spread vs rest operators

function openFridge(...food){
    console.log(...food) 
}

function getFood(...food){
    console.log(food)
}

const food1 = "pizza";
const food2 = "hamburger";
const food3 = "hotdog";
const food4 = "sushi";
const food5 = "remen";

const foods = getFood(food1, food2 , food3 , food4 , food5);
console.log(foods)
// openFridge(food1, food2 , food3 , food4 , food5)