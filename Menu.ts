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
        // Pesquisar um produto por ID
        id = readlinesync.questionInt("\nID do produto: ")
        produtos.pesquisar(id)
        keyPress();
        break
    case 4:
        // Atualizar um produto por ID
        id = readlinesync.questionInt("\nID do produto: ")
        const produtoExistente = produtos.buscarId(id);

        // Verifica se o produto existe para ser atualizado
        if(produtoExistente) { 
            nome = readlinesync.question("\nNovo nome do produto: ")
            preco = readlinesync.questionFloat("Novo preço do produto: ")
            volume = readlinesync.questionInt("Novo volume do produto: ")

            // Verifica o tipo do produto para atualizar o objeto baseado no tipo dele 
            if (produtoExistente.tipo === 1) {
                const cor = readlinesync.question("\nCor do produto: ")
                const acabamento = readlinesync.keyInSelect(acabamentoMaq, "", { cancel : false}) + 1;

                produtos.atualizar(new Maquiagem(id, nome, produtoExistente.tipo, preco, volume, cor, acabamento));
            } else if (produtoExistente.tipo === 2) {
                const propriedade = readlinesync.question("\nDigite a propriedade principal do produto: ");

                produtos.atualizar(new Skincare(id, nome, produtoExistente.tipo, preco, volume, propriedade));
            }
        } else {
            console.log(`Produto com ID ${id} não encontrado.`);
        }

        keyPress();
        break
    case 5:
        // Deletar um produto por ID
        id = readlinesync.questionInt("ID do produto: ");
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
    console.log("   3 - Pesquisar produto por id")
    console.log("   4 - Atualizar produto")
    console.log("   5 - Deletar produto")
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