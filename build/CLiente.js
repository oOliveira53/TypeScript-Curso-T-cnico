"use strict";
//Batalha aprendendo typeScript
class Produto {
    nome = "";
    marca = "";
    preco = 0;
    constructor(nome, marca, preco) {
        this.nome = nome;
        this.marca = marca;
        this.preco = preco;
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
}
class Cliente {
    nome = "";
    produto;
    dinheiro = 0;
    constructor(nome, produto, dinheiro) {
        this.nome = nome;
        this.produto = produto;
        this.dinheiro = dinheiro;
    }
    getNome() {
        return this.nome;
    }
    getProduto() {
        return this.produto;
    }
    getDinheiro() {
        return this.dinheiro;
    }
    setNome(nome) {
        this.nome = nome;
    }
    setProduto(produto) {
        this.produto = produto;
    }
    setDinheiro(dinheiro) {
        this.dinheiro = dinheiro;
    }
    comprarProduto() {
        const precoProduto = this.produto.getPreco();
        if (this.dinheiro >= precoProduto) {
            this.dinheiro -= precoProduto;
            console.log(`${this.nome} compro o produto ${this.produto.getNome()} por R$ ${precoProduto}`);
            console.log(`Novo saldo: ${this.dinheiro}`);
        }
        else {
            console.log(`${this.nome} você não tem dinheiro o suficiente para comprar ${this.produto.getNome()}`);
        }
    }
    adicionarDinheiro(valor) {
        if (valor > 0) {
            this.dinheiro += valor;
            console.log(`${valor} adicionado ao saldo do cliente, ficando atualmente com ${this.dinheiro}`);
        }
        else {
            console.log("Coloque um valor válido...");
        }
    }
    getInformacoes() {
        console.log(`Cliente chamado: ${this.nome}`);
        console.log(`Produto:  ${this.produto.getNome()}, Marca:  ${this.produto.getMarca()}, Preco ${this.produto.getPreco()} `);
    }
}
const produto = new Produto("Furadeira", "Intel", 3000);
const cliente = new Cliente("Marcos", produto, 2951);
cliente.getInformacoes();
cliente.adicionarDinheiro(50);
cliente.comprarProduto();
