declare class Veiculos {
    private marca;
    private modelo;
    private ano;
    constructor(marca: string, modelo: string, ano: number);
    getMarca(): string;
    setMarca(marca: string): void;
    getModelo(): string;
    setModelo(modelo: string): void;
    getAno(): number;
    setAno(ano: number): void;
    falarMarca(): void;
    getInformation(): void;
}
declare const veiculo: Veiculos;
