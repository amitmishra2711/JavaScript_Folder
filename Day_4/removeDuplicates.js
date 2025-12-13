function removeDuplicates(arr) {
    if (arr.length === 0) return [];

    let uniqueIndex = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[uniqueIndex]) {
            uniqueIndex++;
            arr[uniqueIndex] = arr[i];
        }
    }

    return arr.slice(0, uniqueIndex + 1);
}

var size = Number(prompt("ENter the Size of the Array :"))
var arr = new Array()
for (i = 0; i < size; i++) {
    arr[i] = Number(prompt("Enter Element :"))
}

console.log(removeDuplicates(arr));
