

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const API_KEY = "fb2a12d90e5e959c5cc3963fc54b3311";

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`

  fetch(url)
    .then((response) => response.json())
    .then(data => {
      const weather = document.querySelector(".weather span:first-child");

      const city = document.querySelector(".weather span:last-child");
      weather.innerText = data.weather[0].main;
      city.innerText = data.name;
    })
}
function onGeoError() {
  alert("Error")
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
