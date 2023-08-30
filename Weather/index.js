const apiKey = 'lDTXnCLt9yBYkKiRzl8UmbEazHYn4ALD';
const city = 'Vellore';




async function getLocation() {
    const response = await fetch(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apiKey}&q=${city}`, { mode: 'cors' });
    const location = await response.json();
    const cityName = location[0]["Key"];
    getWeather(`${cityName}`);
}

async function getWeather(CityKey) {
    const response = await fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/1day/${CityKey}?apikey=${apiKey}`, { mode: 'cors' });
    const weather = await response.json();
    console.log(weather);
}

getLocation();

