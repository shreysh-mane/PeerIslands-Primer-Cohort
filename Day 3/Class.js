

var obj={
    name:"Shreysh",
    city:"Pune",
    age:24
}


class Person{

    constructor(name,city,age){
        this.name=name;
        this.city=city;
        this.age=age;
    }

    getName() {
        return this.name;
    }


}

// var p1= new Person("Shreysh","",24);
// console.log(p1.name);
// console.log(p1.city);

// p1.name="Yash";
// console.log(p1.name);


// console.log(p1.getName());




// OOPS

// Inheritance

class Person2 extends Person{
    
    
    constructor(name,city,age,company){
        super(name,city,age);
        this.company=company;
    }

    getName() {
        return `Hello my name is ${this._name}`;
    }

}

var p2=new Person2("Yash","Pune",24,"Revature");
console.log(p2.name);
console.log(p2.getName());

