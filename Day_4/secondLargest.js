var size = Number(prompt("ENter the Size of the Array :"))
var arr = new Array()
for (i = 0; i < size; i++) {
    arr[i] = Number(prompt("Enter Element :"))
}

var x=arr.sort((a,b)=>b-a)
console.log("Second Largest Element is :",x[1])