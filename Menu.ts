import readlinesync = require('readline-sync');
import { colors } from './util/cores';


export function main() {
    
   while (true) {
    menu()
    let opcao = readlinesync.questionInt("")

    switch (opcao) {
    case 1:
        // Cadastrar um produto novo
        keyPress();
        break
    case 2:
        // Listar todos os produtos
        keyPress();
        break
    case 3:
        // Pesquisar um produto por ID
        keyPress();
        break
    case 4:
        // Atualizar um produto por ID
        keyPress();
        break
    case 5:
        // Deletar um produto por ID
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