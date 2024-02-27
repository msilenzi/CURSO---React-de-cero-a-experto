import PropTypes from 'prop-types'
import { useState } from 'react'

import Box from '@mui/material/Box'

import { JournalLayoutWrapper, Navbar, Sidebar } from '@Journal/components/ui'

function JournalLayout({ children }) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [isClosing, setIsClosing] = useState(false)

  function closeDrawer() {
    setIsClosing(true)
    setIsDrawerOpen(false)
  }

  function toggleDrawer() {
    if (!isClosing) setIsDrawerOpen(!isDrawerOpen)
  }

  function handleDrawerTransitionEnd() {
    setIsClosing(false)
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <Navbar isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
      <Sidebar
        isDrawerOpen={isDrawerOpen}
        closeDrawer={closeDrawer}
        handleDrawerTransitionEnd={handleDrawerTransitionEnd}
      />
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
