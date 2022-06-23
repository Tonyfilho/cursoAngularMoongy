
const obj = {
    formacao: 'Javascript Next',
    formador: 'Joao',
    empresa: 'Seg Social',
    ano: 2020,
};

console.log('------- Object.entries() -------');
console.log(Object.entries(obj));

console.log("------- Object.keys() -------");
console.log(Object.keys(obj));

console.log("------- Object.values() -------");
console.log(Object.values(obj));


//// Clone de Objectos em JS
const obj = {
    formacao: 'Javascript Next',
    formador: 'Joao',
    empresa: 'Seg Social',
    ano: 2020,
};


let newObj = Object.assign(obj);

let newObj1 = {
    ...obj, 
    outra: 'proriedade',
};  //ES9

let newObj2 = Object.assign({} , obj);
//console.log(newObj2);

let newObj3 = Object.assign({} , obj, {empresa:'Inst. Inf.'});

let newObj4 = Object.assign({} , obj, {
    empresa:'Inst. Inf. Seg Social',
    cidade: 'Lisboa', 
});

console.log(newObj4);
console.log(obj);
console.log(newObj1);