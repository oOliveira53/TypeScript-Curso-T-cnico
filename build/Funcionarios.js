"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Empresa {
    cpnj = 0;
    cep = 0;
    funcionario;
    tomarCafe = false;
    constructor(cnpj, cep, funcionario, tomarCafe) {
        this.cpnj = cnpj;
        this.cep = cep;
        this.funcionario = funcionario;
        this.tomarCafe = tomarCafe;
    }
}
exports.default = Empresa;
class Pessoa {
    nome = "";
    idade = 18;
    genero = "";
    formacao = "";
    // private identificacao:Funcionario;
    constructor(n, idade, genero, formacao) {
        this.nome = n;
        this.idade = idade;
        this.genero = genero;
        this.formacao = formacao;
        // this.identificacao= identificacao;
    }
    //FUNÇÕES GET's
    getNome() {
        return this.nome;
    }
    getIdade() {
        return this.idade;
    }
    getGenero() {
        return this.genero;
    }
    getFormacao() {
        return this.formacao;
    }
    // public getIdentificacao() : Funcionario {
    //     return this.identificacao
    // }
    //FUNÇÕES SET's
    setNome(nome) {
        this.nome = nome;
    }
    setIdade(idade) {
        this.idade = idade;
    }
    setGenero(genero) {
        this.genero = genero;
    }
    setFormacao(formacao) {
        this.formacao = formacao;
    }
}
class Funcionario {
    pessoa;
    cargo = "";
    setor = "";
    salario = 0;
    tomandoCafe = false;
    constructor(pessoa, cargo, setor, salario, tc) {
        this.pessoa = pessoa;
        this.cargo = cargo;
        this.setor = setor;
        this.salario = salario;
        this.tomandoCafe = tc;
    }
    //FUNÇÕES GET's
    getPessoa() {
        return this.pessoa;
    }
    getCargo() {
        return this.cargo;
    }
    getSetor() {
        return this.setor;
    }
    getSalario() {
        return this.salario;
    }
    getTc() {
        return this.tomandoCafe;
    }
    //FUNÇÕES SET's
    setPessoa(pessoa) {
        this.pessoa = pessoa;
    }
    setCargo(cargo) {
        this.cargo = cargo;
    }
    setSetor(setor) {
        this.setor = setor;
    }
    setSalario(salario) {
        this.salario = salario;
    }
    setTc(tc) {
        this.tomandoCafe = tc;
    }
    getTrabalhando() {
        if (this.tomandoCafe === true) {
            console.log(`Porra ${this.pessoa.getNome()}, volta a trabalhar idiota`);
        }
        else {
            console.log(`Parabéns ${this.pessoa}, você é um funcionário exemplar`);
        }
    }
    getInfo() {
        console.log(`Informações do Funcionário: ${this.pessoa.getNome()}, Cargo: ${this.cargo}, Setor de atuação: ${this.setor}, Salário: ${this.salario}`);
        console.log(this.getTrabalhando());
    }
}
const pessoinha = new Pessoa("Fulano", 19, "Gustavo", "TikTok");
const funcionario = new Funcionario(pessoinha, "Filho do dono", "Em casa", 1983, true);
funcionario.getInfo();
