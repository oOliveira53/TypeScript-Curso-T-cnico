class Produtos{
    private nome: string = "";
    private marca: string = "";
    private estoque: number = 0;
    private preco: number = 0;
    // private precoTotal: number = 0;

    constructor(nome:string,
        marca:string,
        estoque:number,
        preco:number,
        // precoTotal:number
    ){
        this.nome = nome;
        this.marca = marca;
        this.estoque = estoque;
        this.preco = preco;
        // this.precoTotal= precoTotal;
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
    public getEstoque() : number {
        return this.estoque;
    }
    public getPrecoTotal() : number {
        const total = (n1:number, n2:number) =>{
            const mult= n1*n2
            return mult
        }
            return total(this.estoque, this.preco)
        }

        //SETS
        
        public setNome(nome : string): void {
            this.nome = nome;
        }
        
        
        public setMarca(marca : string):void {
            this.marca = marca;
        }

        
        public setEstoque(estoque : number): void {
            this.estoque = estoque;
        }

        
        public setPreco(preco : number):void {
            this.preco = preco;
        }
        
        
        // public setPrecoTotal(precoTotal : number):void {
        //     this.precoTotal = precoTotal;
        // }


        public getInformacoes(): void{
            console.log(`Nome do produto ${this.nome}, Marca ${this.marca}, Quantidade em estoque ${this.estoque}, Preço ${this.preco}, Preço total de produtos ${this.getPrecoTotal()}`);
            
        }
    }




    const produtos = new Produtos("Serra", "Makita", 357, 129) 
    produtos.getInformacoes();




    
    

