declare class Produtos {
    private nome;
    private marca;
    private estoque;
    private preco;
    constructor(nome: string, marca: string, estoque: number, preco: number);
    getNome(): string;
    getMarca(): string;
    getPreco(): number;
    getEstoque(): number;
    getPrecoTotal(): number;
    setNome(nome: string): void;
    setMarca(marca: string): void;
    setEstoque(estoque: number): void;
    setPreco(preco: number): void;
    getInformacoes(): void;
}
declare const produtos: Produtos;
