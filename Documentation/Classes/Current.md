# [Forecast](https://www.weatherapi.com/docs/)

## Methods: 
`.get([Location]()])` returns promise [ForecastData](https://github.com/discordjslib/weatherjslib/blob/main/Documentation/Weather/Classes/CurrentData.md)

`.find([Location]())` *Gets data from cache - useful if you do not want to make excessive api requests due to the [limits](https://www.weatherapi.com/pricing.aspx) - returns promise [ForecastData](https://github.com/discordjslib/weatherjslib/blob/main/Documentation/Weather/Classes/CurrentData.md)


*You must have [caching](https://github.com/discordjslib/weatherjslib/blob/main/Documentation/Topics/Caching.md) enabled in options!

Source Code - [Click Here](https://github.com/discordjslib/weatherjslib/blob/main/src/Classes/Current.js)