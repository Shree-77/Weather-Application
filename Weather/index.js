const API_KEY = '4b01ba555e2f402cbbb35347232908';
const API_URL = 'https://api.weatherapi.com/v1/forecast.json?';

const locationInput = document.getElementById('locationInput');
const searchButton = document.getElementById('searchButton');
const weatherInfo = document.getElementById('weatherInfo');

function isDay(is_day, body) {
    body.style.backgroundImage = 'none'; 
    if (is_day) {
        const dayBackgroundURL = './static/images/day.svg';
         body.style.backgroundImage = `url(${dayBackgroundURL})`;
    } else {
        const nightBackgroundURL = './static/images/night.svg';
        body.style.backgroundImage = `url(${nightBackgroundURL})`;
    }
}

async function getWeather(location, days = '3') {
    const response = await fetch(API_URL + 'key=' + API_KEY + '&q=' + location + '&days=' + days + '&aqi=no&alerts=no', {
        mode: 'cors'
    });
    const data = await response.json();
    if (data.error) {
        alert('City not found');
        return; 
    }
    console.log(data);
    const is_Day = data.current.is_day === 1;
    const weatherData = `
        <p>Location: ${data.location.name}, ${data.location.country}</p>
        <p>Celsius: ${data.current.temp_c}°C</p>
        <p>Farenheit : ${data.current.temp_f}°F</p>
        <p>Condition: ${data.current.condition.text}</p>
    `;

    weatherInfo.innerHTML = weatherData;
    isDay(is_Day, document.body);
}
searchButton.addEventListener('click', () => {
    const location = locationInput.value;
    getWeather(location);
});

