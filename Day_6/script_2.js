// ! Callbacks

// * 1

// function calculater(callback, a,b){
//     return callback(a, b);
// }

// function add(x, y){
//     return x + y;
// }

// function mult(y, z){
//     return y * z;
// }

// console.log(calculater(add, 5, 3));
// console.log(calculater(mult, 5, 3));



// * 2

/* function done(){
    console.log("hello");
}

setTimeout(done(), 1000); */

/* setTimeout(function(){
    console.log("js is going on");
}, 1000); */

/* setTimeout(() => {
    console.log("js is going on");
}, 1000);

console.log("hello"); */

function register(callback) {
    setTimeout(() => {
        console.log("User Registered");
        callback();
    }, 1000);
}

function login(callback) {
    setTimeout(() => {
        console.log("User Logged In");
        callback();
    }, 1000);
}

function getData(callback) {
    setTimeout(() => {
        console.log("Data Retrieved");
        callback();
    }, 1000);
}

function display(callback) {
    setTimeout(() => {
        console.log("Display Data");
        callback();
    }, 1000);
}

// Callback Hell
register(() => {
    login(() => {
        getData(() => {
            display(() => {
                console.log("Process Completed");
            });
        });
    });
});
