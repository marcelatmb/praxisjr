const readline = require('readline');

const ler = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function Filme(idade, tipoIngresso) {
  if (idade >= 18) {
    return true;
  } else if (idade >= 16 && tipoIngresso.toLowerCase() === "meia") {
    return true;
  } else {
    return false;
  }
}

ler.question("Qual é a sua idade? ", (idadeInput) => {
  const idade = parseInt(idadeInput);
  ler.question("Qual é o tipo do seu ingresso? Inteira ou Meia) ", (tipoIngresso) => {
    if (Filme(idade, tipoIngresso)) {
      console.log("Você pode ver o filme.");
    } else {
      console.log("Você não pode ver o filme.");
    }
    ler.close();
  });
});
