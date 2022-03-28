let str='Ravi Raj Kumar';

//Length
let res =  str.length;
console.log(res);

//charAt
let res1 =  str.charAt(7);
console.log(res1);

//indexOf
let res2 = str.indexOf('K');
console.log(res2);

//split:
// let res3 = str.split("");
// console.log(res3);

// //reverse
// let res4 = res3.reverse();
// console.log(res4);

// //join
// let res5 = res4.join("");
// console.log(res3);

let res3 = str.split("").reverse().join("");
console.log(res3);

//trim:
let str1 = "     Ravi Raj Kumar        ";
console.log(str1);
let res4 = str1.trim();
console.log(res4);

//slice:
let str2 = ["hi", "hello", "venkata", "how", "are","you"];
const res5 = str2.slice(1,3);
console.log(res5);
const res6 = str.slice(0,-2);
console.log(res6);

//splice:
const res7 = str2.splice(1,2, "venkata");
console.log(res7);
console.log(str2);

//concat:
let str3 = 'viswanadh'
let res8 = str3.concat(" ", str);
console.log(res8);

//replace:
let res9 = str.replace("Ravi", "Viswanadh");
console.log(res9);

//replaceAll:
//replace all the occurrences.

