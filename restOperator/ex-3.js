//combine string 

function combineStrings(...string){
    return string.join(" ")
}


const fullName = combineStrings("Mr." , "Spongebob" , "SquarePants" , "III")
console.log(fullName)