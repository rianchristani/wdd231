const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = `//api.openweathermap.org/data/2.5/weather?lat=${'49.74'}&lon=${'6.63'}&appid=${'d9dd6d8a73d9ff6ac1c95ae92c271cf1'}&units=metric`;

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
        const data = await response.json()
        console.log(data)
        displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error)
    }
}

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp.toFixed(0)}&degC`
    captionDesc.innerHTML= data.weather[0].description

    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`

    weatherIcon.setAttribute('src', iconsrc),
    weatherIcon.setAttribute('alt', data.weather[0].description)
}

apiFetch();