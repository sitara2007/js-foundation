// create an array
let arr = [1, 2, 3, 2];

// create a string
let str = "hello";


// 1. print all elements of array
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]); // print each element
}


// 2. find sum of array
let sum = 0; // start with 0

for (let i = 0; i < arr.length; i++) {
    sum += arr[i]; // add each number
}

console.log("Sum:", sum); // print total sum


// 3. reverse the string
let reversed = ""; // empty string

for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i]; // add characters from end
}

console.log("Reverse:", reversed); // print reversed string
