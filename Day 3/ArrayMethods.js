
var obj={
    name:"Shreysh",
    city:"Pune",
    company:"Revature",
    
    getName:function(){
        return `Hi my name is ${this.name}`;
    }
}

// console.log(obj.city);

// var str= obj.getName();
// console.log(str);

// obj.age=24;
// console.log(obj.age);

// delete obj.name;
// console.log(obj);


// Create 3 student objects with properties name, age,city.
// add those 3 objects in an array named students
// Iterate over that array and print the name and city stored in each object.





// Filter


// var array=[1,2,3,4,5];

// var evenNumArray= array.filter((num,ind,array)=>{
//     return num%2 === 0;
// });

// var oddNumArray= array.filter((num,ind,array)=>{
//     return num%2 !== 0;
// });

// console.log(evenNumArray);
// console.log(array);


// Map

// var modifiedArray= array.map((num,ind,array)=>{
//     return num*2;
// });

// console.log(modifiedArray);
// console.log(array);

// Reduce

var array=[1,2,3,4,5];
var sumArray= array.reduce((acc,num,index,array)=>{
    console.log(`acc: ${acc}, num:${num}, index: ${index}`);

    return acc+num;
});

console.log(sumArray);