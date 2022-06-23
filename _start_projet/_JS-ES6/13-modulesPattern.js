let texto = 'Fora da minha IIFE';

//IIFE - Imediate Invoked Function Expression
(function(){
    let texto = 'Dentro da minha IIFE';
    console.log(texto);
})();
console.log(texto);

// MOdule ES5

let xpto = (function(){

    let nome = 'Joao';
    let apelido = 'Silva';

    let nomeCompleto = () => `Olá ${nome} ${apelido}.`;
    
    let outroNome = (function (){
        return {
            nome: `Olá ${nome} ${apelido}.`,
        }
    })();

    return {
        nomeCompleto, //shorthand proterties ES9
        outroNome,
    }

})();


console.log(xpto.nomeCompleto());
console.log(xpto);