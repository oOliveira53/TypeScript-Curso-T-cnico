class Cachorros{
    private raca: string = "";
    private nome: string = "";
    private anoNascimento: number = 0;
    
    constructor(
        raca: string,
        nome:string,
        anoNascimento: number
    ){
        this.raca = raca;
        this.nome = nome;
        this.anoNascimento = anoNascimento;
    }

    //RAÇA
    public setRaca(raca : string): void {
        this.raca = raca ;
    }
    
    public getRaca() : string {
        return this.raca;
    }
    //NOME
    
    public setNome(nome : string): void {
        this.nome = nome;
    }
    
    public getNome() : string {
        return this.nome;
    }
    //IDADE
    
    public setIdade(idade : number): void {
        this.anoNascimento = idade;
    }
    
    public getIdade() : number {
        return this.anoNascimento
    }

    
    public getInformacao() : void {
        console.log(`Raça ${this.raca}, Nome: ${this.nome}, Idade: ${this.anoNascimento} `) 
    }   
}

const catchorro = new Cachorros("Pincher", "Zeus Trovoada", 1745);

catchorro.getInformacao();