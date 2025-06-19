const weatherInfo = document.querySelector('#weather-info');

const url = `https://api.openweathermap.org/data/2.5/forecast?units=metric&lat=-23.55&lon=-51.44&appid=d9dd6d8a73d9ff6ac1c95ae92c271cf1`;

function capitalizeEachWord(sentence) {
  return sentence
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

function hourMinute(time){
    const date = new Date(time * 1000);
    return date.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    });
}

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayCurrentWeather(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayCurrentWeather(data) {
    let descriptionCaptalized = data.list[0].weather[0].description;
    weatherInfo.innerHTML = `
        <div>${data.list[0].main.temp.toFixed(0)}&deg;C</div>
        <div>${capitalizeEachWord(descriptionCaptalized)}</div>
        <div>High: ${data.list[0].main.temp_max.toFixed(0)}</div>
        <div>Low: ${data.list[0].main.temp_min.toFixed(0)}</div>
        <div>Humidity: ${data.list[0].main.humidity}%</div>
        <div>Sunrise: ${hourMinute(data.city.sunrise)}</div>
        <div>Sunset: ${hourMinute(data.city.sunset)}</div>
    `;
}

apiFetch();

