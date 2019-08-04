import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
	getLocationAutocomplete,
	setCurrentLocation,
	getCurrentWeather,
	getForecast,
} from '../../../store/actions'
import { Autocomplete, WeatherWidget } from '.'

class WeatherPage extends Component {
	handleInputChange = (e) => {
		const { value } = e.target

		if (value) {
			this.props.getLocationAutocomplete(value)
		}
	}

	handleSelect = (location) => {
		const { key, value: name } = location
		this.props.setCurrentLocation({ name, key })
		this.props.getCurrentWeather(key)
		this.props.getForecast(key)
	}

	render = () => (
		<div>
			<Autocomplete
				suggestions={this.props.suggestions}
				onInput={this.handleInputChange}
				onSelect={this.handleSelect}
			/>
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