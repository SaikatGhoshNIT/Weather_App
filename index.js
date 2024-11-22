const apikey = '1caf30a44acf505e3a3f152976906a4c';
const apiURL = 'https://api.openweathermap.org/data/2.5/weather?units=metric&';

const city = document.querySelector('.text').value;
const btn = document.querySelector('.search_button');
//const cityName = city.value;

async function weatherReport() {
    const data = await fetch(apiURL + `appid=${apikey}` + `&q=${city}`);
    const jsonData = await data.json();

    console.log(jsonData);
    
}

btn.addEventListener('click', ()=>{
    weatherReport();
})