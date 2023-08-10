// Weather API Key
var key = "f4633e2e21e30b07d0578aa2be38d831";
var input = document.querySelector(".input")
var btn = document.querySelector(".btn")
var cityInfo = document.querySelector(".cityInfo")
var icon = document.querySelector(".icon")
var temp = document.querySelector(".temp")
var wind = document.querySelector(".wind")
var humidity = document.querySelector(".humidity")

btn.addEventListener("click", function () {
    var city = input.value
    fetchCurrent(city)
    fetchForecast(city)
})

function fetchCurrent(cityName) {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + key + "&units=imperial")
        .then(function (res) {
            return res.json()
        })
        .then(function (data) {
            console.log(data)
            var currentDate = new Date()
            var month = currentDate.getMonth() + 1
            var day = currentDate.getDate()
            var year = currentDate.getFullYear()
            cityInfo.innerHTML = data.name + " " + "(" + month + "/" + day + "/" + year + ")"
            icon.setAttribute("src", "https://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png")
            icon.setAttribute("alt",  data.weather[0].description)
            temp.innerHTML = "Temp: " + data.main.temp + "&#176F"
            wind.innerHTML = "Wind: " + data.wind.speed + " MPH"
            humidity.innerHTML = "Humidity: " + data.main.humidity + "%"
        })
}

function fetchForecast(cityName) {
    fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=" + key + "&units=imperial")
        .then(function (res) {
            return res.json()
        })
        .then(function (data) {
            console.log(data)

        })
}