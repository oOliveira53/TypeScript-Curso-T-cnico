
//Batalha aprendendo typeScript
class Produto {
    private nome: string = "";
    private marca: string  = "";
    private preco: number = 0;
    
    
    constructor(nome: string, marca: string, preco:number){
        this.nome = nome;
        this.marca = marca;
        this.preco= preco;
    }

    public getNome(): string {
        return this.nome;
    }

    public getMarca(): string {
        return this.marca;
    }

    public getPreco(): number {
        return this.preco;
    }

}




class Cliente {
    private nome: string = "";
    private produto: Produto 
    public dinheiro: number = 0;
    
    constructor(
        nome: string,
        produto: Produto,
         dinheiro: number
    ) {
        this.nome = nome;
        this.produto = produto;
         this.dinheiro = dinheiro;
    }

public getNome() : string {
    return this.nome;
}


public getProduto() : Produto {
    return this.produto;
}


    public getDinheiro() : number {
         return this.dinheiro;
     }


public setNome(nome : string): void {
    this.nome = nome;
}


public setProduto(produto : Produto):void {
    this.produto = produto;
}


public setDinheiro(dinheiro : number):void {
    this.dinheiro = dinheiro;
}

public comprarProduto():void{
    const precoProduto = this.produto.getPreco();
    if(this.dinheiro >= precoProduto){
        this.dinheiro -= precoProduto;
        console.log(`${this.nome} compro o produto ${this.produto.getNome()} por R$ ${precoProduto}`);
        console.log(`Novo saldo: ${this.dinheiro}`);
        
    }else{
        console.log(`${this.nome} você não tem dinheiro o suficiente para comprar ${this.produto.getNome()}`);
        
    }
}

public adicionarDinheiro(valor:number): void{
    if(valor>0){
        this.dinheiro += valor;
        console.log(`${valor} adicionado ao saldo do cliente, ficando atualmente com ${this.dinheiro}`);
    }else{
        console.log("Coloque um valor válido...");
        
    }
}

public getInformacoes() : void {
    console.log(`Cliente chamado: ${this.nome}`);
    console.log(`Produto:  ${this.produto.getNome()}, Marca:  ${this.produto.getMarca()}, Preco ${this.produto.getPreco()} `);
    
}
}



const produto = new Produto("Furadeira", "Intel", 3000)
const cliente = new Cliente("Marcos", produto, 2951)



cliente.getInformacoes();

cliente.adicionarDinheiro(50);

cliente.comprarProduto();





