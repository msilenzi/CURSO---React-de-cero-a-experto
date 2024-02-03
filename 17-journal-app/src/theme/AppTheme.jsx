import PropTypes from 'prop-types'
import { CssBaseline, ThemeProvider } from '@mui/material'
import purpleTheme from './purpleTheme'

function AppTheme({ children }) {
  return (
    <ThemeProvider theme={purpleTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}

AppTheme.propTypes = {
  children: PropTypes.element.isRequired,
}

export default AppTheme
