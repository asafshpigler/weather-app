import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((_, props) => ({
    weatherIcon: {
        width: 42,
        height: 42,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 82,
    }
}))

const WeatherIcon = (props) => {
    const classes = useStyles(props)
    if (!props.iconIndex) return null

    return (
        <div
            className={classes.weatherIcon}
            style={{
                backgroundImage: `url(https://developer.accuweather.com/sites/default/files/${
                    props.iconIndex.toString().padStart(2, '0')
                    }-s.png)`
            }}
        />
    )
}

export default WeatherIcon