import PropTypes from 'prop-types'

import { useDispatch } from 'react-redux'

import IconButton from '@mui/material/IconButton'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined'
import MenuIcon from '@mui/icons-material/Menu'

import { startLogout } from '@Store/auth'

import { AppBar } from '../styled'

function Navbar({ isDrawerOpen, toggleDrawer }) {
  const dispatch = useDispatch()

  function handleLogout() {
    dispatch(startLogout())
  }

  return (
    <AppBar position="fixed" open={isDrawerOpen}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={toggleDrawer}
          edge="start"
          sx={{ mr: 2, ...(isDrawerOpen && { display: 'none' }) }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          JournalApp
        </Typography>
        <IconButton color="inherit" onClick={handleLogout}>
          <LogoutOutlinedIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

Navbar.propTypes = {
  isDrawerOpen: PropTypes.bool.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
}

export default Navbar
