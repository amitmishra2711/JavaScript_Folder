function generateSubarrays(arr) {
    let n = arr.length;

    for (let start = 0; start < n; start++) {
        let subarray = [];

        for (let end = start; end < n; end++) {
            subarray.push(arr[end]);   
           console.log([...subarray]);
        }
    }
}

var size = Number(prompt("ENter the Size of the Array :"))
var arr = new Array()
for (i = 0; i < size; i++) {
    arr[i] = Number(prompt("Enter Element :"))
}

generateSubarrays(arr);

