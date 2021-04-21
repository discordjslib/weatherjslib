class CurrentData {
    constructor(data) {
        if (!data.location) throw new Error('Invalid location')
        this.location = {
            name: data.location.name,
            region: data.location.region,
            country: data.location.country,
            latitude: data.location.lat,
            longitude: data.location.lon,
            timezone: data.location.tz_id,
            time: data.location.localtime,
        }
        this.lastUpdated = data.current.last_updated
        if (data.current.air_quality) {
            const aq = data.current.air_quality
            this.air = {
                carbonMonoxide: aq.co,
                nitrogenDioxide: aq.no2,
                ozone: aq.o3,
                sulphurDioxide: aq.so2,
                pm25: aq.pm2_5,
                pm10: aq.pm10,
                epaIndex: aq["us-epa-index"],
                defraIndex: aq["gb-defra-index"]
            }
        }
        this.icon = data.current.condition.icon
        this.condition = data.current.condition.text
        this.humidity = data.current.humidity
        this.cloud = data.current.cloud
        this.wind = {
            mph: data.current.wind_mph,
            kph: data.current.wind_kph,
            degree: data.current.wind_degree,
            direction: data.current.wind_dir,
        }
        this.pressure = {
            mb: data.current.pressure_mb,
            in: data.current.pressure_in,
        }
        this.precipitation = {
            mm: data.current.precip_mm,
            in: data.current.precip_in,
        }
        this.temperature = {
            celsius: data.current.temp_c,
            fahrenheit: data.current.temp_f,
            feelslikeC: data.current.feelslike_c,
            feelslikeF: data.current.feelslike_f,
        }
        this.visibility = {
            km: data.current.vis_km,
            miles: data.current.vis_miles,
        }
        this.gust = {
            mph: data.current.gust_mph,
            kph: data.current.gust_kph,
        }
        this.uv = data.current.uv
    }
}
module.exports = CurrentData