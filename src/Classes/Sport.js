const SportData = require('./Data/SportData')
const api = require('../API')
class Sport {
    constructor(key) {
        this.key = key
    }
    async get(location) {
        if (location) {
            const data = (await api.sport(this.key, location))
            if (!data) throw new Error('Invalid location')
            else return new SportData(data)
        } else throw new Error('Invalid location')
    }
}
module.exports = Sport