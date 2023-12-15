const people = [
  { name: "Alice", age: 10 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 10 },
  { name: "Brown", age: 28 },
  { name: "Junior", age: 40 },
  { name: "Sandy", age: 10 }
];

function mediaIdadesImpares(array) {
  let sum = 0;
  let quantity = 0;
  array.forEach(element => {
    if (element.age % 2 !== 0) {
      sum += element.age;
      quantity ++;
    }
  });

  if (quantity !== 0) {
    return sum / quantity;
  } else {
    return "All ages are even.";
  }

}

console.log(mediaIdadesImpares(people));