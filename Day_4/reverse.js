var size = Number(prompt("ENter the Size of the Array :"))
var arr = new Array()
for (i = 0; i < size; i++) {
    arr[i] = Number(prompt("Enter Element :"))
}
console.log("Orignial Array :",arr)
i=0;
j=size-1;
while(i<j)
{
    var temp=arr[i];
    arr[i]=arr[j];
    arr[j]=temp;
    i++;
    j--;
}

console.log("Reverse Array :",arr)