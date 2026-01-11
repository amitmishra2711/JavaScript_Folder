let usermap=new Map()
usermap.set("name1","Amit")
usermap.set(1,"ID")
usermap.set(70000,"salary")

//Iternation
for(let [key,value] of usermap)
{
    console.log(key,value);
}
console.log(usermap)

// get method
console.log(usermap.get(1))

//check key
console.log(usermap.has(1))

//Size Keyword
console.log(usermap.size)
// Delete and Clear
console.log(usermap.delete(70000))

console.log(usermap.clear())




