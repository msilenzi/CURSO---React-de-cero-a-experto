import PropTypes from 'prop-types'
import { useState } from 'react'

import Box from '@mui/material/Box'

import { JournalLayoutWrapper, Navbar, Sidebar } from '@Journal/components/ui'

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
