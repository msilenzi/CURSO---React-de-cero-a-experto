import PropTypes from 'prop-types'
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material'
import { LogoutOutlined, Menu } from '@mui/icons-material'

function Navbar({ drawerWidth }) {
  return (
    <AppBar
      sx={{
        width: { md: `calc(100% - ${drawerWidth}px)` },
        ml: { md: `${drawerWidth}px` },
      }}
      position="fixed"
    >
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2, display: { md: 'none' } }}
        >
          <Menu />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          JournalApp
        </Typography>
        <IconButton color="inherit">
          <LogoutOutlined />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

Navbar.propTypes = {
  drawerWidth: PropTypes.number.isRequired,
}

export default Navbar
