const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let array = [];

function exibirMenu() {
  console.log(`
    Escolha uma operação:
    1: Adicionar um elemento no final do array.
    2: Remover o último elemento do array.
    3: Remover o primeiro elemento do array.
    4: Exibir todos os elementos do array.
    0: Sair do programa.
  `);
}

function solicitarOperacao() {
  exibirMenu();
  rl.question("Digite sua escolha: ", (resposta) => {
    const operacao = parseInt(resposta);
    switch (operacao) {
      case 1:
        adicionarElemento();
        break;
      case 2:
        removerUltimoElemento();
        break;
      case 3:
        removerPrimeiroElemento();
        break;
      case 4:
        exibirElementos();
        break;
      case 0:
        console.log("Programa encerrado.");
        rl.close();
        break;
      default:
        console.log("Operação inválida. Por favor, tente novamente.");
        solicitarOperacao();
    }
  });
}

function adicionarElemento() {
  rl.question("Digite o elemento a ser adicionado: ", (elemento) => {
    array.push(elemento);
    solicitarOperacao();
  });
}

function removerUltimoElemento() {
  array.pop();
  solicitarOperacao();
}

function removerPrimeiroElemento() {
  array.shift();
  solicitarOperacao();
}

function exibirElementos() {
  console.log(array);
  solicitarOperacao();
}

solicitarOperacao();
