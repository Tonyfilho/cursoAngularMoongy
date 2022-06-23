//ES& - SPREAD OPERASTOR

function xpto (a, b){
    return a + b;
}

let data = [5, 8];

/* let result = xpto.apply(null, data);

console.log(result); */


// ES6 - spread
let result = xpto(...data);
console.log(result);



let arr1 = [1,2,3];
let arr2 = [4,5,6];



//let array = [10, 100, 'joao', arr1, 123, arr2];
let array = [10, 100, 'joao', ...arr1, 123, ...arr2];

let clone =[...array];

array.push(12345);

console.log("array :", array);
console.log("clone :", clone);