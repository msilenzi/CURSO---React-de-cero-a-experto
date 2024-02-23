import PropTypes from 'prop-types'

import { useDispatch } from 'react-redux'

import { styled } from '@mui/material/styles'
import MuiAppBar from '@mui/material/AppBar'
import IconButton from '@mui/material/IconButton'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined'
import MenuIcon from '@mui/icons-material/Menu'

import { DRAWER_WIDTH_PX } from '@Journal/constants'
import { startLogout } from '@Store/auth'

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${DRAWER_WIDTH_PX}px)`,
    marginLeft: `${DRAWER_WIDTH_PX}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}))

function Navbar({ isDrawerOpen, openDrawer }) {
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
          onClick={openDrawer}
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
  openDrawer: PropTypes.func.isRequired,
}

export default Navbar
