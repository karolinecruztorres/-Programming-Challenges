function rollDice() {
  const container = document.querySelector(".container");
  const quantityInput = document.getElementById("quantity"); 
  const quantity = quantityInput.value; 

  const existingDiv = document.getElementById("dices");
  if (existingDiv) {
    existingDiv.remove();
  }
  
  const div = document.createElement("div");
  div.id = "dices";
  
  const p = document.createElement("p");
  p.textContent = "Dice: ";
  div.appendChild(p);
  
  if (quantity <= 12) {
    for (let i = 1; i <= quantity; i++) {
      const randomNumber = Math.floor(Math.random() * 6) + 1;
      const img = document.createElement("img");
  
      if (i <= quantity) {
        img.src = `images/dice${randomNumber}.png`; 
        img.alt = `Side ${randomNumber} of the dice`; 
        div.appendChild(img);
      }
      
      if (i < quantity) {
        p.textContent += `${randomNumber}, `; 
      } else {
        p.textContent += `${randomNumber}`; 
      }
    }
  } else {
    p.innerHTML = `<span>You can roll up to 12 dice at a time.</span>`; 
  }
  
  container.appendChild(div);
  quantityInput.value = "";
}
