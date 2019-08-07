import React, { Component } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import uuid from 'uuid'
import Card from '@material-ui/core/Card'
import { withStyles } from '@material-ui/core/styles'
import { getFavoriteLocationsCurrentWeather } from '../../../store/actions'
import { WeatherIcon } from '../../icons'

const styles = () => ({
	favoriteLocationsContainer: {
		display: 'flex',
		flexWrap: 'wrap',
		margin: '24px 24px 0',
	},
	favoriteLocationCard: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		minWidth: 100,
		paddingBottom: 16,
		margin: '0 16px 32px',

		'& h4': {
			marginBottom: 16,
		},

		'& small': {
			margin: '0 0 8px',
		},

		'& p': {
			margin: '0 0 16px',
		}
	},
})

class FavoritesPage extends Component {
	componentDidMount = () => {
		const { getFavoriteLocationsCurrentWeather, favoriteLocations } = this.props
		getFavoriteLocationsCurrentWeather(favoriteLocations)
	}

	renderFavoriteLocationCard = (currentWeather) => {
		const { classes } = this.props
		const { name, icon, text, temperature } = currentWeather

		return (
			<Card key={uuid.v4()} className={classes.favoriteLocationCard}>
				<h4>{name}</h4>
				<small>{temperature} &#8451;</small>
				<p>{text}</p>
				<WeatherIcon iconIndex={icon} />
			</Card>
		)
	}

	render = () => {
		const { classes, favoriteLocationsCurrentWeather = [] } = this.props
		return !!favoriteLocationsCurrentWeather.length && (
			<main className={classes.favoriteLocationsContainer}>
				{favoriteLocationsCurrentWeather.map(this.renderFavoriteLocationCard)}
			</main>
		)
	}
}

const mapStateToProps = (state) => ({
	favoriteLocations: state.favoriteLocations,
	favoriteLocationsCurrentWeather: state.favoriteLocationsCurrentWeather,
})

export default compose(
	connect(
		mapStateToProps,
		{ getFavoriteLocationsCurrentWeather }),
	withStyles(styles)
)(FavoritesPage)