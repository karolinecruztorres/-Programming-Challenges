let numbers = [30, 7, 5, 9];
let sortedNumbers = numbers.map(String).sort((a, b) => b.localeCompare(a)).join("");

console.log(`The highest combination of ${numbers} is '${sortedNumbers}'.`);