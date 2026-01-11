let user = { name: "Amit" };

const wm = new Map();
wm.set(user, "Software Developer");
console.log(wm.get(user)); // "Software Developer"

console.log(wm.has(user)); // true
console.log(user.name); // true

user = null; // Now GC can remove this entry

for( let[key,value] of wm)
{
    console.log(key,value)
} 
console.log(wm); // true
