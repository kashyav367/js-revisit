// Named import (multiply function directly import)
// import { multiply } from "./utility.js";

// Function call
// const result = multiply(2,3,4);
// console.log(result)


// Rename import (multiply ko mul naam de diya)
// import { multiply as mul } from "./utility.js";

// const result = mul(2,3,4);
// console.log(result)


// Multiple named imports (mul + add)
// import { mul , add } from "./utility.js";

// const result = mul(2,3,4);
// console.log(result)


// Import everything as object (utility)
// import * as utility from "./utility.js";


// Default import (addition function aa raha hai)
// {} use nahi hota default import me
import add from "./utility.js";

// Function call
const result = add(2,3,4);

// Agar * import use karte toh:
// const result = utility.mul(2,3,4);

// Output print
console.log(result);

// Object import ke case me access:
// console.log(utility.STUDENT_COUNT);