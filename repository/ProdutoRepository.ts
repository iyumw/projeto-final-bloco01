import { Produto } from "../model/Produto";

export interface ProdutoRepository {
    criar(produto: Produto): void;
    listar(): void;
    listarMaquiagens(): void;
    listarSkincare(): void;
    pesquisar(id: number): void; // Equivalente ao "listar produto pelo id" na documentação da atividade
    atualizar(produto: Produto): void;
    deletar(id: number): void;
}