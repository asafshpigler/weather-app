import React from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import {
	getLocationAutocomplete,
	setCurrentLocation,
	getCurrentWeather,
	getForecast,
} from '../../../store/actions'
import { Autocomplete, WeatherWidget } from '.'

const useStyles = makeStyles(() => ({
	autocompleteContainer: {
		maxWidth: 480,
		margin: '32px auto 0',
		padding: '0 12px',
	},
  }))
  
const WeatherPage = (props) => {
	const classes = useStyles()

	const handleInputChange = (e) => {
		const { value } = e.target

		if (value) {
			props.getLocationAutocomplete(value)
		}
	}

	const handleSelect = (location) => {
		const { key, value: name } = location
		props.setCurrentLocation({ name, key })
		props.getCurrentWeather(key)
		props.getForecast(key)
	}

	return (
		<div className={classes.weatherPage}>
			<div className={classes.autocompleteContainer}>
				<Autocomplete
					suggestions={props.suggestions}
					onInput={handleInputChange}
					onSelect={handleSelect}
				/>
			</div>
			<WeatherWidget />
		</div>
	)
}

const mapStateToProps = (state) => ({
	suggestions: state.suggestions,
	currentLocation: state.currentLocation,
	currentWeather: state.currentWeather,
	forecast: state.forecast,
})

export default connect(
	mapStateToProps,
	{
		getLocationAutocomplete,
		setCurrentLocation,
		getCurrentWeather,
		getForecast,
	},
)(WeatherPage)