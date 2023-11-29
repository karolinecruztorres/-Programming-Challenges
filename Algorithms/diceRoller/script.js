function rollDice() {
  const quantityInput = document.getElementById("quantity"); 
  const quantity = quantityInput.value; 
  
  const div = document.createElement("div");
  div.id = "dices";
  
  const p = document.createElement("p");
  p.textContent = "Dice: ";
  div.appendChild(p);
  
  if (quantity <= 6) {
    for (let i = 1; i <= quantity; i++) {
      const img = document.createElement("img");
      img.src = `images/dice${i}.png`; 
      div.appendChild(img);
    }
    
    for (let i = 1; i <= quantity; i++) {
      if (i < quantity) {
        p.textContent += `${i},`; 
      } else {
        p.textContent += `${i}`; 
      }
    }
    
  } else {
    p.innerHTML = `<span> A dice only has 6 sides, choose from 1 to 6</span>`; 
  }
  
  document.body.appendChild(div);

  quantityInput.value = "";
}
