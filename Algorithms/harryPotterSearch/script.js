async function fetchData() {
  try {
    const response = await fetch("https://hp-api.onrender.com/api/characters");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data from API:', error);
    const body = document.querySelector("body");
    body.innerHTML = "<h1>We are unable to connect with the Ministry of Magic</h1>";
    const button = document.createElement("button");
    button.textContent = "Try Again";           
    button.id = "btnReload";           
    body.appendChild(button);
    body.id = "bodyError";

    document.getElementById("btnReload").addEventListener("click", function() {
      location.reload();
    });
  }
};

document.getElementById("characterForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const optionSelected = document.getElementById("dropdown").value;
  charactersInfo(optionSelected);
});

let radioValue = "";

document.querySelectorAll('input[type="radio"]').forEach(radio => {
  radio.addEventListener('click', function() {
    selectList(this.value);
    radioValue = this.value;
  });
});

function selectList(radioValue) {
  if (radioValue === 'name') {
    document.querySelector("#charRadio").src = "images/selected_icon.png";
    document.querySelector("#actorRadio").src = "images/unselected_icon.png";
   
    fetchData().then(data => populateSelect(data, radioValue)); 

  } else if (radioValue === 'actor') {
    document.querySelector("#actorRadio").src = "images/selected_icon.png";
    document.querySelector("#charRadio").src = "images/unselected_icon.png";
 
    fetchData().then(data => populateSelect(data, radioValue)); 
  }
};

function populateSelect(data, radioValue) {
  const select = document.getElementById("dropdown");
  select.innerHTML = '<option value="">Select the one you search for</option>';
  
  const filteredData = data.filter(item => Object.values(item[radioValue]).some(value => value !== ""));   
  filteredData.forEach(item => {
    const option = document.createElement("option");
    option.text = item[radioValue];
    option.value = item[radioValue];
    select.add(option);
  });
}

function charactersInfo(optionSelected) {
  fetchData().then((data) => {
    const result = data.filter(item => item[radioValue].includes(optionSelected))[0];

    const divInfo = document.querySelector("#characterData");
    divInfo.innerHTML = "";
    divInfo.style.display = "grid";
    divInfo.style.gridTemplateColumns = "repeat(3, 1fr)";

    const propriedadesExibidas = ['image', 'name', 'actor', 'house', 'species', 'dateOfBirth', 'patronus', 'wand', 'wizard'];
    
    propriedadesExibidas.forEach(prop => {
      const p = document.createElement("p");
  
      if (prop === 'image') {
        const img = document.createElement('img');
        img.src = result[prop];
        img.alt = result.name;
        img.id = "dataImg";
        divInfo.appendChild(img);
      } else {
        p.textContent = `${capitalizeFirstLetter(prop)}: ${result[prop]}`;
        divInfo.appendChild(p).classList.add("data");
      }
    });
  });
 
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
};