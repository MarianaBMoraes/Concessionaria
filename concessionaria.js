const prompt = require ('prompt-sync')();

let carros = [];

const marcas = ["Toyota", "Honda", "Ford", "Chevrolet"];

function adicionarCarro() {
    const marca = prompt("Digite a marca do carro: ");
    const modelo = prompt("Digite o modelo do carro: ");
    const preco = parseFloat(prompt("Digite o preço do carro: "));
    const ano = parseInt(prompt("Digite o ano do carro: "));

    const carro = { marca, modelo, preco, ano };
    carros.push(carro);
    console.log("Carro adicionado com sucesso.");
}

function removerCarro() {
    const modelo = prompt("Digite o modelo do carro a ser removido: ");
    const index = carros.findIndex(carro => carro.modelo === modelo);
    if (index !== -1) {
        carros.splice(index, 1);
        console.log("Carro removido com sucesso.");
    } else {
        console.log("Carro não encontrado.");
    }
}

function listarCarros() {
    if (carros.length === 0) {
        console.log("Nenhum carro cadastrado.");
    } else {
        console.log("\nLista de Carros:");
        carros.forEach(carro => {
            console.log(`Marca: ${carro.marca}, Modelo: ${carro.modelo}, Preço: ${carro.preco}, Ano: ${carro.ano}`);
        });
    }
}

function atualizarCarro() {
    const modelo = prompt("Digite o modelo do carro a ser atualizado: ");
    const index = carros.findIndex(carro => carro.modelo === modelo);
    if (index !== -1) {
        const { marca, preco, ano } = carros[index];
        console.log("Deixe em branco para manter o valor atual.");
        const novaMarca = prompt(`Nova marca (${marca}): `) || marca;
        const novoPreco = parseFloat(prompt(`Novo preço (${preco}): `)) || preco;
        const novoAno = parseInt(prompt(`Novo ano (${ano}): `)) || ano;

        carros[index] = { marca: novaMarca, modelo, preco: novoPreco, ano: novoAno };
        console.log("Carro atualizado com sucesso.");
    } else {
        console.log("Carro não encontrado.");
    }
}

module.exports = {
    adicionarCarro,
    removerCarro,
    listarCarros,
    atualizarCarro
};