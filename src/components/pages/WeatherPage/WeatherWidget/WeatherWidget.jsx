import React from 'react'
import { connect } from 'react-redux'
import uuid from 'uuid'
import { toggleFavoriteLocation } from '../../../../store/actions'
import { WeatherIcon } from '../../..'

const WeatherWidget = (props) => {
    const {
        currentLocation,
        currentWeather,
        forecast,
        favoriteLocationKeys,
    } = props

    const handleClick = () => {
        const { toggleFavoriteLocation, currentLocation } = props
        toggleFavoriteLocation(currentLocation.key)
    }

    return (
        <main>
            {!!currentLocation && currentLocation.name}
            {!!currentWeather && (
                <div>
                    {currentWeather.temperature}
                    {currentWeather.text}
                    <WeatherIcon iconIndex={currentWeather.icon} />
                </div>
            )}

            {!!forecast && (
                <div>
                    {forecast.headlineText}
                    {forecast.dailyForecasts.map(dailyForecast => (
                        <div key={uuid.v4()}>
                            CELSIUS {dailyForecast.temperature} |
                            DATE {dailyForecast.date}
                        </div>
                    ))}
                </div>
            )}
            {!!currentLocation && (
                <button onClick={handleClick}>
                    {favoriteLocationKeys.includes(currentLocation.key) ? 'remove from favoriters' : 'add to favorites'}
                </button>
            )}
        </main>
    )
}

const mapStateToProps = (state) => ({
    currentLocation: state.currentLocation,
    currentWeather: state.currentWeather,
    forecast: state.forecast,
    favoriteLocationKeys: state.favoriteLocationKeys,
})

export default connect(
    mapStateToProps,
    { toggleFavoriteLocation },
)(WeatherWidget)