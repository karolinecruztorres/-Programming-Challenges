async function apiUrl() {
  const response = await fetch("https://api.thecatapi.com/v1/images/search?api_key=live_HtkgG5kHtjoadrXaGptZa9geR1D12lBuFhCeC6J62uiWFqwnhl6LYYREm79Y3G3f");
  const data = await response.json();
  console.log(data);
  document.querySelector(".catImage").src = `${data[0].url}`;
};

apiUrl();
