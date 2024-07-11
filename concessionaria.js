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
