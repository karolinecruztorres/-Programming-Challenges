let numeros = [1, 2, 3, 4, 5, 6, 6, 6, 7, 7];

//01
function calcularMedia(array) {
  let soma = 0;
  for (let i = 0; i < array.length; i++) {
    soma += array[i];
  }
  const media = soma / array.length;
  return media;
}

console.log(calcularMedia(numeros));

//02
function calcularMediana(array) {
  let mediana = array.length / 2;

  if (array.length % 2 !== 0) {
    return `A mediana é ${array[Math.floor(mediana)]}`;
  } else {
    return `A mediana é ${(array[mediana - 1] + array[mediana]) / 2}`;
  }
}

console.log(calcularMediana(numeros));

//03
// function calcularModa(numeros) {
//   let contagem = {};

//   numeros.forEach(numero => {
//     contagem[numero] = (contagem[numero] || 0) + 1;
//   });

//   let moda;
//   let maxContagem = 0;

//   for (let numero in contagem) {
//     if (contagem[numero] > maxContagem) {
//       moda = Number(numero);
//       maxContagem = contagem[numero];
//     }
//   }

//   return moda;
// }

// const conjuntoDeNumeros = [1, 2, 2, 3, 3, 3, 4, 4, 5];
// const resultadoModa = calcularModa(conjuntoDeNumeros);
// console.log(`A moda do conjunto é: ${resultadoModa}`);

//04
function calcularDesvioPadrao(array) {
  let somaQuadrados = 0;

  array.forEach((element) => {
    somaQuadrados += Math.pow(element - calcularMedia(array), 2);
  });

  let desvioPadrao = Math.sqrt(somaQuadrados / array.length).toFixed(1);
  console.log(desvioPadrao);
}

calcularDesvioPadrao(numeros);



