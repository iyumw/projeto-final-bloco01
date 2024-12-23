import { Produto } from "./Produto";

export class Skincare extends Produto {
    private _propriedade: string; // Vitamina C, Niacinamida, Ácido Hialurônico etc.

    constructor(id: number, nome: string, tipo: number, preco: number, volume: number, propriedade: string) {
        super(id, nome, tipo, preco, volume);
        this._propriedade = propriedade    
	}

	public get propriedade(): string {
		return this._propriedade;
	}

	public set propriedade(propriedade: string) {
		this._propriedade = propriedade;
	}


// Método visualizar sobrescrito, que chama o método visualizar da classe base Produto
// e depois exibe os atributos específicos de skincare
    public visualizar(): void {
        super.visualizar();
        
        console.log(`Propriedade: ${this._propriedade}`);
    }

}