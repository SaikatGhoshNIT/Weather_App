const apikey = '1caf30a44acf505e3a3f152976906a4c';
const apiURL = 'https://api.openweathermap.org/data/2.5/weather?units=metric&';

const city = document.querySelector('.city_name');
const btn = document.querySelector('.search_button');
const weatherIcon = document.querySelector('.weather-icon')

async function weatherReport(cityName) {
    const data = await fetch(apiURL + `apikey=${apikey}` + '&q=' + cityName);

    if (data.status == 404){
        document.querySelector('.error').style.display = 'block'
        document.querySelector('.Weather').style.display = 'none'
    }

    else{
    const jsonData = await data.json();
    document.querySelector('.Weather').style.display = 'block'
    document.querySelector('.error').style.display = 'none'
    console.log(jsonData);
    const weatherCondition = jsonData.weather[0].main

    if(weatherCondition == 'Haze'){
        weatherIcon.src = 'assets/smog.png'
    }

    else if(weatherCondition == 'Clear'){
        weatherIcon.src = 'assets/sun.png'
    }

    else if(weatherCondition == 'Rain'){
        weatherIcon.src = 'assets/clouds-sun.png'
    }

    else if(weatherCondition == 'Drizzle'){
        weatherIcon.src = 'assets/clouds-rain.png'
    }

    else if(weatherCondition == 'Mist'){
        weatherIcon.src = 'assets/snowflake.png'
    }

    document.querySelector('.temp').innerHTML = Math.round(jsonData.main.temp) + '°C';
    document.querySelector('.city').innerHTML = jsonData.name
    document.querySelector('.humidity').innerHTML = jsonData.main.humidity + '%'
    document.querySelector('.wind').innerHTML = jsonData.wind.speed + 'km/h'
}
}

//if(window.innerWidth <= 500 ){
    city.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
          e.preventDefault(); // Prevent the default form submission
          weatherReport(city.value); // Submit the form programmatically
          city.value = '';
        }
      });
//    }
//else{
btn.addEventListener('click', ()=>{
    weatherReport(city.value);
    //console.log(city.value);
    city.value = ''
})
//}
