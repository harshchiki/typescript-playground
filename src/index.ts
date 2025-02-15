import { add } from "./type-safety";
console.log(add(5, 10)); // ✅ 15
// console.log(add(5, "10")); // ❌ Type error: Argument of type 'string' is not assignable to parameter of type 'number'



//Interfaces & Object Type Checking
import { greet } from "./interfaces-objects";
// console.log(greet({ name: "Bob" })); // ❌ Error: Property 'age' is missing
console.log(greet({ name: "Bob", age: 30})); // ✅ "Hello, Bob"


// Optional & Default Parameters
import { logMessage } from "./optional-default-params";
logMessage(); // ✅ "Default message"
logMessage("Hello TypeScript!"); // ✅ "Hello TypeScript!"


// Enums: Better Code Readability
import { handleResponse, Status } from "./enum-use";
console.log(handleResponse(Status.SUCCESS)); // ✅ "Success!"
console.log(handleResponse(Status.ERROR)); // ✅ "Error!"


// Function Overloading
import { formatInput } from "./function-overloading";
console.log(formatInput("hello")); // ✅ "HELLO"
console.log(formatInput(10)); // ✅ "10.00"
// console.log(formatInput(true)); // ❌ Error: No overload matches this call


// Generics: Type Safety & Reusability
import { identity } from "./generics";
console.log(identity<string>("Hello")); // ✅ "Hello"
console.log(identity<number>(123)); // ✅ 123


// Compile-Time Error Checking (Vs. Runtime in JS)
const user___name: string = "" + 123; // ❌ Type error (if "" +  won't have existed): Type 'number' is not assignable to type 'string'

