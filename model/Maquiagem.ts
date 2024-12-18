import { Produto } from "./Produto";

export class Maquiagem extends Produto {
    private _cor: string;
    private _acabamento: number; // Matte, transparente ou iluminado

    constructor(id: number, nome: string, tipo: number, preco: number, volume: number, cor: string, acabamento: number) {
        super(id, nome, tipo, preco, volume);
        this._cor = cor;
        this._acabamento = acabamento 
    }

	public get cor(): string {
		return this._cor;
	}

	public get acabamento(): number {
		return this._acabamento;
	}

	public set cor(cor: string) {
		this._cor = cor;
	}

	public set acabamento(acabamento: number) {
		this._acabamento = acabamento;
	}
	

// Método visualizar sobrescrito, que chama o método visualizar da classe base Produto
// e depois exibe os atributos específicos de maquiagem
    public visualizar(): void {
        super.visualizar();
        
        console.log(`Cor: ${this._cor}`);
        switch (this.acabamento) {
            case 1:
                console.log('Acabamento: Matte');
                break;
            case 2:
                console.log('Acabamento: Iluminado');
                break;
        }
    }

}