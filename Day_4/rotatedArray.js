var size = Number(prompt("Enter the Size of the Array :"))
var arr = new Array()
for (i = 0; i < size; i++) {
    arr[i] = Number(prompt("Enter Element :"))
}
var rotate=Number(prompt('Enter How many do you want to Roated  :'))
rotate = rotate%size;

for(i=0;i<rotate;i++)
{
    var x=arr.pop();
    arr.unshift(x);
}
console.log(arr)