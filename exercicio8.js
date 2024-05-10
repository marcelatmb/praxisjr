const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calcularResultado(operacao, valor1, valor2) {
  switch (operacao) {
    case "soma":
      return valor1 + valor2;
    case "subtração":
      return valor1 - valor2;
    case "multiplicação":
      return valor1 * valor2;
    case "divisão":
      if (valor2 !== 0) {
        return valor1 / valor2;
      } else {
        return "Erro: Divisão por zero.";
      }
    default:
      return "Operação inválida.";
  }
}

function iniciarCalculadora() {
  rl.question('Escolha uma operação matemática (soma, subtração, multiplicação, divisão ou sair): ', (operacao) => {
    if (operacao === "sair") {
      console.log("Programa encerrado.");
      rl.close();
      return;
    }

    rl.question('Digite o primeiro número: ', (valor1) => {
      rl.question('Digite o segundo número: ', (valor2) => {
        const resultado = calcularResultado(operacao, parseFloat(valor1), parseFloat(valor2));
        console.log(`Resultado: ${resultado}`);
        iniciarCalculadora(); 
      });
    });
  });
}

iniciarCalculadora();
