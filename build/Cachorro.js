"use strict";
class Cachorros {
    raca = "";
    nome = "";
    anoNascimento = 0;
    constructor(raca, nome, anoNascimento) {
        this.raca = raca;
        this.nome = nome;
        this.anoNascimento = anoNascimento;
    }
    //RAÇA
    setRaca(raca) {
        this.raca = raca;
    }
    getRaca() {
        return this.raca;
    }
    //NOME
    setNome(nome) {
        this.nome = nome;
    }
    getNome() {
        return this.nome;
    }
    //IDADE
    setIdade(idade) {
        this.anoNascimento = idade;
    }
    getIdade() {
        return this.anoNascimento;
    }
    getInformacao() {
        console.log(`Raça ${this.raca}, Nome: ${this.nome}, Idade: ${this.anoNascimento} `);
    }
}
const catchorro = new Cachorros("Pincher", "Zeus Trovoada", 1745);
catchorro.getInformacao();
