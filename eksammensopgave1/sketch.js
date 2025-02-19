
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
 document.getElementById('weatherCode').textContent = `Weather: ${weatherDescription}`;
 document.getElementById('windSpeed').textContent = `Wind Speed: ${windSpeed} m/s`;

console.log(temp, weatherCode, windSpeed)
}

async function getWeather() {
  let city = document.getElementById('cityInput').value;
  let url = `https://nominatim.openstreetmap.org/search?q=${city}&format=json`;

  let response1 = await fetch(url)
  let data1 = await response1.json()

  let lat = data1[1].lat
  let lon = data1[1].lon

  console.log(data1)

  let cityUrl =  `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`

  let response2 = await fetch(cityUrl)
  let data2 = await response2.json()

  console.log("data2: "+data2)
  let codes = await (await fetch('./weather.json')).json()

  temp = data2.current_weather.temperature
  weatherCode = data2.current_weather.weathercode
  windSpeed = data2.current_weather.windspeed
  if(data2.current_weather.is_day == "1"){
    weatherDescription = codes[weatherCode].day.description
  }else{
    weatherDescription = codes[weatherCode].night.description
  }

 document.getElementById('temperature').textContent = `Temperature: ${temp} °C`
 document.getElementById('weatherCode').textContent = `Weather: ${weatherDescription}`;
 document.getElementById('windSpeed').textContent = `Wind Speed: ${windSpeed} m/s`;


}