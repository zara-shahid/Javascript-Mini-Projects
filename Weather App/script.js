document.getElementById("getWeatherBtn").addEventListener("click", getWeather);

function getWeather() {
  const location = document.getElementById("locationInput").value.trim();
  const apiKey = "2a48e0405ebab86a4c1d2589df145a4b"; // Replace with your real OpenWeather API key

  if (!location) {
    document.getElementById("weatherResult").innerHTML = "Please enter a city name.";
    return;
  }

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      if (data.cod === 200) {
        const weather = data.weather[0].description;
        const temperature = data.main.temp;
        const iconCode = data.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

        document.getElementById("weatherResult").innerHTML = `
          <h2>${data.name}</h2>
          <img src="${iconUrl}" alt="${weather}">
          <p>${weather}</p>
          <p>${temperature}°C</p>
        `;
      } else {
        document.getElementById("weatherResult").innerHTML =
          "Error: City not found.";
      }
    })
    .catch(() => {
      document.getElementById("weatherResult").innerHTML =
        "Error fetching weather data.";
    });
}
