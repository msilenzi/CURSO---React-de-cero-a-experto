import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link, NavLink } from 'react-router-dom'

function SiteNavbar() {
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
          </Nav>
          <Nav>
            <Navbar.Text>Username</Navbar.Text>
            <Nav.Link as={NavLink} to={'/logout'} className="text-danger">
              Logout
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export { SiteNavbar }
