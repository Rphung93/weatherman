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
