import React from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import { toggleFavoriteLocation } from '../../../../../store/actions'
import { WeatherIcon, HeartIcon } from '../../../../icons'

const useStyles = makeStyles(() => ({
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        
        '& button': {
            display: 'flex',
            flexDirection: 'column',
            outline: 'none',
            border: 'none',
            padding: 0,
            background: 'none',
        }
    },
    headerDetails: {
        display: 'flex',
    },
    headerDescription: {
        marginLeft: 8,

        '& p': {
            margin: 0,
        },

        '& p:nth-child(2)': {
            fontSize: '0.8em',
            marginTop: 4,
        },
    },
}))

const WeatherWidgetHeader = (props) => {
    const {
        currentLocation,
        currentWeather,
        favoriteLocations,
    } = props

    const handleClick = () => {
        const { toggleFavoriteLocation, currentLocation } = props
        toggleFavoriteLocation(currentLocation)
    }

    const classes = useStyles()

    return !!currentLocation && (
            <div className={classes.header}>
                <div className={classes.headerDetails}>
                    <WeatherIcon iconIndex={currentWeather.icon} />
                    <div className={classes.headerDescription}>
                        <p>{currentLocation.name}</p>
                        <p>{currentWeather.temperature} &#8451;</p>
                    </div>
                </div>

                <button onClick={handleClick}>
                    <HeartIcon isFilled={favoriteLocations.some(loc => loc.key === currentLocation.key)} />
                </button>
            </div>
    )
}

const mapStateToProps = (state) => ({
    currentLocation: state.currentLocation,
    currentWeather: state.currentWeather,
    favoriteLocations: state.favoriteLocations,
})

export default connect(
    mapStateToProps,
    { toggleFavoriteLocation },
)(WeatherWidgetHeader)