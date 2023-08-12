let names = ['Carlos', 'Maria', 'Karoline', 'Funny'];
let elementsAdded = false;
let container = document.querySelector('.container');

function addName() {
  if (elementsAdded) {
    return;
  }

  const addMessage = document.createElement('p');
  addMessage.textContent = 'Enter at least two names to be drawn.';
  container.appendChild(addMessage);

  const addInput = document.createElement('input');
  addInput.type = 'text';
  addInput.placeholder = 'Type a name';
  addInput.classList.add('input-name');
  container.appendChild(addInput);

  const addButton = document.createElement('button');
  addButton.textContent = 'Add';
  addButton.classList.add('add-name');
  addButton.onclick = () => {
    const inputElement = document.querySelector('.input-name'); 
    const name = inputElement.value;
    names.push(name);
    console.log(names);
  }
  container.appendChild(addButton);

  elementsAdded = true;
}

function listNames() {
  // if (elementsAdded) {
  //   return;
  // }

  const listMessage = document.createElement('p');

  if (names.length >= 1) {
    listMessage.textContent = `List: ${names}`;
    //elementsAdded = true;
  } else {
    listMessage.textContent = 'List is empty, add at least one name to show the list.';
    //elementsAdded = true;
  }
  container.appendChild(listMessage);
}

function drawName(names) {
  const drawMessage = document.createElement('p');

  if (names.length < 2) {
    drawMessage.textContent = 'Add at least two names to drawn.';
  } else {
    const randomIndex = Math.floor(Math.random() * names.length);
    drawMessage.textContent = `The winner is ${names[randomIndex]}, congrats!`
    names.splice(randomIndex, 1);
  }
  container.appendChild(drawMessage);
}
