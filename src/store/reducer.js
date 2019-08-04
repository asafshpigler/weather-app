import {
    SET_SUGGESTIONS,
    SET_CURRENT_LOCATION,
    SET_CURRENT_WEATHER,
    SET_FORECAST,
    SET_FAVORITE_LOCATION_KEYS,
    SET_FAVORITE_LOCATIONS_CURRENT_WEATHER,
} from './actions.consts'
import { FAVORITE_LOCATION_KEYS } from '../consts'

let initialFavoriteLocationKeys = localStorage.getItem(FAVORITE_LOCATION_KEYS)
initialFavoriteLocationKeys = initialFavoriteLocationKeys ? JSON.parse(initialFavoriteLocationKeys) : []

const initialState = {
    suggestions: [],
    currentLocation: null,
    currentWeather: null,
    forecast: null,
    favoriteLocationKeys: initialFavoriteLocationKeys,
    favoriteLocationsCurrentWeather: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SUGGESTIONS:
            return {
                ...state,
                suggestions: action.value,
            }

        case SET_CURRENT_LOCATION:
            return {
                ...state,
                currentLocation: action.value
            }

        case SET_CURRENT_WEATHER:
            return {
                ...state,
                currentWeather: action.value
            }
        
        case SET_FORECAST:
            return {
                ...state,
                forecast: action.value
            }

        case SET_FAVORITE_LOCATION_KEYS:
            return {
                ...state,
                favoriteLocationKeys: action.value,
            }

        case SET_FAVORITE_LOCATIONS_CURRENT_WEATHER:
            return {
                ...state,
                favoriteLocationsCurrentWeather: action.value
            }

        default:
            return state
    }
}

export default reducer