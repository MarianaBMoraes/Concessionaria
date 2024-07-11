const prompt = require ('prompt-sync')();
const { adicionarCarro, removerCarro, listarCarros, atualizarCarro } = require('./concessionaria');

function exibirMenu() {
    console.log("\n=== Concessionária ===");
    console.log("1. Adicionar carro");
    console.log("2. Remover carro");
    console.log("3. Listar todos os carros");
    console.log("4. Atualizar informações de um carro");
    console.log("5. Sair");
    return prompt("Escolha uma opção: ");
}

function main() {
    let escolha;
    do {
        escolha = exibirMenu();
        switch (escolha) {
            case '1':
                adicionarCarro();
                break;
            case '2':
                removerCarro();
                break;
            case '3':
                listarCarros();
                break;
            case '4':
                atualizarCarro();
                break;
            case '5':
                console.log("Saindo...");
                break;
            default:
                console.log("Opção inválida.");
        }
    } while (escolha !== '5');
}

main();
