import UserContext from '@Context/UserContext'
import { useContext } from 'react'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom/'

function Home() {
  const { user } = useContext(UserContext)

  return (
    <Container>
      <h2>Home</h2>
      {user ? <pre>{JSON.stringify(user, null, 2)}</pre> : <p>Please <Link to="login">login</Link>.</p>}
    </Container>
  )
}

export default Home
