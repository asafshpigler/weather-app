import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Header } from '../components'
import { WeatherPage, FavoritesPage } from '../components/pages'
import { ROUTES } from '../consts'

const AppRouter = () => (
    <Router>
        <Header />

        <Switch>
            <Route path={ROUTES.FAVORITES} component={FavoritesPage} />
            <Route path={ROUTES.WEATHER} component={WeatherPage} />
        </Switch>
    </Router>
)

export default AppRouter