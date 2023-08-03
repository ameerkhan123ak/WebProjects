const apiKey = "863242cfb2b1d357e6093d9a4df19a4b";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector('#input-search');
const searchButton = document.querySelector('.search button');
const weather = document.querySelector('.weather');

const weatherIcon = document.querySelector('.weather-icon');
const errorDisplay = document.querySelector('.error-display');

searchButton.addEventListener('click', () => {
    console.log('button clicked')
    weather.style.display = "block";
    checkWeather(searchBox.value);
});

async function checkWeather(city)
{
    const response = await fetch(apiURL + city + `&appid=${apiKey}`);
    let data = await response.json();
    if(data.cod === '404' || searchBox.value === '')
    {
        errorDisplay.style.display = "block";
        weather.style.display = "none";
    }
    else 
    {
        errorDisplay.style.display = "none";
        weather.style.display = "block";
        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°c';
        document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
        document.querySelector('.wind').innerHTML = data.wind.speed + ' km/hr';

        if(data.weather[0].main === 'Clouds')
        {
            weatherIcon.setAttribute("src","/images/svg/b_1_partly_cloudy.svg");
        }
        else if(data.weather[0].main === 'Clear')
        {
            weatherIcon.src = "/images/svg/a_1_sunny.svg"
        }
        else if(data.weather[0].main === 'Rain')
        {
            weatherIcon.src = "/images/svg/c_2_heavy_rain.svg"
        }
        else if(data.weather[0].main === 'Drizzle')
        {
            weatherIcon.src = "/images/svg/c_1_rainy.svg"
        }
        else if(data.weather[0].main === 'Mist')
        {
            weatherIcon.src = "/images/svg/d_3_sleet.svg"
        }
    }
}

