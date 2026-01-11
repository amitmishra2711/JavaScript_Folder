/*  setTimeout(()=>{
    console.log("Set Timeout is Running-1")
},5000)
var x=45;
console.log(x);
console.log(y);
function loop()
{
    var i=0;
    while(i<=10)
    {
        console.log("Value is :",i)
        i++;
          setTimeout(()=>{

            for(i=0;i<10;i++){
    console.log("Set Timeout is Running",i)
}
},0)  
    }
}
var y=23;
setTimeout(()=>{
    console.log("Set Timeout is Running")
},0)

/* function forLoop()
{
    for(var i=0;i<10;i++)
    {
        console.log(i)
          setTimeout(()=>{
    console.log("Set Timeout is Running")
},0) 
    }
   
}
 */
// loop(); 
// forLoop(); 







/* setTimeout(()=>{
    for(i=0;i<10;i++)
    {
        console.log(i)
    }
},2)
loop();
function loop()
{
    var i=0;
    while(i<=2)
    {
        console.log("Value is :",i)
        i++;
         setTimeout(()=>{

            for(y=0;y<5;y++){
    console.log("Set Timeout is Running")
}
},2000)
    }
} */



//Multiple setTimeout Web APIS

    /* console.log("Start")

    setTimeout(()=>{
        console.log("First Time out")
    },3000)

    setTimeout(()=>{
        console.log("Second Time out")
    },2000)

    setTimeout(()=>{
        console.log("Third Time out")
    },2998)


    console.log("End") */
    


    //Nested Web APIS


 /*    console.log("Start")
setTimeout(()=>{
        console.log("Third Time out")
    },7000)

    
    setTimeout(()=>{
        console.log("First Time out")
        setTimeout(()=>{
        console.log("First Point one Time out")
    },1995)
    },5000) */

    /* setTimeout(()=>{
        console.log("Second Time out")
        setTimeout(()=>{
        console.log("Second.first Time out")
    },1000)
    },2000) */
    // console.log("End") 




// Async Case in Internal Working

/* const doSomething = () => Promise.resolve('Something')


async function myfunc() {
  console.log('In the function!')
  const res = await doSomething()
  console.log(res)
}

console.log('Before function!')
myfunc();
console.log('After function!') */
 


console.log("HELLO Everyone")
setTimeout(()=>{
    console.log("Set Timeout")
},0)
const myPromise = new Promise((resolve, reject) => {
  let marks = 35;

  if (marks >= 40) {
    resolve("Passed the exam! 🎉");
  } else {
    reject("Failed the exam! ❌");
  }
});

myPromise
  .then(result => console.log(result))
  .catch(error => console.log(error));
  

  function hy()
  {
    console.log("Hyeeeeee")
  }
  hy();
console.log("Byee EVERYONE")
