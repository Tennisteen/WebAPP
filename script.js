const apiKey = "a972f7d9b7560ccc7a76caa22a8fb7cc" ;
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const weatherIcon = document.querySelector(".weather-icon")

async function checkWeather(city)
{
    const responseByAPi = await fetch(apiUrl+ city + `&appid=${apiKey}`);

    if(responseByAPi.status==404)
    {
       document.querySelector(".error").style.display="block";
       document.querySelector(".weather").style.display="none";
    }
    else{
    var data = await responseByAPi.json()
    console.log(data)

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + " °C";
    document.querySelector(".condition1").innerHTML = data.main.humidity + " %";
    document.querySelector(".condition2").innerHTML = data.wind.speed + " km/hh";
    document.querySelector(".decription").innerHTML = data.weather[0].main;
    document.querySelector(".decription2").innerHTML = data.weather[0].description;

    if(data.weather[0].main=="Clouds"){
        weatherIcon.src = "images/clouds.png";
    }
    else if(data.weather[0].main=="Clear"){
        weatherIcon.src = "images/clear.png";
    }
    else if(data.weather[0].main=="Rain"){
        weatherIcon.src = "images/rain.png";
    }
    else if(data.weather[0].main=="Drizzle"){
        weatherIcon.src = "images/drizzle.png";
    }
    else if(data.weather[0].main=="Mist"){
        weatherIcon.src = "images/mist.png";
    }
    else if(data.weather[0].main=="Cold"){
        weatherIcon.src = "images/snow.png";
    }
   
    document.querySelector(".weather").style.display="block";
    document.querySelector(".error").style.display="none";

  }
}
searchBtn.addEventListener("click" , ()=>{
    checkWeather(searchBox.value);
})
