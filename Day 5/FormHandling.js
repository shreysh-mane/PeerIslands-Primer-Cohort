

var formEle=document.getElementById('form');
// console.log(formEle);

var user={};

function getValues(){
    event.preventDefault();
   
    var userEmailEle=document.getElementById('useremail');
    var userpassEle=document.getElementById('userpass');

    var email= userEmailEle.value;
    var pass= userpassEle.value;

    user.email=email;
    user.pass=pass;

    console.log(user);

}





formEle.addEventListener('submit',getValues);