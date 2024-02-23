import PropTypes from 'prop-types'

import { useSelector } from 'react-redux'

import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'

import { DRAWER_WIDTH_PX } from '@Journal/constants'
import SidebarItem from './SidebarItem'
import { DrawerHeader } from '../styled'

function Sidebar({ isDrawerOpen, closeDrawer }) {
  const { displayName } = useSelector((state) => state.auth)
  const { notes } = useSelector((state) => state.journal)

  return (
    <Drawer
      sx={{
        width: DRAWER_WIDTH_PX,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: DRAWER_WIDTH_PX,
          boxSizing: 'border-box',
        },
      }}
      variant="persistent"
      anchor="left"
      open={isDrawerOpen}
    >
      <DrawerHeader>
        <Typography variant="h6" noWrap sx={{ ml: 1 }}>
          {displayName}
        </Typography>
        <IconButton onClick={closeDrawer}>
          <ChevronLeftIcon />
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        {notes.map((note) => (
          <SidebarItem key={note.id} note={note} />
        ))}
      </List>
    </Drawer>
  )
}

Sidebar.propTypes = {
  isDrawerOpen: PropTypes.bool.isRequired,
  closeDrawer: PropTypes.func.isRequired,
}

export default Sidebar
