import React from 'react'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import theme from './theme'
import AppRouter from './AppRouter'

const App = () => (
    <MuiThemeProvider theme={theme}>
        <AppRouter />
    </MuiThemeProvider>
)

export default App
