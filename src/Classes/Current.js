const api = require('../API')

const CurrentData = require('./Data/CurrentData')
class Current {
    constructor(key) {
        this.key = key
    }
    async get(location) {
        if (location) {
            const data = (await api.current(this.key, location))
            if (!data) throw new Error('Invalid location')
            else return new CurrentData(data)
        } else throw new Error('Invalid location')
    }
}
module.exports = Current