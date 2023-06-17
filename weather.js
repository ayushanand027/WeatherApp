const apikey ="04ddeab5ec1270f114e501a9210a8cff";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const serchcity = document.querySelector('.search input');
const searchbutton = document.querySelector('.search button');
const weathericon = document.querySelector('.weatherimg');
const dark = document.querySelector('.dark_mode');
const light = document.querySelector('.light_mode');
light.addEventListener('click',()=>
{
    document.querySelector('body').style.backgroundColor = '#f9f0db';
    document.querySelector('.card').style.backgroundImage= 'linear-gradient(to left bottom, #858e9b, #7891a6, #6495ad, #489ab1, #1a9fb0)';
});
dark.addEventListener('click',()=>{
    document.querySelector('body').style.backgroundColor= '#222';
    document.querySelector('.card').style.backgroundImage= 'linear-gradient(to left bottom, #858e9b, #7891a6, #6495ad, #489ab1, #1a9fb0)';
});
async function checkweather(city)
{
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    if(response.status === 404)
    {
        document.querySelector('.error').style.display = 'block';
        document.querySelector('.weather').style.display = 'none';
    }
    else
    {var data = await response.json();
    console.log(data);
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) +'°c';
    document.querySelector('.humidity').innerHTML = data.main.humidity +='%';
    document.querySelector('.wind').innerHTML = data.wind.speed+='km/hr';
    document.querySelector('.T_max').innerHTML = data.main.temp_max+='°c';
    document.querySelector('.T_min').innerHTML = data.main.temp_min+='°c';

     if(data.weather[0].main == 'Clouds')
     {
        weathericon.src == 'images/clouds.png';

     }
     else if(data.weather[0].main == 'Clear')
     {
        weathericon.src = 'images/clear.png';

     }
     else if(data.weather[0].main == 'Drizzle')
     {
        weathericon.src = 'images/drizzle.png';

     }
     else if((data.weather[0].main) == 'Humidity')
     {
        weathericon.src = 'images/humidity.png';

     }
     else if((data.weather[0].main) == 'Snow')
     {
        weathericon.src = 'images/snow.png';

     }
     else if((data.weather[0].main) == 'Rain')
     {
        weathericon.src = 'images/rain.png';

     }
     else if((data.weather[0].main) == 'Wind')
     {
        weathericon.src = 'images/wind.png';

     }
     else if((data.weather[0].main) == 'Mist')
     {
        weathericon.src = 'images/mist.png';

     }
     document.querySelector('.weather').style.display = 'block';
     document.querySelector('.error').style.display = 'none';}

}
searchbutton.addEventListener('click',()=>
{
    
    checkweather(serchcity.value);

});



