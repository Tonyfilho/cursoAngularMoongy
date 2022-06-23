// ES6 - classes

class Pessoa {

    //#xpto = 'privadas'; // proposal

    constructor(nome = 'John', apelido='Doe'){
        this.nome = nome;
        this.apelido = apelido;

        this._titulo = 'Sr.';
    };

    set titulo(novoTitulo){
        this._titulo = novoTitulo;
    };

    
    get titulo(){
        return this._titulo;
    }


    verNome(){
        console.log(`NOme: ${this.nome} ${this.apelido}`);
    };

};

class Developer extends Pessoa{
    constructor(nome, apelido, linguagem = 'JS'){
        super(nome, apelido);
        this.linguagem = linguagem;
    };

    programa(){
        console.log(`O ${this.nome} programa em ${this.linguagem}`)
    }
}



let joao = new Pessoa('Joao', 'Goncalves');
joao.verNome();
joao.titulo = 'xpto';
console.log(joao.titulo);

let jose = new Developer();
jose.programa();




//console.log(typeof Pessoa);