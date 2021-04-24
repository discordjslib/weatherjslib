const fetch = require('node-fetch')
const url = 'http://api.weatherapi.com/v1/'
exports.current = async (key, location) => {
    const weather = await fetch(`${url}current.json?key=${key}&q=${location}&aqi=yes}`)
    const json = weather.json()
    return json
}
exports.forecast = async (key, location, days) => {
    const forecast = await fetch(`${url}forecast.json?key=${key}&q=${location}&days=${days}`)
    const json = await forecast.json()
    return json
}
exports.sport = async (key, location) => {
    const sport = await fetch(`${url}sports.json?key=${key}&q=${location}}`)
    const json = sport.json()
    return json
}

