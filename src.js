function displayTemperature(response) {
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
  descriptionElement.innerHTML = response.data.weather[0].main;
  minTempElement.innerHTML = Math.round(response.data.main.temp_min);
  maxTempElement.innerHTML = Math.round(response.data.main.temp_max);
  feelsTempElement.innerHTML = Math.round(response.data.main.feels_like);
  humiditylement.innerHTML = Math.round(response.data.main.humidity);
  windElement.innerHTML = Math.round(response.data.wind.speed);
}

function search(city) {
  apiKey = "bf90d790470a54580c421cafda702bd7";
  apiUrlMain = "https://api.openweathermap.org/data/2.5/weather?";
  apiUrlEnd = `q=${city}&appid=${apiKey}&units=metric`;
  apiUrl = `${apiUrlMain}${apiUrlEnd}`;
  axios.get(apiUrl).then(displayTemperature);
}
search("New York");

function submitForm(event) {
  event.preventDefault();
  let cityInputElement = document.querySelector("#city-input");
  search(cityInputElement.value);
}
let form = document.querySelector("#search-form");
form.addEventListener("submit", submitForm);

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
  return `${day}, ${hours}:${minutes}`;
}
document.querySelector("#time").innerHTML = formatDate(new Date());
function formatDay(date) {
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

document.querySelector("#time").innerHTML = formatDay(new Date());
document.querySelector("#date").innerHTML = formatDay(new Date());
