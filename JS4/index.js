//when we want to take 2 conditions then we are going to prefer if-else condition:
var a=10;
if(a === '10') 
{
    console.log(a+ ' is 10')
}
else{
    console.log(a + ' is not 10')
}

//when we want to take more than 2 conditions then we are going to prefer if-else-if condition:
var marks =28;
if( marks > 28){
    console.log("student is pass");
}else if(marks == 28){
    console.log("student is just pass");
}
else{
    console.log('student is fail')
}

//when we want to take more than 3 conditions then we are going to prefer switch-case condition:
var button = 0;
switch  (button) {
    case 1: console.log("tv is ON");
            break;
    case 2: console.log("tv is ON");
            break;
    case 3: console.log("tv is ON");
            break;
    default : console.log("Power off");
              break;
}

//without break statement , it prints all statements.

//Assessment:

//Q 4 : Take a string variable age 
//          a) if age less than 30 , print ""Adult"" , else ""Old"", use if else and ternary operator
//          b) if age less than 15 , print ""Young"" , age greater than 15 but less than 30 print ""Adult"" else ""Old"" by using if else ladder
// Q 5 : Use switch case and create Week calendar Monday - print 0 , Tuesday - print 1 and so on Sunday - print 6

//4 ans: a)
var age=10;
if(age <30) {
    console.log('Adult');
}else{
    console.log('Old');
}

var age=48;
console.log(age <30 ? 'Adult' : 'Old');

//b)
var age=56;

if(age <15){
    console.log('Young');
}else if(age>15 && age <30){
    console.log('Adult');
}else{
    console.log('Old');
}

//5 Ans:
var day = 2;
switch  (day) {
    case 0: console.log("Monday --> 0");
            break;
    case 1: console.log("Tuesday --> 1");
            break;
    case 2: console.log("Wednesday --> 2");
            break;
    case 3: console.log("Thursday --> 3");
            break;
    case 4: console.log("Friday --> 4");
            break;
    case 5: console.log("Saturday --> 5");
            break;
    case 6: console.log("Sunday --> 6");
            break;
    default : console.log("NO-DAY");
              break;
}