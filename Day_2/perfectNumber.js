var num=Number(prompt("Enter a number :"))

var sum=0;
for(var i=1;i<num;i++)
{
    if(num%i==0)
    {
        sum+=i;
    }
}
if(sum==num)
{
    document.writeln(num," is Prime Number ")
}else{
        document.writeln(num," is Not  Prime Number ")

}