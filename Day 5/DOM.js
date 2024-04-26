
// console.log(document);

// console.log(document.body);

// console.log(document.body.childNodes);
// console.log(document.body.children[2].children[0]);



// Id selector
var greetEle= document.getElementById('greetMsg');
// console.log(greetEle);


// Class selector
// var listEle= document.getElementsByClassName('listItems');
// console.log(listEle[0]);

// getElementsByTagName
// var listEle2= document.getElementsByTagName('li');
// console.log(listEle2);

 // querySelector
 // Id => #<NameOfID>
 // Class => .<NameOfClass>
 // Tag => <TagName>

//  var greetEle2= document.querySelector('#greetMsg');
//  console.log(greetEle2);

//  var listEle4= document.querySelector('.listItems');
//  console.log(listEle4);

 // querySelectorAll
//  var listEle5= document.querySelectorAll('.listItems');
//  console.log(listEle5);

//  var listEle6= document.querySelectorAll('li');
//  console.log(listEle6);


// Modify text of an HTML element.

var greetEle3= document.getElementById('greetMsg2');


// innerHTML , textContent
console.log(greetEle.innerHTML);
console.log(greetEle3.textContent);

greetEle.innerHTML="<ul><li> Bye</li></ul>";
greetEle3.textContent="<ul><li> Bye<li></ul>";  