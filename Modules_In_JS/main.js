import { pi, add, multiply } from "./script.js";
import  { multiply as mul } from "./script.js";
import s from "./script.js"; //dont need to Write Same Name

console.log("PI Value:", pi);
console.log("Add:", add(10, 5));
console.log("Multiply:", multiply(3, 2));
console.log("Multiply Alias:", mul(6, 2));
console.log("Subtract (Default):", s(20, 4));
