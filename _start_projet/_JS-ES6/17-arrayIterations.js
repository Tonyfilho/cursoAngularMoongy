
/* let arr  = [1,2,3,];

let arr2 = arr.push(6);

console.log(arr2); */

// Metodos de Iteração em Arrays
console.log('-------------- map -----------------');
let arr = [1,2,3,4,];
let quadrados = arr.map( num => num ** 2);
console.log(quadrados);
console.log(arr);

console.log('-------------- filter -----------------');
let nomes = ['joao', 'Manuel', 'Eugenia', 'Ana'];
let nomeMais4Letras = nomes.filter( nomes => nomes.length > 4);
console.log(nomeMais4Letras);
//console.log(nomes);

console.log('-------------- Reduce -----------------');
const numeros = [1,2,3,4,5];
//const R = (accumulator, currentValue) => accumulator + currentValue;
//let soma = numeros.reduce(R, 100);
let soma = numeros.reduce((accumulator, currentValue) => accumulator + currentValue, 100);
console.log('Soma: ',soma)


console.log('-------------- some -----------------');
const numsSome = [11, 65, 32, 56, 87];
let numeroPar = numsSome.some( num => num % 2 === 0 );
console.log(numeroPar);

console.log('-------------- every -----------------');
const numsEvery = [11, 65, 32, 56, 87];
let numerosMaiores20 = numsEvery.every( num => num > 20 );
console.log(numerosMaiores20);


console.log('-------------- find -----------------');
const numsFind = [21, 65, 32, 56, 87];
let found = numsFind.find( num => num > 40);
console.log(found);

////// FOr OF /////
console.log('-------------- Iteracção com FOR / OF -----------------');
const produtos = ['ecra', 'micro', 'teclado'];
for (const produto of produtos) {
    console.log("Produto: ", produto);
}


//// MINI EXERCICIO
const lista = [0,0,2,1,1,0,2,1,0,1,1,1,2,0,1];

// nao usart o sort()
const ordenada = [
    ...lista.filter( num => num == 0),
    ...lista.filter( num => num == 1),
    ...lista.filter( num => num == 2),
];
/* let ordenada = lista.sort();
console.log(ordenada);
console.log(lista); */

console.log(ordenada);
console.log(lista);
