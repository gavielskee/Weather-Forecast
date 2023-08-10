// Weather API Key
var key = "f4633e2e21e30b07d0578aa2be38d831";
var input = document.querySelector(".input")
var btn = document.querySelector(".btn")


btn.addEventListener("click", function() {
    var city = input.value
    fetchCurrent(city)
})

// var queryURL: "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + f4633e2e21e30b07d0578aa2be38d831;

function fetchCurrent(cityName) {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + key)
    .then(function(res) {
        return res.json()
    })
    .then(function(data) {
        console.log(data)
    })
}