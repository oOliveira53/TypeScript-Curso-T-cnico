"use strict";
class Produtos {
    nome = "";
    marca = "";
    estoque = 0;
    preco = 0;
    precoTotal = 0;
    constructor(nome, marca, estoque, preco, precoTotal) {
        this.nome = nome;
        this.marca = marca;
        this.estoque = estoque;
        this.preco = preco;
        this.precoTotal = precoTotal;
    }
}
