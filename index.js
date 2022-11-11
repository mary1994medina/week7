function formatDate(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  let minutes = date.getMinutes();
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
  return `${day} ${hours}:${minutes}`;
}

function showWeather(response) {
  console.log(response.data);
  document.querySelector(".city-label").innerHTML = response.data.name;
  document.querySelector(".current_temp").innerHTML = `${Math.round(
    response.data.main.temp
  )}°C`;
  let cloudElement = document.querySelector(".cloud_weather");
  cloudElement.innerHTML = response.data.weather[0].description.toUpperCase();
  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = response.data.main.humidity;
  let windElement = document.querySelector("#wind");
  windElement.innerHTML = response.data.wind.speed;
  let dateTime = document.querySelector(".date_time");
  dateTime.innerHTML = formatDate(response.data.dt * 1000);
  let iconElement = document.querySelector("#icon_image");
  iconElement.setAttribute(
    "src",
    `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
}

function searchCity(city) {
  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showWeather);
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector(".cityname").value;
  searchCity(city);
}
let searchForm = document.querySelector(".search-form");
searchForm.addEventListener("submit", handleSubmit);

function displayFahrenheitTemperature(event) {
  event.preventDefault();
  let fahrenheitTemperature = (14 * 9) / 5 + 32;
  alert("Link clicked");
  alert(fahrenheitTemperature);
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = fahrenheitTemperature;
}

let fahrenheitElement = document.querySelector("#fahrenheit");
fahrenheitElement.addEventListener("click", displayFahrenheitTemperature);
