
let apiUrl = "https://api.open-meteo.com/v1/forecast?latitude=55.6761&longitude=12.5683&current_weather=true"

let temp
let weatherCode
let windSpeed

async function setup(){
let response = await fetch(apiUrl)
let data = await response.json()

let codes = await (await fetch('./weather.json')).json()

console.log(data)
console.log(codes[0])

temp = data.current_weather.temperature
weatherCode = data.current_weather.weathercode
windSpeed = data.current_weather.windspeed
if(data.current_weather.is_day == "1"){
  weatherDescription = codes[weatherCode].day.description
}else{
  weatherDescription = codes[weatherCode].night.description
}
 document.getElementById('temperature').textContent = `Temperature: ${temp} °C`
 document.getElementById('weatherCode').textContent = `Weather Code: ${weatherDescription}`;
 document.getElementById('windSpeed').textContent = `Wind Speed: ${windSpeed} m/s`;

console.log(temp, weatherCode, windSpeed)
}

