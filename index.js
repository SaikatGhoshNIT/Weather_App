const apikey = '1caf30a44acf505e3a3f152976906a4c';
const apiURL = 'https://api.openweathermap.org/data/2.5/weather?units=metric&';

const city = document.querySelector('.city_name');
const btn = document.querySelector('.search_button');

async function weatherReport(cityName) {
    const data = await fetch(apiURL + `apikey=${apikey}` + '&q=' + cityName);

    if (data.status == 404){
        document.querySelector('.error').style.display = 'block'
    }
    
    const jsonData = await data.json();
    document.querySelector('.Weather').style.display = 'block'
    //console.log(jsonData);

    document.querySelector('.temp').innerHTML = Math.round(jsonData.main.temp) + '°C';
    document.querySelector('.city').innerHTML = jsonData.name
    document.querySelector('.humidity').innerHTML = jsonData.main.humidity + '%'
    document.querySelector('.wind').innerHTML = jsonData.wind.speed + 'km/h'
}

btn.addEventListener('click', ()=>{
    weatherReport(city.value);
    //console.log(city.value);
    city.value = ''
})

