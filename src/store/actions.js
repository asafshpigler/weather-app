import {
    SET_SUGGESTIONS,
    SET_CURRENT_LOCATION,
    SET_CURRENT_WEATHER,
    SET_FORECAST,
    SET_FAVORITE_LOCATION_KEYS,
    SET_FAVORITE_LOCATIONS_CURRENT_WEATHER,
} from './actions.consts'
import api from '../api'
import { FAVORITE_LOCATION_KEYS } from '../consts'

const _formatSuggestions = (suggestions) => (
	suggestions.map(({ LocalizedName, Key }) => ({
		value: LocalizedName,
		label: LocalizedName,
		key: Key
	}))
)

const getLocationAutocomplete = (value) => (dispatch) => (
    api.getLocationAutocomplete(value).then((data) => {
        if (!Array.isArray(data)) return
        const formattedSuggestions = _formatSuggestions(data)
        dispatch({ type: SET_SUGGESTIONS, value: formattedSuggestions })
    })
)

const setCurrentLocation = (currentLocation) => dispatch => (
    dispatch({ type: SET_CURRENT_LOCATION, value: currentLocation })
)

const getCurrentWeather = (locationKey) => (dispatch) => (
    api.getCurrentWeather(locationKey).then((currentWeather) => {
        dispatch({ type: SET_CURRENT_WEATHER, value: currentWeather })
    })
)

const getForecast = (locationKey) => (dispatch) => (
    api.getForecast(locationKey).then((data) => {
        const forecast = {
            headlineText: data.Headline.Text,
            dailyForecasts: data.DailyForecasts.map((dailyForecast) => ({
                temperature: dailyForecast.Temperature.Minimum.Value,
                date: dailyForecast.Date
            }))
        }

        dispatch({ type: SET_FORECAST, value: forecast })
    })
)

const toggleFavoriteLocation = (currentLocation) => (dispatch) => {
    let favoriteLocations = localStorage.getItem(FAVORITE_LOCATION_KEYS)
    favoriteLocations = favoriteLocations ? JSON.parse(favoriteLocations) : []

    if (favoriteLocations.some(loc => loc.key === currentLocation.key)) {
        favoriteLocations = favoriteLocations.filter(loc => loc.key !== currentLocation.key)
    }
    else {
        favoriteLocations.push(currentLocation)
    }

    localStorage.setItem(FAVORITE_LOCATION_KEYS, JSON.stringify(favoriteLocations))
    dispatch({ type: SET_FAVORITE_LOCATION_KEYS, value: favoriteLocations })
}

const getFavoriteLocationsCurrentWeather = (favoriteLocations) => (dispatch) => {
    const prms = favoriteLocations.map(loc => api.getCurrentWeather(loc.key))
    Promise.all(prms).then((favoriteLocationsCurrentWeather) => {
        const value = favoriteLocationsCurrentWeather.map((loc, i) => ({ ...loc, name: favoriteLocations[i].name }))
        dispatch({ type: SET_FAVORITE_LOCATIONS_CURRENT_WEATHER, value })
    })
}

export {
    getLocationAutocomplete,
    setCurrentLocation,
    getCurrentWeather,
    getForecast,
    toggleFavoriteLocation,
    getFavoriteLocationsCurrentWeather,
}