// React
import PropTypes from 'prop-types'
import { useState } from 'react'

// Redux
import { useDispatch, useSelector } from 'react-redux'

// MUI
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import MuiAppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import List from '@mui/material/List'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined'

// Custom code
import { startLogout } from '@Store/auth'
import SidebarItem from '@Journal/components/ui/SidebarItem'

const drawerWidthPx = 240

function JournalLayout({ children }) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  function openDrawer() {
    setIsDrawerOpen(true)
  }

  function closeDrawer() {
    setIsDrawerOpen(false)
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <Navbar isDrawerOpen={isDrawerOpen} openDrawer={openDrawer} />
      <Sidebar isDrawerOpen={isDrawerOpen} closeDrawer={closeDrawer} />
      <JournalLayoutWrapper isDrawerOpen={isDrawerOpen}>
        {children}
      </JournalLayoutWrapper>
    </Box>
  )
}

JournalLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default JournalLayout

//
//#region Navbar

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidthPx}px)`,
    marginLeft: `${drawerWidthPx}px`,
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

//#endregion
//

//
//#region Sidebar

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'space-between',
}))

function Sidebar({ isDrawerOpen, closeDrawer }) {
  const { displayName } = useSelector((state) => state.auth)
  const { notes } = useSelector((state) => state.journal)

  return (
    <Drawer
      sx={{
        width: drawerWidthPx,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidthPx,
          boxSizing: 'border-box',
        },
      }}
      variant="persistent"
      anchor="left"
      open={isDrawerOpen}
    >
      <DrawerHeader>
        <Typography variant="h6" noWrap sx={{ml: 1}}>
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

//#endregion
//

//
//#region JournalLayoutWrapper

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidthPx}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
)

function JournalLayoutWrapper({ isDrawerOpen, children }) {
  return (
    <Main open={isDrawerOpen}>
      <DrawerHeader />
      {children}
    </Main>
  )
}

JournalLayoutWrapper.propTypes = {
  isDrawerOpen: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
}

//#endregion
//

//
//#region (old code)

// import PropTypes from 'prop-types'
// import { Box, Toolbar } from '@mui/material'
// import { Navbar, Sidebar } from '@Journal/components/ui'

// const drawerWidth = 240

// function JournalLayout({ children }) {
//   return (
//     <Box sx={{ display: 'flex' }}>
//       <Navbar drawerWidth={drawerWidth} />
//       <Sidebar drawerWidth={drawerWidth} />
//       <ChildrenWrapper>{children}</ChildrenWrapper>
//     </Box>
//   )
// }

// function ChildrenWrapper({ children }) {
//   return (
//     <Box
//       component="main"
//       sx={{
//         flexGrow: 1,
//         p: 3,
//         pt: 0,
//         display: 'flex',
//         flexDirection: 'column',
//         minHeight: '100vh',
//         width: { xs: '100%', md: `calc(100% - ${drawerWidth}px)` },
//       }}
//     >
//       {/* Fixes problem with content under navbar */}
//       <Toolbar sx={{ mb: 3 }} />
//       {children}
//     </Box>
//   )
// }

// JournalLayout.propTypes = {
//   children: PropTypes.node.isRequired,
// }

// ChildrenWrapper.propTypes = {
//   children: PropTypes.node.isRequired,
// }

// export default JournalLayout

//#endregion
//
