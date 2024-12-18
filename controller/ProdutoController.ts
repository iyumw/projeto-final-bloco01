import { Produto } from "../model/Produto";
import { ProdutoRepository } from "../repository/ProdutoRepository";

// Gerencia a lógica de negócios dos produtos
// e implementa a interface ProdutoRepository para garantir que os métodos sejam definidos
export class ProdutoController implements ProdutoRepository {

    // Lista que armazena os produtos
    private listaProdutos = new Array<Produto>();

    // Controla os IDs dos produtos, para que cada produto tenha um ID único
    public id: number = 0;

    criar(produto: Produto): void {
        this.listaProdutos.push(produto)
        console.log(`\nNovo produto criado: ${produto.nome}`);
    }
    listar(): void {
        // Percorre a lista de produtos, e apresenta cada produto da lista no console
        this.listaProdutos.forEach(produto => {
            produto.visualizar();
        });
    }
    listarMaquiagens(): void{
        const maquiagens = this.listaProdutos.filter(produto => produto.tipo === 1); // Tipo 1 é Maquiagem
        if (maquiagens.length > 0) {
            maquiagens.forEach(produto => produto.visualizar());
        } else {
            console.log("\nNenhuma maquiagem cadastrada.");
        }
    }
    listarSkincare(): void {
        const skincare = this.listaProdutos.filter(produto => produto.tipo === 2); // Tipo 2 é Skincare
        if (skincare.length > 0) {
            skincare.forEach(produto => produto.visualizar());
        } else {
            console.log("\nNenhum produto de skincare cadastrado.");
        }
    }
    pesquisar(id: number): void {
        const buscarProduto = this.buscarId(id);

        if(buscarProduto !== null) {
            buscarProduto.visualizar();
        } else {
            console.log(`\nProduto com ID ${id} não encontrado.`);
        }
    }

    atualizar(produto: Produto): void {
        const buscarProduto = this.buscarId(produto.id);

        if(buscarProduto !== null) {
            // Atualiza o produto na lista, substituindo o antigo pelo novo, a partir do índice do produto
            this.listaProdutos[this.listaProdutos.indexOf(buscarProduto)] = produto;
        } else {
            console.log(`\nProduto com ID ${produto.id} não encontrado.`);
        }
    }
    deletar(id: number): void {
        const buscarProduto = this.buscarId(id);

        if(buscarProduto!== null) {
            this.listaProdutos.splice(this.listaProdutos.indexOf(buscarProduto), 1);
            console.log(`\nProduto com ID ${id} deletado.`);
        } else {
            console.log(`\nProduto com ID ${id} não encontrado.`);
        }
    }

    //Métodos Auxiliares
    public buscarId(id: number): Produto | null {
        // Itera pela lista de produtos e retorna o produto que tem o ID correspondente ao que está sendo pesquisado
        for (let produto of this.listaProdutos){
            if(produto.id === id){
                return produto;
            }
        }   
    return null;
    }

    public gerarId(): number {
        // Incrementa o ID para gerar automaticamente ao criar um novo produto
        return ++this.id;
    } 
    
}