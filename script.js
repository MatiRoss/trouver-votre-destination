import CityInput from "/components/CityInput"
import Suggestions from "./components/Suggestions";
import Map from "./components/Map";
import Header from "./components/Header";
import Description from "./components/Description";

const cityInput = new CityInput()
const suggestions = new Suggestions()
const map = new Map()
const header = new Header()
const description = new Description()

let main = document.getElementById('main')

let componentsArray = [header, cityInput, suggestions, map, description]

componentsArray.forEach(component => {
    component.createHtmlElement()
})

$("#input-search").change(function () {
    const city = this.value;
    cityInput.searchCity(city);
    suggestions.searchForSuggestion(city);
});
