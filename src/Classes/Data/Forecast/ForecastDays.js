class ForecastDays {
    constructor(data) {
        this.temperature = {
            max: {
                celsius: data.maxtemp_c,
                fahrenheit: data.maxtemp_f,
            },
            min: {
                celsius: data.mintemp_c,
                fahrenheit: data.mintemp_f,
            },
            average: {
                celsius: data.avgtemp_c,
                fahrenheit: data.avgtemp_f,
            },
        }
        this.wind = {
            max: {
                mph: data.maxwind_mph,
                kph: data.maxwind_kph,
            }
        }
        this.daily = {
            rain: [data.daily_will_it_rain, data.daily_chance_of_rain],
            snow: [data.daily_will_it_snow, data.daily_chance_of_snow]
        }
        this.precipitation = {
            total: {
                mm: data.totalprecip_mm,
                in: data.totalprecip_in,
            }
        }
        this.visibility = {
            average: {
                km: data.avgvis_km,
                miles: data.avgvis_miles,
            }
        }
        this.humidity = {
            average: data.avghumidity
        }
        this.icon = data.condition.icon
        this.condition = data.condition.text
        this.uv = data.uv
    }
}
module.exports = ForecastDays