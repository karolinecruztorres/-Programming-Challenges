const min = 1;
const max = 100;
const number = Math.floor(Math.random() * (max - min + 1)) + min;

let attempts = 0;
let guess;
let running = true;

while (running) {
  guess = Number(window.prompt(`Guess a number between ${min} - ${max}`));
  
  if (isNaN(guess)) {
    window.alert("Please enter a valid number");
  } else if (guess < min || guess > max) {
    window.alert("Please enter a valid number");
  } else {
    attempts++;
    
    if (guess < number) {
      window.alert("TOO LOW: TRY AGAIN!");
    } else if (guess > number) {
      window.alert("TOO HIGH: TRY AGAIN!");
    } else {
      window.alert(`CORRECT! The number is ${number}! It took you ${attempts} attempt(s)`);
      running = false;
    } 
  }
  
}
