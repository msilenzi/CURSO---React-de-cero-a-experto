import { AuthContext } from '@Context'
import { useContext } from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link, NavLink, useNavigate } from 'react-router-dom'

function SiteNavbar() {
  const { state, logout } = useContext(AuthContext)

  const navigate = useNavigate()

  function handleLogout() {
    navigate('/login', { replace: true })
    logout()
  }

  return (
    <Navbar expand="sm" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          HeroesApp
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to={'/marvel'}>
              Marvel
            </Nav.Link>
            <Nav.Link as={NavLink} to={'/dc'}>
              DC
            </Nav.Link>
            <Nav.Link as={NavLink} to={'/search'}>
              Search
            </Nav.Link>
          </Nav>
          <Nav>
            <Navbar.Text>{state.name}</Navbar.Text>
            <Nav.Link
              as={Button}
              variant="link"
              onClick={handleLogout}
              className="text-danger"
            >
              Logout
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export { SiteNavbar }
