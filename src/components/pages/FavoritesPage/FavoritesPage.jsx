import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getFavoriteLocationsCurrentWeather } from '../../../store/actions'
import { WeatherIcon } from '../..'
import uuid from 'uuid'

class FavoritesPage extends Component {
	componentDidMount = () => {
		const { getFavoriteLocationsCurrentWeather, favoriteLocationKeys } = this.props
		getFavoriteLocationsCurrentWeather(favoriteLocationKeys)
	}

	render = () => {
		const { favoriteLocationsCurrentWeather = [] } = this.props

		return favoriteLocationsCurrentWeather.map(currentWeater => {
			const { temperature, text, icon } = currentWeater

			return (
				<div key={uuid.v4()}>
					{temperature}
					{text}
					<WeatherIcon iconIndex={icon} />
				</div>
			)
		})
	}
}

const mapStateToProps = (state) => ({
	favoriteLocationKeys: state.favoriteLocationKeys,
	favoriteLocationsCurrentWeather: state.favoriteLocationsCurrentWeather,
})

export default connect(
	mapStateToProps,
	{ getFavoriteLocationsCurrentWeather },
)(FavoritesPage)