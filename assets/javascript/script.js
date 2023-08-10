// Weather API Key
var key = "f4633e2e21e30b07d0578aa2be38d831";
var input = document.querySelector(".input")
var btn = document.querySelector(".btn")
var cityInfo = document.querySelector(".cityInfo")
var icon = document.querySelector(".icon")
var temp = document.querySelector(".temp")
var wind = document.querySelector(".wind")
var humidity = document.querySelector(".humidity")

var forecastCard = document.querySelectorAll(".forecastCard")


btn.addEventListener("click", function () {
    var history = JSON.parse(localStorage.getItem("cityHistory")) || []
    var city = input.value
    fetchCurrent(city)
    fetchForecast(city)
    history.push(city)
    localStorage.setItem("cityHistory", JSON.stringify(history))
    renderHistory()
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
            for(let i = 0; i < forecastCard.length; i++) {
                forecastCard[i].innerHTML = ""
                var index = i * 8 + 4
                var currentDate = new Date(data.list[index].dt * 1000)
                var forecastMonth = currentDate.getMonth() + 1
                var forecastDay = currentDate.getDate()
                var forecastYear = currentDate.getFullYear()
                var dateEl = document.createElement("h4")
                var icon = document.createElement("img")
                var tempEl = document.createElement("p")
                var windEl = document.createElement("p")
                var humidityEl = document.createElement("p")
                dateEl.innerHTML = "(" + forecastMonth + "/" + forecastDay + "/" + forecastYear + ")"
                icon.setAttribute("src", "https://openweathermap.org/img/wn/" + data.list[index].weather[0].icon + "@2x.png")
                icon.setAttribute("alt",  data.list[index].weather[0].description)
                tempEl.innerHTML = "Temp: " + data.list[index].main.temp + "&#176F"
                windEl.innerHTML = "Wind: " + data.list[index].wind.speed + " MPH"
                humidityEl.innerHTML = "Humidity: " + data.list[index].main.humidity + "%"
                forecastCard[i].append(icon)
                forecastCard[i].append(tempEl)
                forecastCard[i].append(dateEl)
                forecastCard[i].append(windEl)
                forecastCard[i].append(humidityEl)
            }   
        })  
}

function renderHistory() {
    
}