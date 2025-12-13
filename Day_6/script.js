// * 1

/* function hello(name = "Katappa"){
    return "hello " + name;
}

console.log(hello()); */

// * 2

/* function add(a = 10, b = 20){
    return a + b;
}

console.log(add());
console.log(add(100));
console.log(add(100, 200)); */

//  * 3

/* function add(a = 10, b){ // wrong
    return a + b;
}

console.log(add());
console.log(add(100));
console.log(add(100, 200)); */

// * 4

/* function add(a, b = 20){ // wrong
    return a + b;
}

console.log(add()); // NAN
console.log(add(100));  // a = 100
console.log(add(100, 200)); */


// * 5
// ? rest perameter


/* function sum(...n){ // rest perameter
    console.log(n);
}

sum(1, 2, 3, 4, 5);
sum(1);
 */

// * 5
// ~ rest perameter

//? sum(...n, x) // rest must be in a last

function sum(x=100, ...n) { // rest perameter
    console.log(x);
    console.log(n);
}

sum(undefined,1, 2, 3, 4, 5);
// sum("Deepak Bhai", 1, 2, 3);
