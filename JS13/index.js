// asynchronous Function:

function call(){
    setTimeout(() =>{
        console.log("Hi");
    },2000);
    setTimeout(() =>{
        console.log("Hello");
    },1000);
    setTimeout(() =>{
        console.log("Hru");
    },3000);

}
call();

//Callback Hell:
function call(){
    setTimeout(() =>{
        console.log("Hi");
        setTimeout(() =>{
            console.log("Hello");
            setTimeout(() =>{
                console.log("Hru");
            },3000);
        },1000);
    },2000);
}
call();


//Promises:
function printAlpha (num) {
    return new Promise ((resolve, reject) => {
      if(num%2 == 0){
          console.log('Condition satisfied');
      }else{
          console.log('condition unsatisfied');
      }
    })
}
printAlpha (23).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(reject);
})

//promise chaining:
const printvar =  ((time,value) => {
   return new Promise ((resolve, reject) =>{
       setTimeout(()=>{
           console.log(value);
           resolve();
       },time);
   })
})
printvar(6000,'A').then(()=>{
    printvar(5000,'E')
}).then(() =>{
    printvar(3000,'I')
}).then(() =>{
    printvar(2000,'O')
}).then(() =>{
    printvar(1000,'U')
})

//Async-Await:
const printvar1 =  ((time,value) => {
    return new Promise ((resolve, reject) =>{
        setTimeout(()=>{
            console.log(value);
            resolve();
        },time);
    })
 })
async function print(){
    await printvar1(6000,'A');
    await printvar1(6000,'E');
    await printvar1(6000,'I');
    await printvar1(6000,'O');
    await printvar1(6000,'U');
}
print();
