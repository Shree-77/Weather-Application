/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./Weather/index.js":
/*!**************************!*\
  !*** ./Weather/index.js ***!
  \**************************/
/***/ (() => {

eval("const apiKey = 'a11d5e4b0429b36bea1270b7d91dfdf3';\nconst submit = document.querySelector('button');\nconst output = document.querySelector('.Output');\nconst TempF = document.createElement('p')\nconst TempC = document.createElement('p');\nconst Desc = document.createElement('p');\n\nTempF.classList.add('TempF');\nTempC.classList.add('TempC');\nDesc.classList.add('Desc');\n\n\nasync function getLocation(city) {\n    const response = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${apiKey}`, { mode: 'cors' });\n    const location = await response.json();\n    if (location.length > 0) {\n        const lat = location[0][\"lat\"];\n        const lon = location[0][\"lon\"];\n        getWeather(lat, lon);\n    } else {\n        alert('City not Found');\n    }\n\n}\n\nasync function getWeather(lat, long) {\n    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}`, { mode: 'cors' });\n    const weather = await response.json();\n    // console.log(weather);\n    const temp = weather['main']['temp'];\n    Desc.textContent = `Summary : ${weather['weather'][0]['description']}`;\n    TempF.textContent = `Farenheit : ${(convertF(temp).toFixed(2))}`;\n    TempC.textContent = `Celcius : ${(convertC(temp).toFixed(2))}`;\n    output.appendChild(TempF);\n    output.appendChild(TempC);\n    output.appendChild(Desc);\n\n}\n\nfunction convertF(Kelvin) {\n    return (Kelvin - 273.15) * (9 / 5) + 32;\n}\nfunction convertC(Kelvin) {\n    return Kelvin - 273.15;\n}\n\n\n\nsubmit.addEventListener('click', (e) => {\n    e.preventDefault();\n    let city = document.querySelector('input').value;\n    getLocation(city);\n})\n\n\n\n//# sourceURL=webpack://weather-application/./Weather/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./Weather/index.js"]();
/******/ 	
/******/ })()
;