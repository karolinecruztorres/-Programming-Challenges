let num = [19,21,22,23,24,25,17,27,15,29,31];
let even = [];
let sum = 0;

for(let i = 0; i < num.length; i++) {
  if (num[i] % 2 == 0) {
    sum += num[i];
  }
}

even.push(sum);
console.log(even); 