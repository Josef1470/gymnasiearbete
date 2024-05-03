document.getElementById("vader-form").addEventListener("submit", function(){
    event.preventDefault();

    var city = document.getElementById("vader-place-search").value;



    var URL_change = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=0cc4f58d720260238351a2d3f4b4c2f4";


fetch(URL_change)
.then(res => res.json())
.then(data => {


var city = document.getElementById("vader-place-search").value;
document.getElementById("city").innerHTML = "Väder info för '" + city + "':"
    
document.getElementById("temp").innerHTML = "Temperatur just nu: " + (Math.round(data.main.temp)) + "°C";

document.getElementById("feels-like").innerHTML = "Känns som: " + (Math.round(data.main.feels_like)) + "°C"

document.getElementById("max-temp").innerHTML = "Högsta temp. för dagen: " + (Math.round(data.main.temp_max)) + "°C"

document.getElementById("min-temp").innerHTML = "Lägsta temp. för dagen: " + (Math.round(data.main.temp_min)) + "°C"

})})
