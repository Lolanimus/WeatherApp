const country = document.getElementById('country');
const city = document.getElementById('city');
const button = document.getElementById('submit');
const countryP = document.getElementById('countryP');
const cityP = document.getElementById('cityP');
const currentDegreesP = document.getElementById('currentDegreesP');

button.addEventListener("click", (e) => {
    let time = new Date();
    console.log(time);
    e.preventDefault();
    let countryValue = country.value;
    let cityValue = city.value;
    getWeatherData(countryValue, cityValue).then((result) => {
        let time = new Date();
        console.log(time);
        let countryPValue = result.location.country;
        let cityPValue = result.location.name;
        let currentDegreesPValue = result.current.temp_c;
        countryP.innerHTML = countryPValue;
        cityP.innerHTML = cityPValue;
        currentDegreesP.innerHTML = currentDegreesPValue;
    });
    
})

async function getWeatherData(country, city) {
    try {
        if (country)
            country = "q=" + country + "&";
        city = "q=" + city;
        let url = 'https://api.weatherapi.com/v1/current.json?key=b2fae330a25e45de8f712606241504&' + country + city + '&timestamp=' + Date.now();
        let response = await fetch(url);
        let weatherObject = await response.json();
        return weatherObject;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        throw error; // Re-throw the error to handle it outside of this function if needed
    }
}
