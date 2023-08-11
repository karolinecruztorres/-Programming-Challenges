let names = ['Beth', 'Eliza', 'John', 'Clemens', 'Martin', 'Cheryl'];

if (names.length >= 1) {
  document.querySelector('.js-list').innerHTML = `List: ${names}`;
}

for (let i = 0; i < names.length; i++) {
  let drawnName = Math.random(names[i]);
  if (names.length > 1) {
    document.querySelector('.js-drawn').innerHTML = `The name drawn was ${names}`;
  }
}


