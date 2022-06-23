let str1 = "ola";
let str2 = 'ola';
let str3 = `ola`; // backticks, ES6

//console.log(str2 === str3);

let a = 25;
let b = 10;
let c = 'Javascript';

const strEs5 = "A minha idade É: " + (a+b) + " E adoro " + c + " .";
console.log(strEs5);

const strEs6 = ` A minha idade é ${a+b} e adoro ${c}. `;
console.log(strEs6);

let string = "1 linha";
string     += "2 linha";

/// multiline strings
let string2 = `
    1 linha
    2 linha
    3 linha
`;
console.log(string2);