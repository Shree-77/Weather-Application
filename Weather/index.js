const API_KEY = '4b01ba555e2f402cbbb35347232908';
const API_URL= 'https://api.weatherapi.com/v1/forecast.json?'


async function getWeather(location = 'valletta', days = '3') {
    const response = await fetch(API_URL + 'key=' + API_KEY + '&q=' + location + '&days=' + days + '&aqi=no&alerts=no', {
        mode: 'cors'
    });
    const data = await response.json();

     console.log(data);

}
getWeather();




