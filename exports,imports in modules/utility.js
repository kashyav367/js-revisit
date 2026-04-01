// ❌ Commented export → ye function bahar use nahi hoga
// export function multiply(a,b,c){
//     return a*b*c
// }

// Normal function (private → sirf isi file me use hoga)
function multiply(a,b,c){
    return a*b*c
}


// ❌ Ye bhi commented hai → koi use nahi
// function addition(a,b,c){
//     return a + b + c 
// }


// ❌ Ye export block off hai → multiply/add export nahi ho rahe
// export{
//     multiply,
//     add
// }


// ✅ Named export (direct {} se import hoga)
export const STUDENT_COUNT = 23;


// ❌ Rename export off hai
// export{
//     multiply as mul,
//     addition as add
// }


// ✅ Default export (main function)
// {} nahi lagta import me
export default function addition(a,b,c){
    return a + b + c 
}