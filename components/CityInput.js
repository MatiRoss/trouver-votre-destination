import map from "./Map";

class CityInput {
    static allData;

    createHtmlElement() {
        let componentName = CityInput.valueOf().name
        const inputSection = document.createElement('section')
        inputSection.id = componentName
        inputSection.className = "py-5 flex flex-col justify-center items-center"
        let label = document.createElement('label')
        label.textContent = "Entrez votre destination"
        inputSection.appendChild(label)
        let inputField = document.createElement('input')
        inputField.id = "input-search"
        inputField.type = "text"
        inputField.placeholder = "Lyon, Marseille, etc..."
        inputField.className = "text-center mt-2 h-14 rounded-3xl w-5/6 text-10 bg-gray-50 px-10 border-blue-500 border-2"
        inputSection.appendChild(inputField)
        document.getElementById('main').appendChild(inputSection)

    }

    searchCity(city) {
        const apiKey = "56b54737cee432fa16e84110b8e24e90";
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=fr&appid=${apiKey}`)
            .then(res => res.json())
            .then(data => {
                if (data.cod != 404) {
                    const {
                        coord: {
                            lon,
                            lat
                        },
                        name,
                        weather,
                        main: {
                            feels_like,
                            humidity,
                            pressure,
                            temp,
                            temp_max,
                            temp_min
                        }
                    } = data
                    this.allData = data
                    // map.setMap(lat, lon, 10);
                    $('#titleWeather').html(`La météo sur ${name}`);
                    $('#descriptionWeather').html(weather.map(o => o.description).toString());
                    $('#temperature').html(`${temp}°C`);
                    $('#temperatureFeel').html(`${feels_like}°C`);
                    $('#humidity').html(`${humidity}%`);
                    $('#pressure').html(`${pressure}Pa`);
                    $('#tempMax').html(`${temp_max}°C`);
                    $('#tempMin').html(`${temp_min}°C`);
                }
            })
            .catch(error => console.log(error));
    }

}

export default CityInput