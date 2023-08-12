const readline = require('readline'); // readline() module.
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let names = [];

function displayMenu() {
  const menu = `Select an option:
  1 - Add
  2 - List
  3 - Draw
  4 - Exit`;

  console.log(menu);
}

function addName() {
  rl.question('>> Enter a name: ', (newName) => {
    names.push(newName);
    console.log(`${newName} has been added.`);
    displayMenu();
  });
};

function listNames() {
  if (names.length < 1) {
    console.log(`>> List is empty, add at least one name to show the list.
    `);
  } else {
    console.log(names);
  }
  displayMenu();
}

function drawName() {
  if (names.length < 2) {
    console.log(`>> Add at least two names to draw.
    `);
  } else {
    const randomIndex = Math.floor(Math.random() * names.length);
    console.log(`>> The winner is ${names[randomIndex]}, congrats!`);
    names.splice(randomIndex, 1);
  }
  displayMenu();
} 

function selectAnOption(option) {
  switch (option) {
    case '1':
      addName();
      break;
  
    case '2':
      listNames();
      break;

    case '3':
      drawName();
      break;
  
    case '4':
      rl.close();
      break;

    default:
      console.log('>> Invalid option');
      displayMenu();
  }
}

displayMenu();

rl.on('line', (input) => {
  selectAnOption(input);
});