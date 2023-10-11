const students = [
  { name: "Alice", age: 20, grades: [85, 90, 92] },
  { name: "Bob", age: 22, grades: [88, 87, 84] },
  { name: "Charlie", age: 21, grades: [95, 89, 91] }
];

for (let i = 0; i < students.length; i++) {
  let sum = 0;
  for (let j = 0; j < students[i].grades.length; j++) {
    sum += students[i].grades[j];
  }

  const average = Math.floor(sum / students[i].grades.length);
  console.log(`${students[i].name}: Média das notas = ${average}`);
}
