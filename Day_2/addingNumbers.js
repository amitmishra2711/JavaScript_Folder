var num=Number(prompt("Enter a Number :"))
var sum=0;
while(num!=0)
{
    var x=num%10;
    sum+=x;
//    num= parseInt(num/10);
num=Math.floor(x/10);
}
document.writeln(sum);