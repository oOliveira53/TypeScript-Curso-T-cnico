
export default class Empresa {
    private cpnj: number = 0;
    private cep: number = 0;
    private funcionario: Funcionario ;
    private tomarCafe: boolean = false;
    constructor(
        cnpj:number,
        cep:number,
        funcionario: Funcionario,
        tomarCafe:boolean
    ) {
        this.cpnj = cnpj
        this.cep = cep;
        this.funcionario = funcionario;
        this.tomarCafe = tomarCafe;
    }
}

class Pessoa {
    private nome: string = "";
    private idade: number = 18;
    private genero:string = "";
    private formacao: string = "";
    // private identificacao:Funcionario;
    constructor(
        n:string,
        idade:number,
        genero:string,
        formacao:string,
        // identificacao:Funcionario
    ) {
        this.nome = n;
        this.idade = idade;
        this.genero=genero
        this.formacao= formacao;
        // this.identificacao= identificacao;
    }

    //FUNÇÕES GET's
    public getNome() : string {
        return this.nome
    }
    public getIdade() : number {
        return this.idade
    }
    public getGenero() : string {
        return this.genero
    }
    public getFormacao() : string {
        return this.formacao
    }
    // public getIdentificacao() : Funcionario {
    //     return this.identificacao
    // }
        //FUNÇÕES SET's
    public setNome(nome: string): void {
        this.nome = nome;
    }
    
    public setIdade(idade: number): void {
        this.idade = idade;
    }
    
    public setGenero(genero: string): void {
        this.genero = genero;
    }
    
    public setFormacao(formacao: string): void {
        this.formacao = formacao;
    }
    
    // public setIdentificacao(identificacao: Funcionario): void {
    //     this.identificacao = identificacao;
    // }

    
}

class Funcionario{
    private pessoa: Pessoa;
    private cargo: string = "";
    private setor: string = "";
    private salario: number = 0;
    private tomandoCafe: boolean = false;

    constructor(
        pessoa: Pessoa,
        cargo:string,
        setor:string,
        salario:number,
        tc: boolean
    ){
        this.pessoa = pessoa;
        this.cargo = cargo;
        this.setor = setor
        this.salario = salario
        this.tomandoCafe = tc
    }

        //FUNÇÕES GET's

    public getPessoa() : Pessoa {
        return this.pessoa
    }
    public getCargo() : string {
        return this.cargo
    }
    public getSetor() : string {
        return this.setor
    }
    
    public getSalario() : number {
        return this.salario
    }
    public getTc(): boolean{
        return this.tomandoCafe
    }
        //FUNÇÕES SET's

    public setPessoa(pessoa: Pessoa): void {
        this.pessoa = pessoa;
    }
    
    public setCargo(cargo: string): void {
        this.cargo = cargo;
    }
    
    public setSetor(setor: string): void {
        this.setor = setor;
    }
    
    public setSalario(salario: number): void {
        this.salario = salario;
    }
    
    public setTc(tc : boolean):void {
        this.tomandoCafe = tc;
    }
    
    public getTrabalhando(): void{
        if(this.tomandoCafe === true){
            console.log(`Porra ${this.pessoa.getNome()}, volta a trabalhar idiota`);
        }else{
            console.log(`Parabéns ${this.pessoa}, você é um funcionário exemplar`);
        }
    }

    public getInfo():void{
        console.log(`Informações do Funcionário: ${this.pessoa.getNome()}, Cargo: ${this.cargo}, Setor de atuação: ${this.setor}, Salário: ${this.salario}`);
        console.log(this.getTrabalhando())
    }
}

const pessoinha = new Pessoa("Fulano", 19,"Gustavo","TikTok")

const funcionario = new Funcionario(pessoinha,"Filho do dono", "Em casa", 1983, true)

funcionario.getInfo();
