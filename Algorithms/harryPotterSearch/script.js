async function fetchData() {
  const response = await fetch("https://hp-api.onrender.com/api/characters");
  const data = await response.json();
  return data;
};

//.catch(error => console.error('Error fetching data from API:', error));

document.getElementById("characterForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const inputValue = document.getElementById("dropdown").value;
  charactersInfo(inputValue);
});

function charactersInfo(inputValue) {
  fetchData().then((data) => {
    const result = data.filter(item => item.name.toLowerCase().includes(inputValue.toLowerCase()));
    console.log(inputValue);
  });
}

function selectList(value) {
  console.log(value);

  if (value === 'name') {
    document.querySelector("#charRadio").src = "images/black_icon.png";
    document.querySelector("#actorRadio").src = "images/goden_icon.png";
    
    fetchData().then(data => populateSelectChar(data)); 

  } else if (value === 'actor') {
    document.querySelector("#actorRadio").src = "images/black_icon.png";
    document.querySelector("#charRadio").src = "images/goden_icon.png";

    fetchData().then(data => populateSelectActor(data)); 
  }
};

const select = document.getElementById("dropdown");
select.innerHTML = '';

const defaultOption = document.createElement("option");
defaultOption.text = "Select the one you search for";
select.add(defaultOption);  

function populateSelectChar(data) {
  data.forEach(item => {
    const option = document.createElement("option");
    option.text = item.name;
    option.value = item.name;
    select.add(option);
  });
}

function populateSelectActor(data) {
  data.forEach(item => {
    const option = document.createElement("option");
    option.text = item.actor;
    option.value = item.actor;
    select.add(option);
  });
}