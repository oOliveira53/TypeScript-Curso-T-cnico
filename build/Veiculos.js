"use strict";
class Veiculos {
    marca = "";
    modelo = "";
    ano = 0;
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
    //MARCA
    getMarca() {
        return this.marca;
    }
    setMarca(marca) {
        this.marca = marca;
    }
    //MODELO
    getModelo() {
        return this.modelo;
    }
    setModelo(modelo) {
        this.modelo = modelo;
    }
    //ANO
    getAno() {
        return this.ano;
    }
    setAno(ano) {
        this.ano = ano;
    }
    falarMarca() {
        if (this.marca === "Ferrari") {
            console.log("Malado de mais");
        }
        else {
            console.log("Tá bem, nem todos tem uma ferrari, porém muitos querem");
        }
    }
    getInformation() {
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}`);
    }
}
const veiculo = new Veiculos("Ferrari", "F40", 1992);
veiculo.getInformation();
veiculo.falarMarca();
