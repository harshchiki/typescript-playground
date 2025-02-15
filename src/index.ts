// const greet = (name: string): string => {
//     return `Hello, ${name}!`;
// };

// console.log(greet("TypeScript"));

import { add } from "./type-safety";

console.log(add(5, 10)); // ✅ 15
// console.log(add(5, "10")); // ❌ Type error: Argument of type 'string' is not assignable to parameter of type 'number'



import { greet } from "./interfaces-objects";

// console.log(greet({ name: "Bob" })); // ❌ Error: Property 'age' is missing
console.log(greet({ name: "Bob", age: 30})); // ✅ "Hello, Bob"