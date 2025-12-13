var n = parseInt(prompt("Enter size of Array "));

var a = [];

for ( var i = 0 ; i < n ;i++){
a[i] = parseInt(prompt("Enter element"));                                                                                         
} 

console.log(" Enterd Array is : "+a)

var k = parseInt(prompt(" Enter Target Sum is "));

console.log(" Targeted  sum k = "+k);

var count = 0;

for( var i = 0 ; i < n ; i++){
    for( var j = i+1; j<n; j++){
       if( a[i]+a[j] === k)
        count++;
    }
}

console.log("Number of Pairs "+count);