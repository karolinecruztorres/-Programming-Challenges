function secondLargest(arr) {
  if (arr.length < 2) {
      return "No second largest element";
  }

  let largest = Math.max(arr[0], arr[1]);
  let secondLargest = Math.min(arr[0], arr[1]);

  for (let i = 2; i < arr.length; i++) {
      if (arr[i] > largest) {
          secondLargest = largest;
          largest = arr[i];
      } else if (arr[i] > secondLargest && arr[i] < largest) {
          secondLargest = arr[i];
      }
  }

  return secondLargest;
}

const array1 = [5, 3, 8, 1, 9, 4];
const array2 = [1, 2, 3, 4, 5];
const array3 = [5, 5, 5, 5];

console.log(secondLargest(array1)); 
console.log(secondLargest(array2)); 
console.log(secondLargest(array3)); 