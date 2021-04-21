const ForecastData = require('./Data/Forecast/ForecastData')
const api = require('../API')
class Forecast {
    constructor(key) {
        this.key = key
    }
    async get(location, days) {
        return new ForecastData((await api.forecast(this.key, location, days)))
    }
}
module.exports = Forecast