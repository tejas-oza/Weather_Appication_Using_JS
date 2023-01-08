// Declare all the variables
let searchCity = document.getElementById("search-input");
let search = document.getElementById("search-btn");
let city = document.getElementById("city-name");
let weatherIcon = document.getElementById("icon");
let weatherType = document.getElementById("weather-type");
let temp = document.getElementById("temp");
let humidity = document.getElementById("humidity");
let wind = document.getElementById("wind");

// Fetch weather data
let getWeatherData = (location) => {
  let key = // Enter your own API key ;
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${key}&units=metric`
  )
    .then((resp) => {
      return resp.json();
    })
    .then((data) => {
      setWeatherData(data);
    })
    .catch(() => {
      city.innerHTML = "City Not Found";
    });
};

// Set weather data
let setWeatherData = (data) => {
  city.innerHTML = data.name;
  weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  weatherType.innerHTML = data.weather[0].main;
  temp.innerHTML = data.main.temp;
  humidity.innerHTML = `${data.main.humidity}%`;
  wind.innerHTML = `${data.wind.speed}km/h`;
};

// add click event to search button to fetch data
search.addEventListener("click", (e) => {
  e.preventDefault();
  const location = searchCity.value;
  getWeatherData(location);
});

