import React from 'react'
import { NavLink } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import { APP_NAME, ROUTES } from '../../consts'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    '& a': {
      textDecoration: 'none',
    },
  },
  marginRight: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
  },
  activeLink: {
    '& button': {
      color: theme.palette.primary.main,
      backgroundColor: theme.palette.secondary.main,
    },
  },
}))

const Header = () => {
  const classes = useStyles()

  return (
    <div className={`app-header ${classes.root}`}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title} color="secondary">
            {APP_NAME}
          </Typography>
		  
          <NavLink
            className={classes.marginRight}
            activeClassName={classes.activeLink}
            exact
            to={ROUTES.WEATHER}
          >
            <Button color="secondary">Weather</Button>
          </NavLink>

          <NavLink activeClassName={classes.activeLink} exact to={ROUTES.FAVORITES}>
            <Button color="secondary">Favorites</Button>
          </NavLink>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header