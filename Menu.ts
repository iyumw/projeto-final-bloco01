import readlinesync = require('readline-sync');
import { colors } from './util/cores';
import { ProdutoController } from './controller/ProdutoController';
import { Maquiagem } from './model/Maquiagem';
import { Skincare } from './model/Skincare';

export function main() {
    let id, tipo, preco, volume: number;
    let nome: string;

    // Definição dos tipos de produtos disponíveis
   const tipoProduto = ['Maquiagem', 'Skincare']
   const acabamentoMaq = ["Branco", "Transparente", "Matte", "Cintilante"]

   // Instancia o controller de produtos, que gerencia as operações sobre os produtos
   let produtos = new ProdutoController();

    //Novas Instâncias da Classe Maquiagem (Objetos)
    produtos.criar(new Maquiagem(produtos.gerarId(), "Batom Vermelho", 1, 19.99, 5, "Vermelho", 3));
    produtos.criar(new Maquiagem(produtos.gerarId(), "Sombra Azul", 1, 25.50, 10, "Azul", 4));

    // Novas Instâncias da Classe Skincare (Objetos)
    produtos.criar(new Skincare(produtos.gerarId(), "Hidratante Facial", 2, 12.99, 15, "Hidratação Profunda"));
    produtos.criar(new Skincare(produtos.gerarId(), "Protetor Solar FPS50", 2, 18.99, 20, "Proteção contra raios UVA/UVB"));


   while (true) {
    menu()
    let opcao = readlinesync.questionInt("")

    switch (opcao) {
    case 1:
        // Cadastrar um produto novo
        nome = readlinesync.question("\nNome do produto: ")
        preco = readlinesync.questionFloat("Preço do produto: ")
        volume = readlinesync.questionInt("Volume do produto: ")

        // Escolha do tipo de produto
        tipo = readlinesync.keyInSelect(tipoProduto, "", { cancel : false}) + 1;

        switch(tipo) {
            case 1:
                // Maquiagem
                const cor = readlinesync.question("\nCor do produto: ")
            
                // Escolha do tipo de acabamento da maquiagem
                const acabamento = readlinesync.keyInSelect(acabamentoMaq, "", { cancel : false}) + 1;

                produtos.criar(new Maquiagem(produtos.gerarId(), nome, tipo, preco, volume, cor, acabamento))
            break;
            case 2:
                // Skincare
                const propriedade = readlinesync.question("\nDigite a propriedade principal do produto: ")

                produtos.criar(new Skincare(produtos.gerarId(), nome, tipo, preco, volume, propriedade))
            break;
        }
        keyPress();
        break
    case 2:
        // Listar todos os produtos
        produtos.listar();
        keyPress();
        break
    case 3:
        // Listar todos os produtos de maquiagem
        produtos.listarMaquiagens();
        keyPress();
        break
    case 4:
        // Listar todos os produtos de skincare
        produtos.listarSkincare();
        keyPress();
        break
    case 5:
        // Pesquisar um produto por ID
        id = readlinesync.questionInt("\nID do produto a ser pesquisado: ")
        produtos.pesquisar(id);
        keyPress();
        break
    case 6:
        // Atualizar um produto por ID
        id = readlinesync.questionInt("\nID do produto a ser atualizado: ")
        const produtoExistente = produtos.buscarId(id);

        // Verifica se o produto existe para ser atualizado
        if(produtoExistente) { 
            nome = readlinesync.question("\nNovo nome do produto: ")
            preco = readlinesync.questionFloat("Novo preço do produto: ")
            volume = readlinesync.questionInt("Novo volume do produto: ")

            // Verifica o tipo do produto para atualizar o objeto baseado no tipo dele 
            if (produtoExistente.tipo === 1) {
                const cor = readlinesync.question("\nNova cor do produto: ")
                const acabamento = readlinesync.keyInSelect(acabamentoMaq, "", { cancel : false}) + 1;

                produtos.atualizar(new Maquiagem(id, nome, produtoExistente.tipo, preco, volume, cor, acabamento));
            } else if (produtoExistente.tipo === 2) {
                const propriedade = readlinesync.question("\nDigite a nova propriedade principal do produto: ");

                produtos.atualizar(new Skincare(id, nome, produtoExistente.tipo, preco, volume, propriedade));
            }
        } else {
            console.log(`Produto com ID ${id} não encontrado.`);
        }

        keyPress();
        break
    case 7:
        // Deletar um produto por ID
        id = readlinesync.questionInt("ID do produto a ser deletado: ");
        produtos.deletar(id);
        keyPress();
        break
    case 0:
        // Sair do programa
        about()
        keyPress();
        break
    default:
        console.log(colors.fg.redstrong + "\nOpcao invalida! Tente novamente." + colors.reset);
        keyPress();
        break 
    }
}
}

function menu(): void {
    console.log(colors.fg.magentastrong + "\n" + "=".repeat(28) + "❀ Velvet Yume ❀" + "=".repeat(27) + "\n" + colors.reset);
    console.log("   1 - Criar Produto")
    console.log("   2 - Listar todos os produtos")
    console.log("   3 - Listar apenas os produtos de Maquiagem")
    console.log("   4 - Listar apenas os produtos de Skincare")
    console.log("   5 - Pesquisar produto por id")
    console.log("   6 - Atualizar produto")
    console.log("   7 - Deletar produto")
    console.log("   0 - Sair")

    console.log(colors.fg.magenta + "\n","-".repeat(69) ,"\n" + colors.reset)
    console.log(colors.fg.blue + "Digite a opcao desejada: " + colors.reset) 
}

function about() {
    console.log(colors.fg.magentastrong + "\n","=".repeat(22) ,"✨ Programa encerrado! ✨", "=".repeat(20), "\n"+ colors.reset)
    console.log("Desenvolvido por: Isis Yume")
    console.log("GitHub: https://github.com/iyumw")
    console.log("LinkedIn: https://www.linkedin.com/in/isis-okamoto/")
    console.log(colors.fg.magentastrong + "\n","=".repeat(69) ,"\n"+ colors.reset)
    process.exit(0)
}

// Função que aguarda o pressionamento de uma tecla para continuar
function keyPress(): void {
    console.log("\nPressione enter para continuar...")
    readlinesync.prompt(); // Aguarda o usuário pressionar Enter
}

main();