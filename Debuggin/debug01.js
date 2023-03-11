//Código com erros
/*
const array = [1, 2, 3, 4, 5];

for (let i = 0; i <= array.length; i++) {
  console.log(`O valor do índice ${i} é ${array[i]}`);
}

const soma = array.reduce((acc, value) => acc + value);
console.log(`A soma dos valores do array é ${soma}`);

array.push('seis');
console.log(`O último valor do array é ${array[array.length - 1]}`);

const dobro = array.map(value => value * 2);
console.log(`O array dobrado é ${dobro}`);
*/

//Código debugado

const array = [1, 2, 3, 4, 5];

for (let i = 0; i < array.length; i++) {
  console.log(`O valor do índice ${i} é ${array[i]}`);
}

const soma = array.reduce((acc, value) => acc + value);
console.log(`A soma dos valores do array é ${soma}`);

array.push(6);
console.log(`O último valor do array é ${array[array.length -1]}`);

const dobro = array.map(value => value * 2);
console.log(`O array dobrado é ${dobro}`);
