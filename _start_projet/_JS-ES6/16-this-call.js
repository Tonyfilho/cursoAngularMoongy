
let pessoa = {
    nome: 'Joao',
    dizerOla: function(){
        return this.nome;
    }
}

let outraPessoa = {
    nome: 'José',
}


//console.log(pessoa.dizerOla())
console.log(pessoa.dizerOla.call(outraPessoa));