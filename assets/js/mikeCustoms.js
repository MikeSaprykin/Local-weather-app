/**
 * Created by Mike on 02.05.2016.
 */
 $( document ).ready(function(){
        var openAppId = "&APPID=9d157bcc93c1d77f8f2586edee31fe00";
        var openWAPI = "http://api.openweathermap.org/data/2.5/weather?";
        var currentTemp;
        $.ajax({
            url:"http://ip-api.com/json",
            dataType:"jsonp",
            success: function(results){
                var currentLat = "lat=" + results.lat;
                var currentLon = "lon=" + results.lon;
                myWeather(currentLat,currentLon);
                console.log(results);
                $('div.location').html("<p><i class='fa fa-compass location'></i> " + results.city + ", " + results.country);
            }
        });

        function myWeather(lat,lon){
            $.ajax({
                url:openWAPI + lat + "&" + lon + "&units=metric" + openAppId,
                dataType: 'jsonp',
                success: function(results){
                    console.log(results);
                    var currentWindSpeed = results.wind.speed;
                    var currentHummidity = results.main.humidity;
                    currentTemp = Math.round(results.main.temp);
                    var currentWeatherConditions = results.weather[0].main;
                    var currentTempFar = Math.round(currentTemp * 9/5 +32);
                    $('div.celsium').html("<img src='http://s13.postimg.org/m1nh2gszb/tool.png' height='55px' width='55px'>" + currentTemp + " <span>  &degC</span>");
                    $('div.farenheit').html("<img src='http://s13.postimg.org/m1nh2gszb/tool.png' height='55px' width='55px'>" + currentTempFar + " <span>  &degF</span>");
                    $('div.wind').html("<img src='http://s24.postimg.org/htwtilllh/weather.png' height='50px' width='50px'> "+ Math.round(currentWindSpeed) + " m/s");
                    $('div.humidity').html("<img src='http://s24.postimg.org/5qrhv1aj9/shape.png' height='35px' width='35px'>" +currentHummidity + " %");
                    $('div.description').html(currentWeatherConditions);
                    switch(currentWeatherConditions){
                        case "Thunderstorm":
                            $("img.icon").attr("src","http://s22.postimg.org/yr5ly9dtd/cloud_3.png")
                            $(".weather-app-bg").css("background-color","#61BD6D")
                            break;
                        case "Drizzle":
                            $("img.icon").attr("src","http://s22.postimg.org/72edd01f5/cloud.png")
                            $(".weather-app-bg").css("background-color","#1ABC9C")
                            break;
                        case "Rain":
                            $("img.icon").attr("src","http://s22.postimg.org/jsilq39dd/cloud_2.png")
                            $(".weather-app-bg").css("background-color","#2C82C9")
                            break;
                        case "Snow":
                            $("img.icon").attr("src","http://s22.postimg.org/ajgffz0hd/cloud_1.png")
                            $(".weather-app-bg").css("background-color","#D1D5D8")
                            break;
                        case "Clouds":
                            $("img.icon").attr("src","http://s22.postimg.org/vdsrxsuup/two.png")
                            $(".weather-app-bg").css("background-color","#54ACD2")
                            break;
                        case "Clear":
                            $("img.icon").attr("src","http://s22.postimg.org/a5f3gdgdt/circle.png")
                            $(".weather-app-bg").css("background-color","#F7DA64")
                            break;
                        case "Mist":         $("img.icon").attr("src","http://s23.postimg.org/yt3w4atjf/weather_1.png")
                            $(".weather-app-bg").css("background-color","#89C4F4")
                    };
                    $(".weather-app-bg").fadeIn("fast");
                    $('.deg-trigger').on('click',function(){
                        $('.flip-container').toggleClass('flip');
                    });
                }
            });
        }
    });