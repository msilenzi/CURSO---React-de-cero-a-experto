import { Box, Divider, Drawer, List, Toolbar, Typography } from '@mui/material'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import SidebarItem from './SidebarItem'

function Sidebar({ drawerWidth }) {
  const { displayName } = useSelector((state) => state.auth)
  const { notes } = useSelector((state) => state.journal)

  return (
    <Box
      component="nav"
      sx={{
        width: { sm: drawerWidth },
        flexShrink: { sm: 0 },
        display: { xs: 'none', md: 'inherit' },
      }}
    >
      <Drawer
        variant="permanent"
        open
        sx={{
          display: { xs: 'block' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
          },
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            {displayName}
          </Typography>
        </Toolbar>
        <Divider sx={{ mt: '-1px' }} />
        <List>
          {notes.map((note) => (
            <SidebarItem key={note.id} note={note} />
          ))}
        </List>
      </Drawer>
    </Box>
  )
}

Sidebar.propTypes = {
  drawerWidth: PropTypes.number.isRequired,
}

export default Sidebar
