import React from 'react'
import { connect } from 'react-redux'
import uuid from 'uuid'
import moment from 'moment'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'

const useStyles = makeStyles(() => ({
    forecastContainer: {
        padding: '12px 0',

        '& h3': {
            margin: '0 0 20px',
            fontWeight: 'normal',
        },

        '& h3, p': {
            textAlign: 'center',
        }
    },
    forecastDaysContainer: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
    forecastDay: {
        margin: '0 16px 32px',
        minWidth: 100,
    },
}))


const WeatherWidgetForecast = (props) => {
    const {
        forecast,
    } = props
    
    const classes = useStyles()
    
    const renderForecastDay = ({ date, temperature }) => (
        <Card key={uuid.v4()} className={classes.forecastDay}>
            <p>{moment(date).format('ddd')}</p>
            <p>{temperature} &#8451;</p>
        </Card>
    )

    return !!forecast && (
        <div className={classes.forecastContainer}>
            <h3>{forecast.headlineText}</h3>
            <div className={classes.forecastDaysContainer}>
                {forecast.dailyForecasts.map(renderForecastDay)}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    forecast: state.forecast,
})

export default connect(mapStateToProps)(WeatherWidgetForecast)