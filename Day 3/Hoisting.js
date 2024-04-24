


// Hoisting
console.log(a); //Undefined
var a=10;
console.log(a); // 10

abc();
function abc(){
    var b=20;
    console.log("Inside function"); // 
}


