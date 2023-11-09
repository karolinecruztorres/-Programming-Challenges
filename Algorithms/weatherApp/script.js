document.querySelector("form").addEventListener(
  "submit", (e) => {
    e.preventDefault();    
    const inputValue = document.querySelector(".cityName").value;
    const api_url = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&units=metric&appid=005522df3133979a3460cf46f44cdbb9`;
    fetch(api_url).then((res) => res.json()).then((data) => {
      console.log(data);
      document.querySelector(".city").innerHTML = data.name;
      document.querySelector("#weatherIcon").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      document.querySelector(".temperature").innerHTML = Math.floor(data.main.temp) + "°C";
      document.querySelector(".weather").innerHTML = data.weather[0].description;
      document.querySelector(".feelsLike").innerHTML = Math.floor(data.main.feels_like) + "°C";
      document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
      document.querySelector(".windSpeed").innerHTML = Math.floor(data.wind.speed * 3.6) + " km/h";
    });
  }
);
