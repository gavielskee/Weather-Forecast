// Weather API Key
var key = "f4633e2e21e30b07d0578aa2be38d831";
var input = document.querySelector(".input")
var btn = document.querySelector(".btn")


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