// Given array of students marks [23, 45, 67, 78, 91],  add 10 in all the elements of an array by using map and forEach function
var marks = [23, 45, 67, 78, 91];
const mmap = marks.map(x => x+10);
console.log(mmap);
const mfeach = marks.forEach((x,index) => {console.log (x+10)});

//Given array of student marks [23, 45, 67, 78, 91], find out how many students have got marks less than 65 and return the array.
var studmarks = [23, 45, 67, 78, 91];
const gstud = studmarks.filter (x => x>65);
console.log(gstud);

//Return the sum of all the marks of students present in given array [23, 45, 67, 78, 91]
var arr = [23, 45, 67, 78, 91];
var total = arr.reduce((sum,x) => sum = sum+x );
console.log(total);

//Replace ""Peter"" with ""John"" in whole string : Given String : ""Peter is a good friend of Mike. Peter is working in a IT company in Australia"".
const str = "Peter is a good friend of Mike. Peter is working in a IT company in Australia";
const res = str.replaceAll("Peter", "John");
console.log(res);

//Reverse a given string ""Hello this is me"" , result should be ""me is this Hello"".
const str1 = "Hello this is me";
const res1 = str1.split(" ").reverse( ).join(" ");
console.log(res1);

//Create an object contain name age salary as the properties, retrieve key and values in separate arrays
let myObj = new Object();
myObj.name = 'Viswanadh';
myObj.age= 17;
myObj.salary= 250000;

const keys =Object.keys(myObj);
console.log(keys);

const values = Object.values(myObj);
console.log(values);