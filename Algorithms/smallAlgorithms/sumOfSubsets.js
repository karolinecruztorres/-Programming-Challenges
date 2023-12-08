const numbers = [1,2,3,4,5,6,7,8,9,10];

function returnNumbers(array, target) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        console.log(`${array[i]} + ${array[j]} = ${array[i] + array[j]}`);
      }
    }
  }
}

returnNumbers(numbers, 10);
// 1 + 9
// 2 + 8
// 4 + 6
// 3 + 7