var arr=[1,2,3,4,5,6];

//index:
const val4 = arr.indexOf(4);
console.log(val4);

//Map:
const result =arr.map( x => x*2);
console.log(result);

//Filter:
const result1 = arr.filter(x=> x>3);
console.log(result1);

//Reduce:
const total = arr.reduce((sum,x) => sum=sum+x,0);
console.log(total);
//for max :
const max = arr.reduce((accum, curr) => {
    if(curr > accum){
        accum =curr ;
    }
    return accum;
},0);
console.log(max);

//Push :
arr.push(7);
console.log(arr);

//pop:
arr.pop();
console.log(arr);

//shift:
arr.shift();
console.log(arr);

//unshift:
arr.unshift(1);
console.log(arr);

//Some:
const val1 = arr.some(x => x%2 == 0);
console.log(val1);

//every:
const val2 = arr.every (x => x%2 == 0);
console.log(val2);

//Slice: starting index 1, ending index 3:
const val3 = arr.slice(1,3);
console.log(val3);