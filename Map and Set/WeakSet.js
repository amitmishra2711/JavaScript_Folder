// Create some objects
let user1 = { name: "Amit" };
let user2 = { name: "Rahul" };

// Create a WeakSet
const ws = new Set();

// Add objects to WeakSet
ws.add(user1);
ws.add(user2);

// Check if object exists
console.log(ws.has(user1)); // true
console.log(ws.has(user2)); // true

// Remove reference to user1
user1 = null; // Now GC can clean this object

// We cannot iterate WeakSet (❌ not allowed)
for (let u of ws) console.log(u); // Error

console.log(ws.has(user1)); // false
console.log(ws.has(user2));
console.log("WeakSet only stores objects and is GC friendly.");
