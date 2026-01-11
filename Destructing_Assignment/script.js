// without Destructing Assessment
let arr=[10,20];
// let x=arr[0]
// let y=arr[1]
// console.log(x)
// console.log(y)

// With Destructing Assignment
// let[x,y]=arr
// console.log(x)
// console.log(y)
// let myArr=[10,20,30,40,50,60]

// let [x,...y]=myArr
// console.log(x)

// console.log(y)

// In Object

let obj={
    name:"Amit",
    dname:"CS",
    salary:12324
}

// variable name must be same as Key Name :
// let n=obj.name; problem 
let {name,dname,salary}=obj
console.log(name)
console.log(dname)
console.log(salary)



// Using Rest Parameter 

let myarr=[101,6264455891,95,99,93,94]

let[rollno,number,...marks]=myarr
console.log("Roll Number :",rollno)
console.log("Moblie Number :",number)
console.log("Marks :",marks)
