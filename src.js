function formatDay(timestamp) {
  let date = new Date(timestamp * 1000);

  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let day = days[date.getDay()];
  return day;
}

function displayForecast(response) {
  console.log(response.data);
  let forecast = response.data.daily;
  let forecastElement = document.querySelector("#forecast");
  let forecastHTML = `<div class="row">`;
  forecast.forEach(function (forecastDay, index) {
    if (index < 6) {
      forecastHTML =
        forecastHTML +
        `<div class="col-2">  
    <div class="next-days"> ${formatDay(forecastDay.dt)}</div>
    <div>
    <img
    id="forecast-img"
    src="http://openweathermap.org/img/wn/${forecastDay.weather[0].icon}@2x.png"
    alt=""
    width="46"
    />
    </div>
    <div class="weather-forecast-temperature">
    <span class="weeather-forecast-temperature-max">${Math.round(
      forecastDay.temp.max
    )}° </span>
    <span class="weather-forecast-temperature-min"> ${Math.round(
      forecastDay.temp.min
    )}° </span>
    </div>
    </div>
    `;
    }
  });
  forecastHTML = forecastHTML + `</div>`;
  forecastElement.innerHTML = forecastHTML;
}

function getForecast(coordinates) {
  apiKey = "bf90d790470a54580c421cafda702bd7";
  apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayForecast);
}

function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let minTempElement = document.querySelector("#minTemp");
  let maxTempElement = document.querySelector("#maxTemp");
  let feelsTempElement = document.querySelector("#feelsLike");
  let humiditylement = document.querySelector("#humidity");
  let windElement = document.querySelector("#windSpeed");
  let iconElement = document.querySelector("#icon");
  celciusTemperature = response.data.main.temp;
  temperatureElement.innerHTML = Math.round(celciusTemperature);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].main;
  minTempElement.innerHTML = Math.round(response.data.main.temp_min);
  maxTempElement.innerHTML = Math.round(response.data.main.temp_max);
  feelsTempElement.innerHTML = Math.round(response.data.main.feels_like);
  humiditylement.innerHTML = Math.round(response.data.main.humidity);
  windElement.innerHTML = Math.round(response.data.wind.speed);
  iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  getForecast(response.data.coord);
}

function search(city) {
  apiKey = "bf90d790470a54580c421cafda702bd7";
  apiUrlMain = "https://api.openweathermap.org/data/2.5/weather?";
  apiUrlEnd = `q=${city}&appid=${apiKey}&units=metric`;
  apiUrl = `${apiUrlMain}${apiUrlEnd}`;
  axios.get(apiUrl).then(displayTemperature);
}

function submitForm(event) {
  event.preventDefault();
  let cityInputElement = document.querySelector("#city-input");
  search(cityInputElement.value);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", submitForm);

search("New York");

function formatDate(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let currentDate = date.getDate();
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let month = months[date.getMonth()];
  let year = date.getFullYear();
  return `${day}, ${hours}:${minutes}</br>${currentDate} ${month} ${year}`;
}

document.querySelector("#time").innerHTML = formatDate(new Date());
