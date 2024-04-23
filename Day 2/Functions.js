
// Truthy and falsy value

if(null){
    console.log(10);
}



// Functions

// Function Declaration
// function greet(name) {
//     console.log("Hello, " + name + "!");
// }
// greet("John"); // Outputs "Hello, John!"
  

// Function Expression/ Anonymous function

// var greet = function (name) {
//     console.log("Hello, " + name + "!");
// }
// greet("John"); 


// Arrow Function

// var greet =(name) => console.log("Hello, " + name + "!");

// greet("John"); 

// Default Variables:
// function greet(name="shreysh") {
//     console.log("Hello, " + name + "!");
// }
// greet(); 
// greet("John"); 



// Rest and Spread

// function sum(...num){

//     var numSum=0;
//     for(var i=0;i<num.length;i++){
//         numSum+=num[i];
//     }
//     return numSum;
// }

// console.log(sum(10,20,30));
// console.log(sum(10,20,30,40));
// console.log(sum(10,20));


function greet(greeting, name) {
    console.log(`${greeting} ${name}!`);

    var input= prompt("Enter temperature");
    console.log(input);

    if(){
        
    }
  }
const args = ["Hello", "John"];
greet(...args); 
  

