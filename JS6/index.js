//Function Declaration: 

function functionname ( parameter1 , parameter2) {       //Function Head
       //logic
}
functionname ( ) ;

function wish (){
    return('HI!!!!');
}
var result = wish();

console.log(result);

//return keyword needs to store in a variable and after that we need to console that .

//Function without return and without parameters
function add(){
    console.log('Hi')
}
add();

// Function with params, without return.
function name(Name){
    console.log(Name);
}
name('VisRav');

// Function with params, with return.
function mul(a,b){
    return a*b;
}
console.log(mul(2,4));

//Function Expression;
var functionname = function ( parameter1 , parameter2) {       //Function Head
           //logic
}
functionname ( ) ;

//example:
var mul = function(a,b){
    return a*b;
}
console.log(mul(2,4));

//Function Constructor:
var wish = new Function("{console.log('Helo RaviRaj')}");
wish();

//IIFE
//In parenthesis we can call our function without giving function name or initialisation.
(function(){
    console.log('IIFE');
})()


//First Class Function:
//A function can be assigned as a value
var mul = function(a,b){
    return a*b;
}
console.log(mul(2,4));

//A function can be returned by another function 
function DisplayUser(){
    return function(){
        console.log('Display User');
    }
}

//A fun can be passed as an argument to another function
function b(){
    console.log('B');
}
function a(){
    console.log('A');
}
b(a);    //B

//Callback Function: where we can pass another function as an argument an directly invoke it.
function submit (para){
    para();
    console.log('submit');
}
function copy(){
    console.log('copy');
}
submit(copy);

//Closures:
function outer(){
    let a=10;
    function inner(){
        console.log(a);
    }
    inner();
}
outer();