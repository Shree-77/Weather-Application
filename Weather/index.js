const API_KEY = '4b01ba555e2f402cbbb35347232908';
const API_URL = 'https://api.weatherapi.com/v1/forecast.json?';

const locationInput = document.getElementById('locationInput');
const searchButton = document.getElementById('searchButton');
const weatherInfo = document.getElementById('weatherInfo');

async function getWeather(location = 'valletta', days = '3') {
    const response = await fetch(API_URL + 'key=' + API_KEY + '&q=' + location + '&days=' + days + '&aqi=no&alerts=no', {
        mode: 'cors'
    });
    const data = await response.json();
    console.log(data);
    const weatherData = `
        <p>Location: ${data.location.name}, ${data.location.country}</p>
        <p>Temperature: ${data.current.temp_c}°C</p>
        <p>Condition: ${data.current.condition.text}</p>
    `;
    weatherInfo.innerHTML = weatherData;
}

searchButton.addEventListener('click', () => {
    const location = locationInput.value;
    getWeather(location);
});
