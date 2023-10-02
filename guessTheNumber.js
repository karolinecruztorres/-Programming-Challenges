const min = 1;
const max = 100;
const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
console.log(randomNumber);

const number = prompt("Guess a number from 1 to 100: ");

function guessNumber() {
  if (number == randomNumber) {
    console.log(`You guess the right number, ${randomNumber}.`);
  } else if (number > randomNumber) {
    console.log(`The mystery number is smaller than the guess, please try again.`);
  } else if (number < randomNumber) {
    console.log(`The mystery number is greater than the guess, please try again.`);
  }
}

guessNumber();