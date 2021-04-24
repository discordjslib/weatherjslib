# weatherjslib
A node.js library which interacts with the [weather api](https://www.weatherapi.com)

Install: 
```
npm i weatherjslib
```


Example:
```js
const weatherjslib = require('weatherjslib')
const weather = new weatherjslib('API-KEY')
weather.forecast.get('London', 5).then(forecast => console.log(forecast))
weather.current.get('San Francisco').then(current => console.log(current))
```


Documentation: 
[Click Here](https://github.com/discordjslib/weatherjslib/Documentation/Main.md)
