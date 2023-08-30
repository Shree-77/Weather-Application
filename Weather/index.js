const apiKey = 'lDTXnCLt9yBYkKiRzl8UmbEazHYn4ALD';
const city = 'Vellore';
const output = document.querySelector('.Output');
const min = document.createElement('div');
min.classList.add('Min');
const max = document.createElement('div');
max.classList.add('Max');



async function getLocation() {
    const response = await fetch(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apiKey}&q=${city}`, { mode: 'cors' });
    const location = await response.json();
    const cityName = location[0]["Key"];
    getWeather(`${cityName}`);
}

async function getWeather(CityKey) {
    const response = await fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/1day/${CityKey}?apikey=${apiKey}`, { mode: 'cors' });
    const weather = await response.json();
    min.textContent = `${weather["DailyForecasts"][0]["Temperature"]["Minimum"]['Value']}`;
    max.textContent = `${weather["DailyForecasts"][0]["Temperature"]["Maximum"]['Value']}`;

}

getLocation();

output.appendChild(min);
output.appendChild(max);