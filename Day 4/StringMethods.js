

var str="ello World!";

// charAt
var letter= str.charAt(2);
console.log(letter);

// if(letter=="H"){
//     console.log(true);
// }
// else{
//     console.log(false);
// }

// let text1 = "Hello World!";
// let text2 = text1.toUpperCase();
// console.log(text2);

// let text3 = "Hello World!";
// let text4 = text1.toLowerCase();
// console.log(text4);

let str5="Hi";
let str6="Yash";

// let str7=str5+" "+str6;
let str7=str5.concat(",",str6)
// console.log(str7);

let str8="   Hello there ";
// console.log(str8.trim()); 


// let str9=str8.replace("l","oo");
let str9=str8.replaceAll("l","oo");
console.log(str9);

let text = "Apple, Banana, Kiwi";
let part = text.slice(0,5);
console.log(part);


let index= text.indexOf('z');
console.log(index);