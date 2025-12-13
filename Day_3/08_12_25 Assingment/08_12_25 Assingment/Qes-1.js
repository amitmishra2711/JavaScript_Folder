
var size = parseInt (prompt("enter size of array:-"));

var arr = [];

for ( var i = 0 ; i < size ;i++){
arr[i] = parseInt(prompt("Enter element"));                                                                                         
} 

console.log("Array is ;- "+arr)
var peek =-1;

if(size === 1)
    peek = 0;
else if(arr[0] >= arr[1])
    peek = 0;
else if(arr[size-1] >= arr[size-2])
    peek = n-1;
else{

    for(var i=1; i<size -1;i++){
        if(arr[i] >= arr[i-1] && arr[i] >= arr[i+1]){
            peek = i;
            break;
        }
    }
}

if(peek !== -1)
    console.log(" Peek index is:  "+peek);
else
    console.log("No peek element is found");