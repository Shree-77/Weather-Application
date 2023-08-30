const apiKey = 'lDTXnCLt9yBYkKiRzl8UmbEazHYn4ALD';
const submit = document.querySelector('button');
let city = '';


const output = document.querySelector('.Output');
const Cname = document.createElement('h3');
Cname.textContent = city;
Cname.classList.add('cityName');

const minF = document.createElement('p');
minF.classList.add('MinF');
const maxF = document.createElement('p');
maxF.classList.add('MaxF');
const minC = document.createElement('p');
minC.classList.add('MinC');
const maxC = document.createElement('p');
maxC.classList.add('MaxC');
const summary = document.createElement('p');
summary.classList.add('summary');

console.log(city);

async function getLocation() {
    const response = await fetch(`https://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apiKey}&q=${city}`, { mode: 'cors' });
    const location = await response.json();
    if (location.length > 0) {
        const cityName = location[0]["Key"];
        getWeather(`${cityName}`);
    } else {
        alert('Location not Found');
    }
}

async function getWeather(CityKey) {
    const response = await fetch(`https://dataservice.accuweather.com/forecasts/v1/daily/1day/${CityKey}?apikey=${apiKey}`, { mode: 'cors' });
    const weather = await response.json();
    let FarenheitMin = `${weather["DailyForecasts"][0]["Temperature"]["Minimum"]['Value']}`;
    let FarenheitMax = `${weather["DailyForecasts"][0]["Temperature"]["Maximum"]['Value']}`;
    let CelsiusMin = ((FarenheitMin - 32) * (5 / 9)).toFixed(2);
    let CelsiusMax = ((FarenheitMax - 32) * (5 / 9)).toFixed(2);
    let desc = `${weather["DailyForecasts"][0]["Day"]["IconPhrase"]}`
    maxF.textContent = `Maximum Farenheit = ${FarenheitMax}`;
    minF.textContent = `Minimum Fareheit = ${FarenheitMin}`;
    maxC.textContent = `Maximum Celcius = ${CelsiusMax}`;
    minC.textContent = `Minimum Celcius =${CelsiusMin}`;
    summary.textContent = `Summary = ${desc}`;
}


output.appendChild(Cname);
output.appendChild(minF);
output.appendChild(maxF);
output.appendChild(minC);
output.appendChild(maxC);
output.appendChild(summary);
submit.addEventListener('click', (e) => {
    e.preventDefault();
    city = document.querySelector('input').value;
    Cname.textContent = `City : ${city}`;
    getLocation();
})

