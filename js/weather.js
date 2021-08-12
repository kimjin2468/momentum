const API_KEY = "fe883bb2ef774edccb5bc40482875851";

function onGeoOk(position){
  console.dir(position)
  const lat = position.coords.latitude;
  const lon = position.coords.longitude; 
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  fetch(url)
  .then(response => response.json())
  .then(data => {
    const weather = document.querySelector("#weather span:first-child")
    const city = document.querySelector("#weather span:last-child")
    city.innerText = `현재 위치:${data.name}`;    
    weather.innerText = `현재 날씨: ${data.weather[0].main} / ${Math.floor(data.main.temp)}도`;
  })
}
function onGeoError(){alert("Can't find you. No weather for you.")}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError)

console.dir(navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError))