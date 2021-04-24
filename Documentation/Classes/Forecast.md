# [Forecast](https://www.weatherapi.com/docs)

## Methods: 
`.get([Location]()[Days]())` returns promise [ForecastData](https://github.com/discordjslib/weatherjslib/blob/main/Documentation/Weather/Classes/ForecastData.md)

`.find([Location]()[Days]())` *Gets data from cache - useful if you do not want to make excessive api requests due to the [limits](https://www.weatherapi.com/pricing.aspx) - returns promise [ForecastData](https://github.com/discordjslib/weatherjslib/blob/main/Documentation/Weather/Classes/ForecastData.md)


*You must have [caching](https://github.com/discordjslib/weatherjslib/blob/main/Documentation/Topics/Caching.md) enabled in options!

Source Code - [Click Here](https://github.com/discordjslib/weatherjslib/blob/main/src/Classes/Forecast.js)