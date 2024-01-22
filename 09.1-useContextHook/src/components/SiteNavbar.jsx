import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link, NavLink } from 'react-router-dom'

function SiteNavbar() {
  return (
    <Navbar expand="sm" bg="dark" data-bs-theme="dark" className="mb-4">
      <Container>
        <Navbar.Brand as={Link} to="/">
          useContextHook
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to={'/'}>
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to={'/about'}>
              About
            </Nav.Link>
            <Nav.Link as={NavLink} to={'/login'}>
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default SiteNavbar
