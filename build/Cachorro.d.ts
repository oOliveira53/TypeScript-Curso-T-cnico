declare class Cachorros {
    private raca;
    private nome;
    private anoNascimento;
    constructor(raca: string, nome: string, anoNascimento: number);
    setRaca(raca: string): void;
    getRaca(): string;
    setNome(nome: string): void;
    getNome(): string;
    setIdade(idade: number): void;
    getIdade(): number;
    getInformacao(): void;
}
declare const catchorro: Cachorros;
