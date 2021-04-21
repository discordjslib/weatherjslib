const Astro = require('../../Structures/Astro')
const ForecastDays = require('./ForecastDays')
class ForecastData {
    constructor(data) {
        const days = data.forecast.forecastday
        let dates = []
        days.forEach(d => dates.push(d.date))
        this.dates = dates
        let dayss = []
        days.forEach(d => dayss.push(new ForecastDays(d.day)))
        this.days = dayss
        let astros = []
        days.forEach(d => astros.push(new Astro(d.astro)))
        this.astros = astros
        let hours = []
        days.forEach(d => hours.push(d.hour))
        this.hours = hours
    }

}
module.exports = ForecastData