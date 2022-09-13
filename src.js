function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].main;
}

apiKey = "bf90d790470a54580c421cafda702bd7";
apiUrlMain = "https://api.openweathermap.org/data/2.5/weather?";
apiUrlEnd = `q=Boston&appid=${apiKey}&units=metric`;
apiUrl = `${apiUrlMain}${apiUrlEnd}`;

axios.get(apiUrl).then(displayTemperature);
