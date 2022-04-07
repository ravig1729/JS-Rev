//Let, const
const func = () =>{
    for(var i=1;i<5;i++){
        console.log(i);
    }
    console.log(i);
}
func();

//for in and for of
const cars = ["BMW", "AUDI","FERRARI","JAGUAR"];

for(const N in cars){
    console.log(N);
}

for(const N of cars){
    console.log(N);
}

//Map
const myMap = new Map();
console.log(myMap);
myMap.set("id","1");
myMap.set("name","Ravi");
console.log(myMap);
console.log(myMap.get("id"));
console.log(myMap.size);
console.log(myMap.has("balu"));
console.log(myMap.delete("id"));
console.log(myMap.clear);

//Set
const mySet = new Set;
console.log(mySet);
mySet.add("Student");
mySet.add(true);
console.log(mySet);
console.log(mySet.has("name"));
console.log(mySet.size);
console.log(mySet.delete("Student"));
console.log(mySet.clear);

//Default Parameters:
function add(a, b=10){
    console.log(a+b);
}
add(5);