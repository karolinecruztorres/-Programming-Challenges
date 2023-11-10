async function callApi() {
  const response = await fetch("https://hp-api.onrender.com/api/characters");
  const data = await response.json();
  return data;
};

document.querySelector("#characterForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const inputValue = document.querySelector("#dropdown").value;
  charactersInfo(inputValue);
});

function charactersInfo(inputValue) {
  callApi().then((data) => {
    const result = data.filter(item => item.name.toLowerCase().includes(inputValue.toLowerCase()));
      console.log("ok");
  });
}