import PropTypes from 'prop-types'
import { Box, Toolbar } from '@mui/material'
import { Navbar, Sidebar } from '@Journal/components/ui'

const drawerWidth = 240

function JournalLayout({ children }) {
  return (
    <Box sx={{ display: 'flex' }}>
      <Navbar drawerWidth={drawerWidth} />
      <Sidebar drawerWidth={drawerWidth} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          pt: 0,
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          width: { xs: '100%', md: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        {/* Fixes problem with content under navbar */}
        <Toolbar sx={{ mb: 3 }} />
        {children}
      </Box>
    </Box>
  )
}

JournalLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}

export default JournalLayout
