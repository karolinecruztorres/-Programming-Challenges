const temp = document.getElementById("temp");
const toF = document.getElementById("toF");
const toC = document.getElementById("toC");
const submitBtn = document.getElementById("submitBtn");
const container = document.querySelector(".container");

submitBtn.onclick = function(event){
  event.preventDefault();

  const existingResult = document.getElementById("result");
  if (existingResult) {
    container.removeChild(existingResult);
  }
  
  const p = document.createElement("p");
  p.id = "result";

  if (toF.checked) {
    const fahrenheit = Number((temp.value * 1.8) + 32).toFixed(0);
    p.innerHTML = `${fahrenheit} &#8451;`;
  } else if (toC.checked) {
    const celsius = Number((temp.value -32) * .5556).toFixed(0);
    p.innerHTML = `${celsius} &#8457;`;
  } else {
    p.textContent = `Select a unit!`;
  }

  container.appendChild(p);
  temp.value = "";
}
