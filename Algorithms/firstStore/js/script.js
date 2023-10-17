products.forEach(product => {
  let productName = product.name;
  let squareDiv = document.getElementById("square");
  let newColDiv = document.createElement("div");
  newColDiv.classList.add("col");
  
  newColDiv.innerHTML = `
    <div class="card shadow-sm">
      <svg class="card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" preserveAspectRatio="xMidYMid slice" focusable="false">
        <rect width="100%" height="100%" fill="#55595c"/>
      </svg>
      <div class="card-body">
        <p class="card-text">${productName}</p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
            <button type="button" class="btn btn-sm btn-outline-secondary">Add to Cart</button>
            <button type="button" class="btn btn-sm btn-outline-secondary">Buy</button>
          </div>
        </div>
      </div>
    </div>
  `;
  
  squareDiv.appendChild(newColDiv);
});