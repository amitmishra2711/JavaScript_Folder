var n = parseInt(prompt("Enter size of Array "))

var a = [];

for ( var i = 0 ; i < n ;i++){
a[i] = parseInt(prompt("Enter element"));                                                                                         
} 

document.writeln(" Enterd Array is :- "+a)

var temp = [];
var k = 0;

for(var i=0 ; i<n ; i++){
    if(a[i] >= 0){
        temp[k++] = a[i];
    }
}

for(var i=0 ; i<n ; i++){
    if(a[i] < 0){
        temp[k++] = a[i];
    }
}

console.log(" Array is "+temp)