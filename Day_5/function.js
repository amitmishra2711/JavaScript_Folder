var x=Number(prompt("Enter a the Value of A :"))
// var y=Number(prompt("Enter a the Value of B :"))

// function add(a,b)
// {
//     return a+b;
// }
// document.writeln(add(x,y))

// var x=prompt("Enter a the Value of A :")

// var change=(z)=>z.toUpperCase();

// console.log(change(x))

var check=(z)=>{
    var sum=0;
    for(i=1;i<z;i++)
    {
        if(z%i==0)
        {
            sum+=i;
        }
    }
    if(sum==z)
    {
        console.log("Perfect Number")
    }
    else{
        console.log(" Not Perfect Number")
    }
}
check(x);
// console.log(check(x));