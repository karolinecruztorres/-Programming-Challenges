const numbers = [1, 2, 3, 4, 5, 6];

function sumOfSquares(array) {
  let square = 0;
  array.forEach(element => {
    if (element % 2 === 0) {
      square += element * element;
    }
  });
  return square;
}

console.log(sumOfSquares(numbers));