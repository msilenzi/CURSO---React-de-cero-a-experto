import PropTypes from 'prop-types'
import { useMemo } from 'react'

import { useSelector } from 'react-redux'

import useMediaQuery from '@mui/material/useMediaQuery'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'

import { DRAWER_BP, DRAWER_WIDTH_PX } from '@Journal/constants'
import { DrawerHeader } from '../styled'
import SidebarItem from './SidebarItem'

function Sidebar({ isDrawerOpen, closeDrawer, handleDrawerTransitionEnd }) {
  const { displayName } = useSelector((state) => state.auth)
  const { notes } = useSelector((state) => state.journal)

  return (
    <ResponsiveDrawer
      isDrawerOpen={isDrawerOpen}
      closeDrawer={closeDrawer}
      handleDrawerTransitionEnd={handleDrawerTransitionEnd}
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
    </ResponsiveDrawer>
  )
}

Sidebar.propTypes = {
  isDrawerOpen: PropTypes.bool.isRequired,
  closeDrawer: PropTypes.func.isRequired,
  handleDrawerTransitionEnd: PropTypes.func.isRequired,
}

export default Sidebar

function ResponsiveDrawer({
  isDrawerOpen,
  closeDrawer,
  handleDrawerTransitionEnd,
  children,
}) {
  const isAboveBp = useMediaQuery((theme) => theme.breakpoints.up(DRAWER_BP))

  const drawerProps = useMemo(() => {
    const commonProps = {
      variant: isAboveBp ? 'persistent' : 'temporary',
      anchor: 'left',
      open: isDrawerOpen,
      onTransitionEnd: handleDrawerTransitionEnd,
      onClose: closeDrawer,
      ModalProps: { keepMounted: true },
      sx: {
        '& .MuiDrawer-paper': {
          boxSizing: 'border-box',
          width: DRAWER_WIDTH_PX,
        },
      },
    }

    if (isAboveBp) {
      commonProps.sx.width = DRAWER_WIDTH_PX
      commonProps.sx.flexShrink = 0
    }

    return commonProps
  }, [closeDrawer, handleDrawerTransitionEnd, isAboveBp, isDrawerOpen])

  return <Drawer {...drawerProps}>{children}</Drawer>
}

ResponsiveDrawer.propTypes = {
  isDrawerOpen: PropTypes.bool.isRequired,
  handleDrawerTransitionEnd: PropTypes.func.isRequired,
  closeDrawer: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
}
