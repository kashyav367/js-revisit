const bollywood = {
    name : "Bajirao mastani",
    lead : "Ranveer Singh",
    introduce : function(place){
        return `${this.lead} perform in ${this.name} at ${place}`
    }
}
// console.log(bollywood.introduce("up"))


const hollywood = {
    name : "street fight",
    lead : "logan paul"
}

console.log(bollywood.introduce.call(hollywood, "Los Angeles"))
console.log(bollywood.introduce.apply(hollywood , ["los Angeles"]))
// console.log(bollywood.introduce.bind(hollywood,"los Angeles"))
const laterBind = bollywood.introduce.bind(hollywood,"los Angeles");
console.log(laterBind())