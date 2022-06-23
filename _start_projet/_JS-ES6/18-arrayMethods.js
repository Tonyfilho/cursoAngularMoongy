
console.log("------- Array.isArray() -------");
//const arr = [1,2,3];
const arr = undefined;
console.log(Array.isArray(arr));



console.log("------- Array.from() -------");
let str = "12345";
let arr2 = Array.from(str, val => val *2);
console.log(arr2);



console.log("------- Array.of() -------");
//const ar3 = new Array(2);
const arr4 = Array.of("ola mundo",2,'joao', [1,2,3]);
console.log(arr4);



console.log("------- Array.fill() -------");
let arr5 = [1,2,3,4];
//arr5.fill(5);
arr5.fill(10, 1, 3);
console.log(arr5);



console.log("------- Array.includes() -------");
const arr6 = [5,6,7];
console.log(arr6.includes(6));