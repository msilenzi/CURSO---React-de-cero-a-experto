import { useAuthStore } from '@Hooks'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'

function CalendarNavbar() {
  const { user, logout } = useAuthStore()

  return (
    <Navbar variant="dark" className="bg-dark">
      <Container>
        <Navbar.Brand as="div">
          <i className="fa-regular fa-calendar"></i>
          &nbsp; {user.name}
        </Navbar.Brand>
        <Button variant="outline-light" className="border-0" onClick={logout}>
          Logout &nbsp;
          <i className="fa-solid fa-arrow-right-from-bracket"></i>
        </Button>
      </Container>
    </Navbar>
  )
}

export default CalendarNavbar
