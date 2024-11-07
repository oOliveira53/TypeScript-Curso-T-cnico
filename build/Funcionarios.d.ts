export default class Empresa {
    private cpnj;
    private cep;
    private funcionario;
    private tomarCafe;
    constructor(cnpj: number, cep: number, funcionario: Funcionario, tomarCafe: boolean);
}
declare class Pessoa {
    private nome;
    private idade;
    private genero;
    private formacao;
    constructor(n: string, idade: number, genero: string, formacao: string);
    getNome(): string;
    getIdade(): number;
    getGenero(): string;
    getFormacao(): string;
    setNome(nome: string): void;
    setIdade(idade: number): void;
    setGenero(genero: string): void;
    setFormacao(formacao: string): void;
}
declare class Funcionario {
    private pessoa;
    private cargo;
    private setor;
    private salario;
    private tomandoCafe;
    constructor(pessoa: Pessoa, cargo: string, setor: string, salario: number, tc: boolean);
    getPessoa(): Pessoa;
    getCargo(): string;
    getSetor(): string;
    getSalario(): number;
    getTc(): boolean;
    setPessoa(pessoa: Pessoa): void;
    setCargo(cargo: string): void;
    setSetor(setor: string): void;
    setSalario(salario: number): void;
    setTc(tc: boolean): void;
    getTrabalhando(): void;
    getInfo(): void;
}
export {};
