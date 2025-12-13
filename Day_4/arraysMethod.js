//Push
var arr = [1, 2, 3];
arr.push(4);

console.log(arr); // [1, 2, 3, 4]


//Pop
var arr = [10, 20, 30];
arr.pop();

console.log(arr); // [10, 20]

//Unshift
var arr = [2, 3];
arr.unshift(1);

console.log(arr); // [1, 2, 3]

//Shift
var arr = [1, 2, 3];
arr.shift();

console.log(arr); // [2, 3]

//map()
var nums = [1, 2, 3, 4];

var square = nums.map(n => n * n);

console.log(square); // [1, 4, 9, 16]

//filter()
var nums = [10, 25, 30, 15];

var result = nums.filter(n => n > 20);

console.log(result); // [25, 30]

//reduce
var arr = [1, 2, 3, 4];

var sum = arr.reduce((a, b) => a + b, 0);

console.log(sum); // 10

//find
var arr = [5, 12, 8, 130];

var ans = arr.find(x => x > 10);

console.log(ans); // 12

// findIndex
var arr = [5, 12, 8, 130];

console.log(arr.findIndex(x => x > 10)); // 1

//includes
var arr = [10, 20, 30];

console.log(arr.includes(20)); // true
console.log(arr.includes(50)); // false

//indexOf
var arr = [100, 200, 300];

console.log(arr.indexOf(200)); // 1

//slice
var arr = [1, 2, 3, 4, 5];

var newArr = arr.slice(1, 4);

console.log(newArr); // [2, 3, 4]

//splice
var arr = [1, 2, 3, 4];

arr.splice(1, 2);   // remove 2 elements from index 1

console.log(arr); // [1, 4]

//join
var arr = ["A", "B", "C"];

console.log(arr.join("-")); // "A-B-C"


//reverse()
var arr = [1, 2, 3];

arr.reverse();

console.log(arr); // [3, 2, 1]

//concat()
var a = [1, 2];
var b = [3, 4];

var c = a.concat(b);

console.log(c); // [1, 2, 3, 4]




// Print Alternates.
// 2.Linear Search
// 3.Largest element
// 4.Second Largest element
// 5.Remove Duplicate from Sorted
// 6.Generate All Subarrays
// 7.Reverse an array
// 8.Rotated an array