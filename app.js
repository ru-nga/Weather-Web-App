const API_KEY ="8a38d0b1e06eae23533734ca31b7a7ea";
const apiurl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const fullUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=latur&appid=8a38d0b1e06eae23533734ca31b7a7ea`

const inputField = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const tempHeading = document.querySelector(".temp")
const cityName = document.querySelector(".city")
const humidity = document.querySelector(".humidity")
const wind = document.querySelector(".wind")
const displayImg = document.querySelector(".weather img")

const displayWhether = ()=>{

    FULL_URL = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${inputField.value.toLowerCase()}&appid=${API_KEY}`
    fetch(FULL_URL).then((res)=>res.json()).then((data)=>{

        try{
            tempHeading.innerText = `${data.main.temp} °C`
            cityName.innerText = data.name
            cityName.style.color = "white"
            console.log(cityName);
            humidity.innerText = `${data.main.humidity} %`
            wind.innerText = `${data.wind.speed} km/h`
            displayImg.src = `images/${data.weather[0].main}.png`
        } catch(e) {
            cityName.innerText = "Please enter a valid city name"
            cityName.style.color = "red"
        }
        
    }).then((e)=>{

    })

}

searchBtn.addEventListener("click", ()=>{
    displayWhether();
})