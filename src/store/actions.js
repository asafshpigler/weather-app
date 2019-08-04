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

const toggleFavoriteLocation = (locationKey) => (dispatch) => {
    let favoriteLocationKeys = localStorage.getItem(FAVORITE_LOCATION_KEYS)
    favoriteLocationKeys = favoriteLocationKeys ? JSON.parse(favoriteLocationKeys) : []

    if (favoriteLocationKeys.includes(locationKey)) {
        favoriteLocationKeys = favoriteLocationKeys.filter(locKey => locKey !== locationKey)
    }
    else {
        favoriteLocationKeys.push(locationKey)
    }

    localStorage.setItem(FAVORITE_LOCATION_KEYS, JSON.stringify(favoriteLocationKeys))
    dispatch({ type: SET_FAVORITE_LOCATION_KEYS, value: favoriteLocationKeys })
}

const getFavoriteLocationsCurrentWeather = (favoriteLocationKeys) => (dispatch) => {
    const prms = favoriteLocationKeys.map(locKey => api.getCurrentWeather(locKey))
    Promise.all(prms).then((favoriteLocationsCurrentWeather) => {
        dispatch({ type: SET_FAVORITE_LOCATIONS_CURRENT_WEATHER, value: favoriteLocationsCurrentWeather })
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