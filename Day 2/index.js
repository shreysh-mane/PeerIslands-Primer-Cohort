

// // JS variable declaration
// // var, let, const

// var a=10;
// // declaration and assignment
// // var a;
// // a=10;

// let b=20;
// const c=20;

// var a=30;

// var bol=true;

// var arr=[10,20,30,"A",{
//     name:"Shreysh",
//     city:"Pune"
// }];

// console.log(arr);

// var obj={
//     name:"Shreysh",
//     city:"Pune"
// }



// console.log(a);
// console.log(b);
// console.log(c);


// // String
// var str1="string";
// var str1='string';



// // template literal
// var str3= `string`;
// console.log(str3);

// var price=500;
// // var str4= 'Item price is ' + price + 'for your order';
// var str4= `Item price is ${price} for your order`;
// console.log(str4);


// // string inticialization
// var str5= new String("HI")
// console.log(str5);


// // Undefined;

// var undef;
// console.log(undef);
// undef=10;
// console.log(undef);


// // Null
// var obj1={
//     name:"Yash"
// }
// console.log(obj1);
// obj1=null;
// console.log(obj1);


// Type coresion

// console.log(2+2);      // 4
// console.log( 2 + "2");  // 22
// console.log(2-2);      // 0
// console.log("2" - 2);  // 0
// console.log(true + true);  // 2
// console.log(false + true);  // 1
// console.log("A" + 3);    // A3
// console.log("A" - 3);    // NaN



// User Strict

// "use strict";
// function f1(a,b,a){

//     // var a;
//     // a=10;
//     console.log(a);
// }
// f1(10,20,30);


// Scopes


// console.log(globalVariable);
function greet() {
   
    if(true){

        var globalVariable = "I'm a global variable";
        let a=10;

        console.log(globalVariable); 
        console.log(a);

    }
    console.log(globalVariable);
    console.log(a);

}
greet(); 
console.log(globalVariable);
console.log(a);




