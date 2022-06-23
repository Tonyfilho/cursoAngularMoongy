
//ES5 - Function Constructors (classes)

function Pessoa(nome, apelido){

    this.nome = nome || 'john';
    this.apelido = apelido || 'Doe';

    this.verNome = function(){
        console.log(`Foi criada uma pessoa com o nome: ${this.nome} ${this.apelido}`);
    }
};

let joao = new Pessoa('Joao', 'Goncalves');
joao.verNome();

Pessoa.prototype.titulo = 'Sr.';
Pessoa.prototype.nomeCompleto = function(){
    console.log(`Nome Completo: ${this.titulo} ${this.nome} ${this.apelido}`);
};

joao.nomeCompleto();

let maria = new Pessoa('maria', 'silva');
maria.titulo = 'Sra.';
maria.nomeCompleto();

let jose = Object.create(joao);
jose.nome = 'Jose';
jose.apelido = 'Antunes';
jose.nomeCompleto();


