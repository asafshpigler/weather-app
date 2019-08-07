import React from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import { WeatherWidgetHeader, WeatherWidgetForecast } from '.'

const useStyles = makeStyles(() => ({
    weatherWidgetContainer: {
        padding: '0 16px',
    },
    weatherWidget: {
        margin: '32px auto 0',
        padding: 18,
        maxWidth: 700,

        '& h1': {
            textAlign: 'center',
        },
    },
}))

const WeatherWidget = (props) => {
    const {
        currentWeather,
    } = props

    const classes = useStyles()

    return !!currentWeather && (
        <div className={classes.weatherWidgetContainer}>
        <Card className={classes.weatherWidget}>
            <WeatherWidgetHeader />
            <h1>{currentWeather.text}</h1>
            <WeatherWidgetForecast />
        </Card>
        </div>
    )
}

const mapStateToProps = (state) => ({
    currentWeather: state.currentWeather,
    favoriteLocations: state.favoriteLocations,
})

export default connect(
    mapStateToProps,
)(WeatherWidget)