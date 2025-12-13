var n = parseInt(prompt("Enter size of Array "))

var a = [];

for ( var i = 0 ; i < n ;i++){
a[i] = parseInt(prompt("Enter element"));                                                                                         
} 

document.writeln(" Enterd Array is :- "+a)

var temp = a[0];

for(var i=0 ; i<n ; i++){

    a[i] = a[i+1]
}

a[n-1] = temp;

console.log(" After Cyclic By One Array Is "+a)

