const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const weatherForecast = document.querySelector('#weatherForecast')

const url = `https://api.openweathermap.org/data/2.5/forecast?units=metric&lat=-23.55&lon=-51.44&appid=d9dd6d8a73d9ff6ac1c95ae92c271cf1`;

function capitalizeEachWord(sentence) {
  return sentence
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

function hourMinute(time){
    const date = new Date(time * 1000);

    const transformingHHMM = date.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    })

    return transformingHHMM;
}

function weekDay(time){
    const data = new Date(time)
    const dayName = data.toLocaleDateString('en-US', {weekday: "long"});

    return dayName;
}


async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
        const data = await response.json()
        console.log(data)
        displayCurrentWeather(data);
        displayFutureWeather(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error)
    }
}

function displayCurrentWeather(data) {
    let descriptionCaptalized = data.list[0].weather[0].description;

    captionDesc.innerHTML = `${data.list[0].main.temp.toFixed(0)}&degC </br>${capitalizeEachWord(descriptionCaptalized)} </br>High: ${data.list[0].main.temp_max.toFixed(0)} </br>Low: ${data.list[0].main.temp_min.toFixed(0)}</br>Humidity: ${data.list[0].main.humidity}%</br>Sunrise: ${hourMinute(data.city.sunrise)}</br>Sunset: ${hourMinute(data.city.sunset)}`;

    const icon = data.list[0].weather[0].icon;
    const iconsrc = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    const iconsrc1x = `https://openweathermap.org/img/wn/${icon}.png`;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('srcset', `${iconsrc1x} 1x, ${iconsrc} 2x`);
    weatherIcon.setAttribute('width', '100');
    weatherIcon.setAttribute('height', '100');
    weatherIcon.setAttribute('alt', data.list[0].weather[0].description);
    weatherIcon.setAttribute('loading', 'lazy');
}

apiFetch();

