declare class Produto {
    private nome;
    private marca;
    private preco;
    constructor(nome: string, marca: string, preco: number);
    getNome(): string;
    getMarca(): string;
    getPreco(): number;
}
declare class Cliente {
    private nome;
    private produto;
    dinheiro: number;
    constructor(nome: string, produto: Produto, dinheiro: number);
    getNome(): string;
    getProduto(): Produto;
    getDinheiro(): number;
    setNome(nome: string): void;
    setProduto(produto: Produto): void;
    setDinheiro(dinheiro: number): void;
    comprarProduto(): void;
    adicionarDinheiro(valor: number): void;
    getInformacoes(): void;
}
declare const produto: Produto;
declare const cliente: Cliente;
