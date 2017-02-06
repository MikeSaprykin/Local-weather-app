/**
 * Created by Mike on 02.05.2016.
 */
var styles = require('./assets/css/style.css');

var constants = require('./constants');

 $( document ).ready(function(){

     var flipContainer = $('.flip-container');
     $('.deg-trigger').on('click',function(){
         flipContainer.toggleClass('flip');
     }).on('touchstart',function(){
         flipContainer.toggleClass('flip');
     });

    $.ajax({
        url: constants.IP_API,
        dataType:"jsonp",
        success: function(response){
            onIpRequestSuccess(response)
        }
    });

    function onIpRequestSuccess(results){
         var currentLat = "lat=" + results.lat;
         var currentLon = "lon=" + results.lon;
         requestMyWeather(currentLat,currentLon);
         $('div.location p span').html(results.city + ", " + results.country);
     }

    function requestMyWeather(lat,lon){
        $.ajax({
            url: constants.OPEN_WEATHER_API + lat + "&" + lon + "&units=metric" + constants.OPEN_WEATHER_APP_ID,
            dataType: 'jsonp',
            success: function(response){
                fillAppLayout(response)
            }
        });
    }

    function fillAppLayout(results){
        var windSpeed = Math.round(results.wind.speed);
        var humidity = results.main.humidity;
        var temperature = Math.round(results.main.temp);
        var weatherConditions = results.weather[0].main;
        var temperatureFahr = Math.round(temperature * 9/5 +32);

        $('div.celsium span').html(temperature + " ");
        $('div.farenheit span').html(temperatureFahr + " ");
        $('div.humidity span').html(humidity + " ");
        $('div.wind span').html(windSpeed + " ");
        $('div.description').html(results.weather[0].main);
        $('img.icon').attr("src", constants.CONDITIONS_CONSTS[weatherConditions].image);
        $('.weather-app-bg').css("background-color", constants.CONDITIONS_CONSTS[weatherConditions].background)
            .fadeIn('fast');
    }

});