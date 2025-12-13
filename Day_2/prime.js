var num=Number(prompt("ENter a Number :"))
var count=0;
for(var i=2;i<num;i++)
{
    if(num%i==0)
    {
        count++;
    }
}
if(count==0)
{
console.log(num," is Prime Number")
}else{
    console.log(num,"Not Prime Number");
}