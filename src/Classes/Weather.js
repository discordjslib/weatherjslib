const Current = require('./Current')
const Forecast = require('./Forecast')
const Sports = require('./Sport')

class Weather {
    constructor(key) {
        this.key = key
        this.current = new Current(key)
        this.forecast = new Forecast(key)
        this.sport = new Sports(key)
    }
}
module.exports = Weather