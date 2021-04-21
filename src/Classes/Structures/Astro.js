class Astro {
    constructor(data) {
        this.sunrise = data.sunrise
        this.sunset = data.sunset
        this.moonrise = data.moonrise
        this.moonset = data.moonset
        this.moonphase = data.moon_phase
        this.moonillumination = data.illumination
    }

}
module.exports = Astro