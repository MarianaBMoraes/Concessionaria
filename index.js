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