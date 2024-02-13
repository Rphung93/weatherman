var cityList = [];
var currentCity;

initCityList();
initWeather();

function renderCities() {
    $("#cityList").empty();
    $("#cityInput").val("");

    for (var i = 0; i < cityList.length; i++) {
        var link = $("<a>").addClass("list-group-item list-group-item-action list-group-item-primary city")
            .attr("data-name", cityList[i])
            .text(cityList[i]);
        $("#cityList").prepend(link);
    }
}
function initCityList() {
    var storedCities = JSON.parse(localStorage.getItem("cities"));

    if (storedCities !== null) {
        cityList = storedCities;
    }

    renderCities();
}


function initWeather() {
    var storedWeather = JSON.parse(localStorage.getItem("currentCity"));

    if (storedWeather !== null) {
        currentCity = storedWeather;
        displayWeather();
        displayFiveDayForecast();
    }
}


function storeCityArray() {
    localStorage.setItem("cities", JSON.stringify(cityList));
}
