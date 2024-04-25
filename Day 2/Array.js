

var arr=[10,20,30,40];

// console.log(arr[0]);

// normal for loop

// for(var i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }

// Task:
// Iterate over an array using while and do while loop.

// for of loop

// for(var no of arr){
//     console.log(no);
// }

// for in loop
// for(var index in arr){
//     console.log(index);
// }


// forEach loop
// var arr=[10,20,30,40,50];

// arr.forEach((ele,index,array)=>{
//     console.log(`ele => ${ele}, index => ${index}`);
// });




// Array Methods:

var arr2=[10,20,30,40];

// remove element from last in an array
// arr2.pop();
// console.log(arr2);

// remove element from front in an array
// arr2.shift();
// console.log(arr2);

// add element at last index of an array
// arr2.push(50);
// console.log(arr2);

// add element at front of an array.
// arr2.unshift(5);
// console.log(arr2);

// Remove element from a specific index 
// eg. remove an element from index 1.
arr2.splice(1,2);
console.log(arr2);

// Add element at a specific index.
// eg. Add 60,70 at index 1.
// arr2.splice(1,2,60,70);
// console.log(arr2);
