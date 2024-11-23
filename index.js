const apikey = '1caf30a44acf505e3a3f152976906a4c';
const apiURL = 'https://api.openweathermap.org/data/2.5/weather?units=metric&';

const city = document.querySelector('.city_name');
const btn = document.querySelector('.search_button');

async function weatherReport(cityName) {
    const data = await fetch(apiURL + `apikey=${apikey}` + '&q=' + cityName);
    const jsonData = await data.json();

    console.log(jsonData);
    
}

btn.addEventListener('click', ()=>{
    weatherReport(city.value);
    //console.log(city.value);
})