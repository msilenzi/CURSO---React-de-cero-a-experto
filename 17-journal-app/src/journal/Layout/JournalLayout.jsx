import PropTypes from 'prop-types'
import { Box } from '@mui/material'
import { Navbar } from '@Journal/components/ui'

const drawerWidth = 240

function JournalLayout({ children }) {
  return (
    <Box sx={{ display: 'flex' }}>
      <Navbar drawerWidth={drawerWidth} />
      {/* Sidebar */}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
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
