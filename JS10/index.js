//call , apply , bind
let user = {
    name:'raj',
    age:24,
    city :'Vijayawada',
    state:'AP',
    contact:2345678,
    userDetails:function(){
        //this keyword is used to point its global object in our case name is an global object.
        console.log(this.name + " having age is "+ this.age+" stayed in "+ this.city );
    }
}
console.log(user);
user.userDetails();

let user2={
    name :'ravi',
    age:23,
    city:'vizag',
    state:'AP'
}
//if we want to to get userDetails:functioin in the same in user2 , we need to copy and paste this in all times, to avaoid thios we have call, apply, bind 
//call apply, bind are used for function borrow methods.

user.userDetails.call(user2);

let user3 = {
    name:'raju',
    age:25,
    city :'sklm',
    state:'AP',
}
const user3Details = function (company, designation){
        //this keyword is used to point its global object in our case name is an global object.
    console.log(this.name + " having age is "+ this.age+" stayed in "+ this.city + " works in " + company + " in the role of "+ designation);
}
//call : each and every argument is passed to the fun will be passed individually.
user3Details.call(user3, "Walmart","Developer");
//apply:each and every argument is passed to the fun will be passed in the form an array.
user3Details.apply(user3, ['TCS','Assitant Engineer']);
//bind: it will return a new function and this new fun you can use anytime and anywhere.
let user3Det = user3Details.bind(user3,'Infosys','Tester');
user3Det()
    
//prototype: Whenever we create an object or array or function,  our js engine return an object to our original object.
//proto: JS Engine is keeping all these methods and function in our proto.

//Everything in our js is objects.
//prototype-chaining: we will give fun.__proto__.__proto__.__proto__ = null is a chain of prototype.
user3.__proto__ = user

function Person (name,age,city)
{
    this.name=name;
    this.age=age;
    this.city=city;
}  //Parent Object 

const Person1=new Person("vijay",25,"Hyderabad") //child Object 

Person1.lastname="kumar"
console.log(Person1)

Person.prototype.state="NEW DELHI"
console.log(Person1.state)

