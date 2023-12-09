const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function sumOfPairs(array, target) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        console.log(`${array[i]} + ${array[j]} = ${array[i] + array[j]}`);
      }
    }
  }
}

sumOfPairs(numbers, 10);