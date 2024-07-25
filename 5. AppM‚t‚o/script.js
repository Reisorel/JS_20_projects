

const loader = document.querySelector(".loader-container");
const errorInformation = document.querySelector(".error-information");

async function getWeatherData() {
  try {
    const response = await
    fetch("http://api.airvisual.com/v2/nearest_city?key=1dc12d18-f1cb-4e9d-8ac3-f19f077ed0e1")

    if (!response.ok) {
      throw new Error(`Error${response.status}, ${response.statusText}`)
    }

    const responseData = await response.json()

    const sortedData = {
      city: responseData.data.city,
      country: responseData.data.country,
      iconId: responseData.data.current.weather.ic,
      temperature: responseData.data.current.weather.tp,
    }
    console.log(sortedData);

    populateUI(sortedData);
  }
  catch (error) {
    loader.classList.remove("active");
    errorInformation.textContent = error.message
  }
}

getWeatherData()

const cityName = document.querySelector(".city-name");
const countryName = document.querySelector(".country-name");
const temperature = document.querySelector(".temperature");
const infoIcon = document.querySelector(".info-icon");

function populateUI(data){
  cityName.textContent = data.city;
  countryName.textContent = data.country;
  temperature.textContent = `${data.temperature}°`;
  infoIcon.src = `ressources/icons/${data.iconId}.svg`;
  infoIcon.style.width = "150px";
  loader.classList.remove("active");
}
