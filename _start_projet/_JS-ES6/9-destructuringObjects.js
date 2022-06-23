
let obj = {
    name: 'Joao',
    lastName: 'Goncalves',
    address: {
        city: 'lisbon',
    },
};

let {name, lastName:apelido, address:{city:cidade}} = obj;

console.log(name);
console.log(apelido);
console.log(obj.address.city);
console.log(cidade);
