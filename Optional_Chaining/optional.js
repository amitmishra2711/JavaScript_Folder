/* const user = { profile: { name: "Amit" } };

const student={

} 
console.log(user.profile.name);   // "Amit"
console.log(user.address?.city);   // undefined (no error)
console.log(user.profile.name)

console.log(student.name)
student.name="Amit"
console.log(student.name)
 */


let obj={
    greet:function()
    {
        return "Hello"
    }
}
console.log(obj.greet())
// console.log(obj.hy())

// console.log(obj.greet?.())
var x=obj.hy?.();
if(x==undefined)
{
    console.log("Hye Method is not present")
}
// console.log(obj.hy?.())
