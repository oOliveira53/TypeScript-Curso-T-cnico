"use strict";
class Produtos {
    nome = "";
    marca = "";
    estoque = 0;
    preco = 0;
    // private precoTotal: number = 0;
    constructor(nome, marca, estoque, preco) {
        this.nome = nome;
        this.marca = marca;
        this.estoque = estoque;
        this.preco = preco;
        // this.precoTotal= precoTotal;
    }
    getNome() {
        return this.nome;
    }
    getMarca() {
        return this.marca;
    }
    getPreco() {
        return this.preco;
    }
    getEstoque() {
        return this.estoque;
    }
    getPrecoTotal() {
        const total = (n1, n2) => {
            const mult = n1 * n2;
            return mult;
        };
        return total(this.estoque, this.preco);
    }
    //SETS
    setNome(nome) {
        this.nome = nome;
    }
    setMarca(marca) {
        this.marca = marca;
    }
    setEstoque(estoque) {
        this.estoque = estoque;
    }
    setPreco(preco) {
        this.preco = preco;
    }
    // public setPrecoTotal(precoTotal : number):void {
    //     this.precoTotal = precoTotal;
    // }
    getInformacoes() {
        console.log(`Nome do produto ${this.nome}, Marca ${this.marca}, Quantidade em estoque ${this.estoque}, Preço ${this.preco}, Preço total de produtos ${this.getPrecoTotal()}`);
    }
}
const produtos = new Produtos("Serra", "Makita", 357, 129);
produtos.getInformacoes();
