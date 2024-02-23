import PropTypes from 'prop-types'
import { DrawerHeader, MainWrapper } from '@Journal/components/styled'

function JournalLayoutWrapper({ isDrawerOpen, children }) {
  return (
    <MainWrapper open={isDrawerOpen}>
      <DrawerHeader />
      {children}
    </MainWrapper>
  )
}

JournalLayoutWrapper.propTypes = {
  isDrawerOpen: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
}

export default JournalLayoutWrapper
