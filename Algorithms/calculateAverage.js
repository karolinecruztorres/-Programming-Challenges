const students = [
  { name: "Alice", age: 20, grades: [85, 90, 92] },
  { name: "Bob", age: 22, grades: [88, 87, 84] },
  { name: "Maia", age: 21, grades: [95, 89, 91] }
];

function calculateAverage(students) {
  for (let i = 0; i < students.length; i++) {
    let total = 0;
    for (let j = 0; j < students[i].grades.length; j++) {
      total += students[i].grades[j];
    }
  
    const average = parseFloat((total / students[i].grades.length).toFixed(2));
    students[i] = {...students[i], gradeAverage: average};    
  }
  console.log(students);
}

calculateAverage(students);