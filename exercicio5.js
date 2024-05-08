// Escreva um loop for que itera sobre um array de números e imprime o quadrado de cada número.

const numeros = [1, 2, 3, 4, 5];
for (let i = 0; i < numeros.length; i++) {
  const quadrado = numeros[i] * numeros[i];
  console.log(quadrado);
}