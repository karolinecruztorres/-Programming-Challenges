const numbers = [
  {a: 1, b: 2, c: 3}, 
  {a: 4, b: 5, c: 6},
  {a: 7, b: 8, c: 9},
];

let numbersSum = numbers.map(obj => obj.a + obj.b + obj.c);
let highest = numbersSum.reduce((a, b) => Math.max(a, b));
let maxIndex = numbersSum.indexOf(Math.max(...numbers.map(obj => obj.a + obj.b + obj.c)));

console.log(`The object with the highest value is the ${maxIndex + 1}º, with ${highest} as a sum.`);