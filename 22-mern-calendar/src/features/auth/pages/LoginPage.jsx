import PropTypes from 'prop-types'
import { useState } from 'react'

import Container from 'react-bootstrap/Container'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'

import { LoginTab, SignUpTab } from '@Auth/components'

function LoginPage() {
  const [activeTab, setActiveTab] = useState('login')

  return (
    <Container
      as="main"
      fluid="sm"
      className="mt-5"
      style={{ maxWidth: '520px', backgroundColor: 'white' }}
    >
      <Tabs fill activeKey={activeTab} onSelect={(tab) => setActiveTab(tab)}>
        <Tab eventKey="login" title="Login">
          <TabWrapper title="Login">
            <LoginTab />
          </TabWrapper>
        </Tab>
        <Tab eventKey="signUp" title="Sign up">
          <TabWrapper title="Sign Up">
            <SignUpTab />
          </TabWrapper>
        </Tab>
      </Tabs>
    </Container>
  )
}

export default LoginPage

function TabWrapper({ title, children }) {
  return (
    <Container className="p-3 border border-1 border-top-0 rounded-bottom-2">
      <h3 className="mb-3">{title}</h3>
      {children}
    </Container>
  )
}

TabWrapper.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
}
