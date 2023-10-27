document.addEventListener('DOMContentLoaded',()=>{
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

    isDay(is_Day, document.body);

    weatherInfo.innerHTML = '';

    data.forecast.forecastday.forEach((day, index) => {
        const dayIndex = ['Today', 'Tomorrow', 'The day after tomorrow'][index];
        const dayForecast = `
            <div class="day-forecast">
                <p>${dayIndex}</p>
                <p>Celsius Max: ${day.day.maxtemp_c}°C</p>
                <p>Celsius Min: ${day.day.mintemp_c}°C</p>
                <p>Condition: ${day.day.condition.text}</p>
            </div>
        `;

        const dayForecastDiv = document.createElement('div');
        dayForecastDiv.classList.add('day-forecast-container');
        dayForecastDiv.innerHTML = dayForecast;
        weatherInfo.appendChild(dayForecastDiv);
    });
}

searchButton.addEventListener('click', () => {
    const location = locationInput.value;
    getWeather(location);
});

})