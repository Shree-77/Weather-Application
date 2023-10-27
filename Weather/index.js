const apiKey = 'a11d5e4b0429b36bea1270b7d91dfdf3';
const submit = document.querySelector('button');
const output = document.querySelector('.output');
const TempF = document.createElement('p')
const TempC = document.createElement('p');
const Desc = document.createElement('p');

TempF.classList.add('TempF');
TempC.classList.add('TempC');
Desc.classList.add('Desc');


async function getLocation(city) {
    const response = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${apiKey}`, { mode: 'cors' });
    const location = await response.json();
    if (location.length > 0) {
        const lat = location[0]["lat"];
        const lon = location[0]["lon"];
        getWeather(lat, lon);
    } else {
        alert('City not Found');
    }

}

async function getWeather(lat, long) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}`, { mode: 'cors' });
    const weather = await response.json();
    const temp = weather['main']['temp'];
    Desc.textContent = `Summary : ${weather['weather'][0]['description']}`;
    TempF.textContent = `Farenheit : ${(convertF(temp).toFixed(2))}`;
    TempC.textContent = `Celcius : ${(convertC(temp).toFixed(2))}`;
    console.log(TempC);
    console.log(TempF);
    console.log(Desc);
    output.appendChild(TempF);
    output.appendChild(TempC);
    output.appendChild(Desc);

}

function convertF(Kelvin) {
    return (Kelvin - 273.15) * (9 / 5) + 32;
}
function convertC(Kelvin) {
    return Kelvin - 273.15;
}



submit.addEventListener('click', (e) => {
    e.preventDefault();
    let city = document.querySelector('input').value;
    getLocation(city);
})

