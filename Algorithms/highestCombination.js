/* Dado um array de inteiros não negativos, encontre o maior número possível formado pela concatenação de todos os elementos do array.

Por exemplo, dada a entrada [50, 2, 1, 9], o maior número possível que pode ser formado é 95021.

A solução deve ter complexidade de tempo O(n log n), ou seja, deve ser uma solução eficiente.

*/

//Primeiro precisa ordenar o array pelo primeiro número de cara valor
// Depois concatenar usando map

let numbers = [30, 7, 5, 9];
numbers.sort((a,b) => b - a);

console.log(numbers);

