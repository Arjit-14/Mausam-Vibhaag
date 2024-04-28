const apiKey="06e81306b391ad41c6c2187cabe40c6f";
const apiURL="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const weather_img=document.querySelector(".weather-icon");
const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");

async function checkWeather(city)
{
    const response=await fetch(apiURL + city + `&appid=${apiKey}`);
    var data=await response.json();
    // console.log(data);

    if(data.message=="city not found")
    {
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }

else
{
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + `°C`;
    document.querySelector(".humidity").innerHTML=Math.round(data.main.humidity) + `%`;
    document.querySelector(".wind").innerHTML=Math.round(data.wind.speed) + ` km/h`;

    if(data.weather[0].main == "Clouds")
    {
        weather_img.src="images/clouds.png";
    }
    else if(data.weather[0].main == "Clear")
    {
        weather_img.src="images/clear.png";
    }
    else if(data.weather[0].main == "Drizzle")
    {
        weather_img.src="images/drizzle.png";
    }
    else if(data.weather[0].main == "Smoke")
    {
        weather_img.src="images/mist.png";
    }
    else if(data.weather[0].main == "Rain")
    {
        weather_img.src="images/rain.png";
    }
    else if(data.weather[0].main == "Snow")
    {
        weather_img.src="images/snow.png";
    }
     
    document.querySelector(".error").style.display="none";
    document.querySelector(".weather").style.display="block";
}
}
searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})