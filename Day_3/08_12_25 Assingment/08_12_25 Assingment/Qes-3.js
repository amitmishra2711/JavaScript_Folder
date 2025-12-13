var n = parseInt(prompt("Enter size of First Array "));
var a = [];
for ( var i = 0 ; i < n ;i++){
a[i] = parseInt(prompt("Enter element For First Array "));                                                                                         
} 
console.log("First Array "+a);

var m = parseInt(prompt("Enter size of Second Array "));
var b =[];
for ( var i = 0 ; i < m ;i++){
b[i] = parseInt(prompt("Enter element For Second  Array"));                                                                                         
}
console.log("Second Array "+b);


var union = [];
var k = 0;
var count = 0;

for(var i=0;i<n;i++){
   var f = false;    
    for( var j=0;j<k;j++){
     if(a[i] === union[j]){
        f = true;
        break;
     }
    }

    if(!f){
        union[k] = a[i];
        k++;
        count ++;
    }
}

for(var i=0;i<m;i++){
   var f = false;    
    for( var j=0;j<k;j++){
     if(b[i] === union[j]){
        f = true;
        break;
     }
    }

    if(!f){
        union[k] = a[i];
        k++;
        count ++;
    }
}

console.log("Element in Union Set "+count)