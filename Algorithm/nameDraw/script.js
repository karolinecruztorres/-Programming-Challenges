let names = ['Beth', 'Clemens', 'Fred', 'Angela', 'Carmen'];

function addName() {
  const container = document.querySelector('.container');

  const addMessage = document.createElement('p');
  addMessage.textContent = 'Enter at least two names to be drawn.';
  container.appendChild(addMessage);

  const inputElement = document.createElement('input');
  inputElement.type = 'text';
  inputElement.placeholder = 'Type a name';
  inputElement.classList.add('input-name');
  container.appendChild(inputElement);

  const addButton = document.createElement('button');
  addButton.textContent = 'Add';
  inputElement.classList.add('add-name');
  container.appendChild(addButton);
}

function listNames() {
  if (names.length >= 1) {
    document.querySelector('.js-list').innerHTML = `List: ${names}`;
  } else {
    document.querySelector('.js-list').innerHTML = 'List is empty, add at least one name to show the list.'; 
  }
}

function drawName(names) {
  if (names.length < 2) {
    document.querySelector('.js-draw').innerHTML = 'Add at least two names to drawn.';
  } else {
    const randomIndex = Math.floor(Math.random() * names.length);

    document.querySelector('.js-draw').innerHTML = `The winner was ${names[randomIndex]}, congrats!`
  }
}

