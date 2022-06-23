//ES5

var libes5 = (function(){

    var nome = 'Joao';

    function dizerOla(){
        return `Ola ${nome} bem vindo.`;
    }

    return {
        dizerOla,
    }


})();