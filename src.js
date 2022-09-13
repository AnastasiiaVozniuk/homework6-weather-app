function displayTemperature(response) {
  console.log(response.data);
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let minTempElement = document.querySelector("#minTemp");
  let maxTempElement = document.querySelector("#maxTemp");
  let feelsTempElement = document.querySelector("#feelsLike");
  let humiditylement = document.querySelector("#humidity");
  let windElement = document.querySelector("#windSpeed");

  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  minTempElement.innerHTML = Math.round(response.data.main.temp_min);
  maxTempElement.innerHTML = Math.round(response.data.main.temp_max);
  feelsTempElement.innerHTML = Math.round(response.data.main.feels_like);
  humiditylement.innerHTML = Math.round(response.data.main.humidity);
  windElement.innerHTML = Math.round(response.data.wind.speed);
}

apiKey = "bf90d790470a54580c421cafda702bd7";
apiUrlMain = "https://api.openweathermap.org/data/2.5/weather?";
apiUrlEnd = `q=Boston&appid=${apiKey}&units=metric`;
apiUrl = `${apiUrlMain}${apiUrlEnd}`;

axios.get(apiUrl).then(displayTemperature);
