const number = 8;
let initialIndex = 0;

for (let i = 2; i <= number; i++) {
  if(i % 2 === 0) {
    initialIndex += i;
  } 
}
console.log(initialIndex);