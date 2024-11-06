class Veiculos{
    private marca:string = "";
    private modelo:string = "";
    private ano:number = 0;


    constructor(
        marca: string,
        modelo:string,
        ano:number
    ){
        this.marca=marca;
        this.modelo=modelo;
        this.ano=ano;
    }
    //MARCA
    public getMarca(): string{
        return this.marca;
    }
    public setMarca(marca:string): void{
        this.marca= marca;
    }
    //MODELO
    public getModelo() : string {
        return this.modelo;
    }
    public setModelo(modelo : string) {
        this.modelo=modelo;
    }

    //ANO
    public getAno() : number {
        return this.ano;
    }
    
    public setAno(ano : number) {
        this.ano = ano;
    }
    public falarMarca(): void{
        if (this.marca === "Ferrari") {
            console.log("Malado de mais");
            
        } else {
            console.log("Tá bem, nem todos tem uma ferrari, porém muitos querem");
            
        }
    }
    
    public getInformation() : void {
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}`);
    }
}


const veiculo = new Veiculos("Ferrari", "F40", 1992)

veiculo.getInformation();

veiculo.falarMarca();