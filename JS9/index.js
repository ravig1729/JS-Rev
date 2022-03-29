//using curly braces..
let user = {
    name: "Viswanadh",
    age: 26,
    job: "developer",
    salary: "150000"
}

//we can access in these 2 ways.
console.log(user.name);
console.log(user["name"]);

//this keyword:
const student = {
    name: "Viswanadh",
    age: 18,
    id:234,
    studdetails: function(){
        console.log(this.name + " is " + this.age + " years old and having id no. is "+ this.id);
    }
}
student. studdetails();
//this keyword refers to the global object.
//Function inside the object is called th emethod.

//Object constructor:
let myObj = new Object();
myObj.name = 'Viswanadh';
myObj.age= 17;
myObj.city = "sklm";
myObj.state = "ap";

console.log(myObj);
const keys =Object.keys(myObj);
console.log(keys);
const values = Object.values(myObj);
console.log(values);

//Object.create()
let newObj = Object.create(myObj);
console.log(newObj);

//spread Operator:
// i am using above student and user
const usestud = {...user , ...student};
console.log(usestud);

//function constructor:
function Employee (name ,age){
    this.name = name;
    this.age =age;
}
const Employee1 = new Employee ("Ravi",21);
// const Employee2 = new Employee ("Raj");

console.log(Employee1);

// Employee1 .age = 24;
// console.log(Employee1);
// Employee.prototype.company = 'Walmart';
// console.log(Employee);