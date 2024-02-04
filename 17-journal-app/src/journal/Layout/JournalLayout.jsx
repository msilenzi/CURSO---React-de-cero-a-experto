import PropTypes from 'prop-types'
import { Box, Toolbar } from '@mui/material'
import { Navbar, Sidebar } from '@Journal/components/ui'

const drawerWidth = 240

function JournalLayout({ children }) {
  return (
    <Box sx={{ display: 'flex' }}>
      <Navbar drawerWidth={drawerWidth} />
      <Sidebar drawerWidth={drawerWidth} />
      <Box component="main" sx={{ flexGrow: 1, p: 3, pt: 0 }}>
        <Toolbar sx={{ mb: 3 }} /> {/* Fixes problem with content under navbar */}
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
