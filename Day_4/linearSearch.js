var size =Number(prompt("Enter the Size of the Array :"))
var arr=new Array()
var isfound=false;
for(i=0;i<size;i++)
{
    arr[i]=Number(prompt("Element-",i+1))
}
var element=Number(prompt("Enter Searching Element :"))
for(i=0;i<size;i++)
{
    if(arr[i]==element)
    {
        console.log("Element Found At Index :",i)
        isfound=true;
    }
}
if(isfound==false)
{
    console.log("Element not Found ")
}