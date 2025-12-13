var size = Number(prompt("ENter the Size of the Array :"))
var arr = new Array()
for (i = 0; i < size; i++) {
    arr[i] = Number(prompt("Enter Element :"))
}

var max=arr[0];

for(i=0;i<size;i++)
{
    if(arr[i]>max)
    {
        max=arr[i];
    }
}
console.log("Largest Element is :",max)
