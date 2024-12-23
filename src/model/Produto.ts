import { colors } from "../util/cores";


// Classe abstrata, que serve como base para outras classes de produtos
export abstract class Produto {
    private _id:number;
    private _nome:string;
    private _tipo:number;
    private _preco:number;
    private _volume:number;
// Construtor para inicializar os atributos
	constructor(id: number, nome: string, tipo: number, preco: number, volume: number) {
		this._id = id;
		this._nome = nome;
		this._tipo = tipo;
		this._preco = preco;
        this._volume = volume;
	}
// Getters e setters para acessar os valores dos atributos privados
	public get id(): number {
		return this._id;
	}

	public get nome(): string {
		return this._nome;
	}

	public get tipo(): number {
		return this._tipo;
	}

	public get preco(): number {
		return this._preco;
	}

    public get volume(): number {
        return this._volume;
    }

	public set id(id: number) {
		this._id = id;
	}

	public set nome(nome: string) {
		this._nome = nome;
	}

	public set tipo(tipo: number) {
		this._tipo = tipo;
	}

	public set preco(preco: number) {
		this._preco = preco;
	}

	public set volume(volume: number) {
		this._volume = volume;;
	}


    public visualizar(): void {
        console.log(colors.fg.magenta + "\n" + "=".repeat(25) + "❀ Dados do Produto ❀" + "=".repeat(26) + "\n" + colors.reset)
        console.log("Id do produto: " + this._id)
        console.log("Nome: " + this._nome)

		// Para mostrar no console o tipo do produto, ao invés de apenas o número
		switch (this.tipo) {
			case 1:
				console.log("Tipo: Maquiagem")
                break;
            case 2:
				console.log("Tipo: Skincare")
				break;
		}
	
        console.log("Preco: R$ " + this._preco.toFixed(2))
        console.log("Volume: " + this._volume + " mL")
    }
}