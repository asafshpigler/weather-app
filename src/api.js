import axios from 'axios'

import {
    WEATHER_API_KEY,
    LOCATION_AUTOCOMPLETE_PATH,
    FORECAST_PATH,
} from './consts'

import { locationAutocompleteResponse, currentWeatherResponse, forecastResponse } from './mocks'

const getLocationAutocomplete = (query) => {
    if (typeof query !== 'string' || !query.length) return

    if (process.env.NODE_ENV !== 'production') {
        return Promise.resolve(locationAutocompleteResponse.data)
    }

    return new Promise((resolve, reject) => {
        const path = `${LOCATION_AUTOCOMPLETE_PATH}?apikey=${WEATHER_API_KEY}&q=${query}&language=en-us`

        axios.get(path)
            .then(res => {
                if (res.status === 200) {
                    resolve(res.data)
                }
            })
        .catch(reject)
    })
}

const _formatCurrentWeather = (data) => {
    const {
        Temperature,
        WeatherText,
        WeatherIcon,
    } = data[0]

    return {
        temperature: Temperature.Metric.Value,
        text: WeatherText,
        icon: WeatherIcon,
    }
}

const getCurrentWeather = (locationKey) => {
    if (typeof locationKey !== 'string' || !locationKey.length) return

    if (process.env.NODE_ENV !== 'production') {
        return Promise.resolve(_formatCurrentWeather(currentWeatherResponse.data))
    }

    return new Promise((resolve, reject) => {
        const path = `${LOCATION_AUTOCOMPLETE_PATH}/${locationKey}?apikey=${WEATHER_API_KEY}&language=en-us` 

        axios.get(path)
            .then(res => {
                if (res.status === 200) {
                    resolve(_formatCurrentWeather(res.data))
                }
            })
        .catch(reject)
    })
}

const getForecast = (locationKey) => {
    if (typeof locationKey !== 'string' || !locationKey.length) return

    if (process.env.NODE_ENV !== 'production') {
        return Promise.resolve(forecastResponse.data)
    }

    return new Promise((resolve, reject) => {
        const path = `${FORECAST_PATH}/${locationKey}?apikey=${WEATHER_API_KEY}&language=en-us&metric=true` 

        axios.get(path)
            .then(res => {
                if (res.status === 200) {
                    resolve(res.data)
                }
            })
        .catch(reject)
    })
}

export default {
    getLocationAutocomplete,
    getCurrentWeather,
    getForecast,
}