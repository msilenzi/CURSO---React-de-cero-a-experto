// React
import PropTypes from 'prop-types'
import { useState } from 'react'

// MUI
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'

// Custom code
import { DRAWER_WIDTH_PX } from '@Journal/constants'
import { Navbar, Sidebar } from '@Journal/components/ui'
import { DrawerHeader } from '@Journal/components/styled'

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
//#region JournalLayoutWrapper

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${DRAWER_WIDTH_PX}px`,
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
