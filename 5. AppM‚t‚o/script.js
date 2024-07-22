

const loader = document.querySelector("loader-container");
const errorInformation = document.querySelector(".error-information");

async function getWeatherData() {
  try {
    const response = await fetch("http://api.airvisual.com/v2/nearest_city?key=1dc12d18-f1cb-4e9d-8ac3-f19f077ed0e1")

    const responseData = await response.json()

    const sortedData = {
      city: responseData.data.city,
      Country: responseData.data.country,
      iconId: responseData.data.current.weather.ic,
      temperature: responseData.data.current.weather.tp,
    }
    console.log(sortedData);
  }
  catch (error) {

  }
}

getWeatherData()
